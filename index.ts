import { ProfileService } from './profile.service';

async function bootstrap() {
	const profileService = new ProfileService();

	console.log("get profile from psql");
	const myProfile = await profileService.getProfile();
	console.log(myProfile);

	console.log("\nadd new skill");
	const newSkill = await profileService.addSkill("NestJS");
	console.log("added skill:", newSkill);
}

bootstrap().catch(console.error);
