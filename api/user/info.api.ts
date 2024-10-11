import { Request } from '../../utils/request.ts'
import type { Response } from '../../models/response.ts'
import { GetUserInfoResult } from '../../models/api/user/info.ts'
import { ResultReq } from '../../models/result.ts'
import { Builder } from '../../utils/builder.ts'

export class info {
  private readonly req = new Request()
  private readonly token: string

  /**
   * /api/v2/user/info
   * @param token 登录令牌
   */
  constructor(token: string) {
    this.token = token
  }

  /**
   * GET
   */
  public async get(username: string): Promise<Response> {
    const rs = await this.req.get(
      '/user/info',
      {
        username: username
      },
      {
        Authorization: 'Bearer ' + this.token
      }
    )
    const res = new GetUserInfoResult(rs.data.status, rs.data.message, {
      email: rs.data.data.email,
      id: rs.data.data.id,
      inbound: rs.data.data.inbound,
      outbound: rs.data.data.outbound,
      qq: rs.data.data.qq,
      qq_social_id: rs.data.data.qq_social_id,
      reg_time: rs.data.data.reg_time,
      traffic: rs.data.data.traffic,
      username: rs.data.data.username
    })
    const rsx = new ResultReq(rs.status)
    return Builder.build(res, rsx)
  }
}
