import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProfileService {
	private prisma = new PrismaClient();

	public async getProfile() {
		return await this.prisma.profile.findFirst({
			include: {
				skills: true,
				experience: true,
				projects: true,
			},
		});
	}

	public async addSkill(skillName: string, profileId: number = 1) {
		return await this.prisma.skill.create({
			data: {
				name: skillName,
				profileId: profileId,
			}
		});
	}
}
