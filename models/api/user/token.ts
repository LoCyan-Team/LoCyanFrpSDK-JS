import type { ResultData } from '../../result.ts'

export class GetUserTokenResult implements ResultData {
  constructor(
    public status: number,
    public message: string,
    public data: {
      id: number
      email: string
      username: string
    }
  ) {
    this.status = status
    this.message = message
    this.data = data
  }
}

export class DeleteUserTokenResult implements ResultData {
  constructor(
    public status: number,
    public message: string,
    public data: {}
  ) {
    this.status = status
    this.message = message
    this.data = data
  }
}
