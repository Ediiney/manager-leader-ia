import { Controller, Get, Query } from '@nestjs/common'
import { LeadsService } from './leads.service'

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get('search')
  search(@Query('q') query = '') {
    return { results: this.leadsService.search(query) }
  }
}
