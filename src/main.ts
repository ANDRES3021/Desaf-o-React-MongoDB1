import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = 3000;
  await app.listen(await port);
  console.log(`🚀 Server running on: http://localhost:${port}`);
}
bootstrap();
