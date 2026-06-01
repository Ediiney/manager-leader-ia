import { Module } from '@nestjs/common'
import { CopywriterService } from './copywriter.service'
import { CopywriterController } from './copywriter.controller'

@Module({
  controllers: [CopywriterController],
  providers: [CopywriterService],
})
export class CopywriterModule {}
