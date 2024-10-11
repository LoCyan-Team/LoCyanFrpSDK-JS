import { Request } from '../../utils/request.ts'
import type { Response } from '../../models/response.ts'

export class password {
  private readonly req = new Request()
  private readonly token: string

  /**
   * /api/v2/user/password
   * @param token 登录令牌
   */
  constructor(token: string) {
    this.token = token
  }

  public async post(
    username: string,
    old_password: string | null,
    new_password: string,
    verify_code: string | null
  ): Promise<Response> {
    const rs = await this.req.post('/user/password', {})
  }
}
