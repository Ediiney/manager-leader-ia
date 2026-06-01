import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Manager Lead Forge AI API is running' }
  }
}
