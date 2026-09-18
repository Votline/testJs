import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
	console.log('GraphQL доступен по адресу: http://localhost:3000/graphql');
}

bootstrap();
