import { Controller, Get } from '@nestjs/common';
import { appName, stage, version } from '../config';

@Controller('status')
export class StatusController {
  @Get()
  async getStatus(): Promise<any> {
    return this.status();
  }

  @Get('liveness')
  async getLiveness(): Promise<any> {
    return this.status();
  }

  @Get('readiness')
  async getReadiness(): Promise<any> {
    return this.status();
  }

  private status() {
    return { status: 'OK', appName, stage, version, heapUsed: process.memoryUsage().heapUsed / 1024 / 1024 };
  }
}
