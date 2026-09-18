import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';

@Module({
	imports: [
	GraphQLModule.forRoot<ApolloDriverConfig>({
		driver: ApolloDriver,
		autoSchemaFile: join(process.cwd(), 'schema.gql'),
		playground: true,
	}),
	],
	providers: [ProfileService, ProfileResolver],
})
export class AppModule {}
