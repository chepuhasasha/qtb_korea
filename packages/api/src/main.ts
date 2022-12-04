import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './modules/app/app.module';
import { RolesGuard } from './guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('QTB KOREA API')
    .setDescription('qtb korea API description')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-QTB-KEY',
        in: 'header',
        description: 'Enter your API key',
      },
      'X-QTB-KEY',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  // LISTEN
  await app.listen(3000);
}
bootstrap();
