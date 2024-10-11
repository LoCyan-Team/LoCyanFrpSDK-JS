import {Request} from "../utils/request.ts";
import type {Response} from "../models/response.ts";
import {ResultReq} from "../models/result.ts";
import {Builder} from "../utils/builder.ts";
import {DeleteICPResult, GetICPResult, PostICPResult} from "../models/api/icp.ts";

export class icp {
  private readonly req = new Request()
  private readonly token: string;

  /**
   * /api/v2/icp
   * @param token 登录令牌
   */
  constructor(token: string) {
    this.token = token
  }

  /**
   * GET
   * @param username 用户名
   */
  public async get(username: string): Promise<Response> {
    const rs = await this.req.get(
        '/icp',
        {
          username: username
        },
        {
          'Authorization': 'Bearer ' + this.token
        }
    )
    const res = new GetICPResult(
        rs.data.status,
        rs.data.message,
        {
          list: rs.data.data.list
        }
    )
    const rsx = new ResultReq(
        rs.status
    )
    return Builder.build(res, rsx)
  }

  /**
   * POST
   * @param username 用户名
   * @param domain   域名
   */
  public async post(username: string, domain: string): Promise<Response> {
    const rs = await this.req.post(
        '/icp',
        {
          username: username,
          domain: domain
        },
        null,
        {
          'Authorization': 'Bearer ' + this.token
        }
    )
    const res = new PostICPResult(
        rs.data.status,
        rs.data.message,
        {
          icp: rs.data.data.icp,
          nature_name: rs.data.data.nature_name,
          unit_name: rs.data.data.unit_name
        }
    )
    const rsx = new ResultReq(
        rs.status
    )
    return Builder.build(res, rsx)
    // return base.buildResponse(await rs)
  }

  /**
   * DELETE
   * @param username  用户名
   * @param domain_id 域名 ID
   */
  public async delete(username: string, domain_id: number): Promise<Response> {
    const rs = await this.req.delete(
        '/icp',
        {
          username: username,
          id: domain_id
        },
        {
          'Authorization': 'Bearer ' + this.token
        }
    )
    const res = new DeleteICPResult(
        rs.data.status,
        rs.data.message,
        {}
    )
    const rsx = new ResultReq(
        rs.status
    )
    return Builder.build(res, rsx)
  }
}

export default icp
