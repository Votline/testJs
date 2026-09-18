import { Resolver, Query, Mutation, Args, ObjectType, Field, ID } from '@nestjs/graphql';
import { ProfileService } from './profile.service';

@ObjectType()
class SkillType {
	@Field(() => ID)
	id: number;

	@Field()
	name: string;
}

@ObjectType()
class ExperienceType {
	@Field(() => ID)
	id: number;

	@Field()
	company: string;

	@Field()
	position: string;

	@Field()
	period: string;

	@Field()
	achievments: string;
}

@ObjectType()
class ProjectType {
	@Field(() => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	url: string;
}

@ObjectType()
class ProfileType {
	@Field(() => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field()
	githubUrl: string;

	@Field(() => [SkillType])
	skills: SkillType[];

	@Field(() => [ExperienceType])
	experience: ExperienceType[];

	@Field(() => [ProjectType])
	projects: ProjectType[];
}

@Resolver(() => ProfileType)
export class ProfileResolver {
	constructor(private profileService: ProfileService) {}

	@Query(() => ProfileType, { name: 'profile', nullable: true })
	async getProfile() {
		return this.profileService.getProfile();
	}

	@Mutation(() => SkillType)
	async addSkill(@Args('name', { type: () => String }) name: string) {
		return this.profileService.addSkill(name);
	}
}
