import type { Response } from '../../../models/response.ts'
import { DeleteUserTokenAllResult } from '../../../models/api/user/token/all.ts'
import { ResultReq } from '../../../models/result.ts'
import { Builder } from '../../../utils/builder.ts'
import { Request } from '../../../utils/request.ts'

export class all {
  private readonly req = new Request()
  private readonly token: string

  /**
   * /api/v2/user/token
   * @param token 登录令牌
   */
  constructor(token: string) {
    this.token = token
  }

  /**
   * DELETE
   * @param username 用户名
   */
  public async delete(username: string): Promise<Response> {
    const rs = await this.req.delete(
      '/user/token',
      {
        username: username
      },
      {
        Authorization: 'Bearer ' + this.token
      }
    )
    const res = new DeleteUserTokenAllResult(rs.data.status, rs.data.message, {})
    const rsx = new ResultReq(rs.status)
    return Builder.build(res, rsx)
  }
}
