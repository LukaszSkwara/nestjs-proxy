import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as httpProxy from 'http-proxy';
import { wsUrl } from './config';
const proxy = httpProxy.createProxyServer({ target: wsUrl, ws: true });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.getHttpServer().on('upgrade', (req, socket, head) => {
    console.log('proxying upgrade request', req.url);
    // proxy.ws(req, socket, head);
  });
  await app.listen(3001);
}
bootstrap();
