import {Request} from '../utils/request'
import {Builder} from "../utils/builder.ts";

import {GetSignResult, PostSignResult} from "../models/api/sign";
import type {Response} from "../models/response";
import {ResultReq} from "../models/result";

export class sign {
  private readonly req = new Request()
  private readonly token: string;

  /**
   * /api/v2/sign
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
        '/sign',
        {
          username: username
        },
        {
          'Authorization': 'Bearer ' + this.token
        }
    )
    const res = new GetSignResult(
        rs.data.status,
        rs.data.message,
        {
          status: rs.data.data.status,
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
   */
  public async post(username: string): Promise<Response> {
    const rs = await this.req.post(
        '/sign',
        {
          username: username
        },
        null,
        {
          'Authorization': 'Bearer ' + this.token
        },
    )
    const res = new PostSignResult(
        rs.data.status,
        rs.data.message,
        {
          first_sign: rs.data.data.first_sign,
          get_traffic: rs.data.data.get_traffic,
          sign_count: rs.data.data.sign_count,
          total_get_traffic: rs.data.data.total_get_traffic
        }
    )
    const rsx = new ResultReq(
        rs.status
    )
    return Builder.build(res, rsx)
  }
}

export default sign
