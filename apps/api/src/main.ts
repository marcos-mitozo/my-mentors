import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
    app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const config = new DocumentBuilder()
    .setTitle('My Mentors')
    .setVersion('1.0')
    .addTag('mentors')
    .build();

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
