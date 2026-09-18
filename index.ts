import { ProfileService } from "./profile.service";

const profileService = new ProfileService();

const myProfile = profileService.getProfile();

console.log("имя и описание");
console.log(`имя: ${myProfile.name}`);
console.log(`описание: ${myProfile.description}`);

console.log("\nсписок навыков");
myProfile.skills.forEach((skill) => {
    console.log(`- [${skill.id}] ${skill.name}`);
});

console.log("\nдобавление нового навыка");
const addedSkill = profileService.addSkill("NestJS");
console.log(`добавлен: ${addedSkill.name} (ID: ${addedSkill.id})`);

console.log("\nвсе проекты");
console.log(myProfile.projects);
