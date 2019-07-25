import { Controller, Post, Request, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { apiUrl, serviceAccountPublicKey } from '../config';
import { get, mapKeys } from 'lodash';
import * as jwt from 'jsonwebtoken';

@Controller('v1')
export class HttpProxyController {
  @Post('graphql')
  async graphql(@Request() request): Promise<any> {
    // const headers = mapKeys((request || {}).headers, (value: string, key: string) => key.toLowerCase());
    // const authToken = get(headers, 'authorization', '');
    // try {
    //   const session = jwt.verify(authToken.split(' ')[1], serviceAccountPublicKey);
    // } catch {
    //   throw new UnauthorizedException();
    // }
    // console.log(request.body);
    return (await axios.post(apiUrl, JSON.stringify(request.body),
      {
        headers: { 'Content-Type': 'application/json' },
      })).data;
  }
}
