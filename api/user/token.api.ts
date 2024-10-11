import { Request } from '../../utils/request.ts'
import { ResultReq } from '../../models/result.ts'
import type { Response } from '../../models/response.ts'
import { Builder } from '../../utils/builder.ts'
import { DeleteUserTokenResult, GetUserTokenResult } from '../../models/api/user/token.ts'
import { all } from './token/all.api.ts'

export class token {
  private readonly req = new Request()
  private readonly token: string

  /**
   * /api/v2/user/token
   * @param token 登录令牌
   */
  constructor(token: string) {
    this.token = token
  }

  // 子级导入
  public readonly all = () => new all(this.token)

  /**
   * GET
   */
  public async get(): Promise<Response> {
    const rs = await this.req.get('/user/token', null, {
      Authorization: 'Bearer ' + this.token
    })
    const res = new GetUserTokenResult(rs.data.status, rs.data.message, {
      id: rs.data.data.id,
      email: rs.data.data.email,
      username: rs.data.data.username
    })
    const rsx = new ResultReq(rs.status)
    return Builder.build(res, rsx)
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
    const res = new DeleteUserTokenResult(rs.data.status, rs.data.message, {})
    const rsx = new ResultReq(rs.status)
    return Builder.build(res, rsx)
  }
}
