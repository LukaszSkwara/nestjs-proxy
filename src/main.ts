import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { apiUrl, wsUrl, port } from './config';
import * as httpProxyMiddleware from 'http-proxy-middleware';

async function bootstrap() {
  // const proxy = require('http-proxy-middleware');
  // const proxy = httpProxyMiddleware('/', {
  //   target: apiUrl,
  //   logLevel: 'debug',
  // });
  const wsProxy = httpProxyMiddleware('/', {
    target: apiUrl,
    changeOrigin: false,
    ws: true, // enable websocket proxy
    logLevel: 'debug',
    // pathRewrite: {
    //   '^/v1/graphql' : '',
    // },
  });
  const app = await NestFactory.create(AppModule);
  // app.use('/', (req) => {
  //   console.log(req.path);
  //   httpProxyMiddleware(
  //     {
  //       target: apiUrl,
  //       changeOrigin: true,
  //       logLevel: 'debug',
  //       onError: (error) => {
  //         console.log(error);
  //       },
  //   });
  // });
  // app.use('/', proxy);
  app.use('/', wsProxy);
  const server = await app.listen(port);
  Logger.log(`Port ${port}`);
  server.on('upgrade', wsProxy.upgrade);
}
bootstrap();
