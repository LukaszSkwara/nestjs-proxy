import { Controller, Post, Request } from '@nestjs/common';
import axios from 'axios';
import { apiUrl } from '../config';

@Controller('proxy')
export class HttpProxyController {
  @Post('graphql')
  async graphql(@Request() request): Promise<any> {
    return (await axios.post(apiUrl, JSON.stringify(request.body), { headers: { ...request.headers, 'Content-Type': 'application/json' } })).data;
  }
}
