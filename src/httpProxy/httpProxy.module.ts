import { Module } from '@nestjs/common';
import { HttpProxyController } from './httpProxy.controller';

@Module({
  controllers: [HttpProxyController],
})
export class HttpProxyModule {}
