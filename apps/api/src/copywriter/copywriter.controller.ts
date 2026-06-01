import { Body, Controller, Post } from '@nestjs/common'
import { CopywriterService } from './copywriter.service'

export type CopyRequestDto = {
  segment: string
  city: string
  score: number
  problems: string
}

@Controller('copywriter')
export class CopywriterController {
  constructor(private readonly copywriterService: CopywriterService) {}

  @Post('generate')
  async generate(@Body() body: CopyRequestDto) {
    return this.copywriterService.generate(body)
  }
}
