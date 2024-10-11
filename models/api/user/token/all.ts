import type { ResultData } from '../../../result.ts'

export class DeleteUserTokenAllResult implements ResultData {
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
