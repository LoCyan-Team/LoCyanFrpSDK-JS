import type { ResultData } from '../../result.ts'

export class GetUserInfoResult implements ResultData {
  constructor(
    public status: number,
    public message: string,
    public data: {
      id: number
      username: string
      email: string
      traffic: string
      qq: number
      qq_social_id: string
      reg_time: string
      inbound: number
      outbound: number
    }
  ) {
    this.status = status
    this.message = message
    this.data = data
  }
}
