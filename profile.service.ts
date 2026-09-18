import { Profile, Skill } from "./types";

export class ProfileService {
	private profile: Profile = {
		id: 1,
		name: "Go & TS Backend Developer",
		description: "Бэкенд-инженер с опытом на Go и TypeScript",
		githubUrl: "https://github.com/Votline/testJs",
		skills: [
			{ id: 1, name: "Go" },
			{ id: 2, name: "TypeScript" },
			{ id: 3, name: "PostgreSQL" },
			{ id: 4, name: "Redis" },
			{ id: 5, name: "GraphQL" },
			{ id: 6, name: "Kubernetes" },
			{ id: 7, name: "Docker" },
			{ id: 8, name: "Prometheus" },
			{ id: 9, name: "Grafana" },
		],
		experience: [
			{
				id: 1,
				company: "EdTech Company",
				position: "Backend Developer",
				period: "2025 - 2026",
				achievments: "Разработка",
			},
			{
				id: 2,
				company: "VoIP Telecom",
				position: "Backend Developer",
				period: "2024 - 2025",
				achievments: "Разработка",
			}
		],
		projects: [
			{
				id: 1,
				name: "Gurl-cli: интеграционное тестирование с DSL",
				url: "https://github.com/Votline/Gurl-cli"
			},
			{
				id: 2,
				name: "Цифровая визитка",
				url: "https://github.com/Votline/testJs"
			},
		],
	};

	public getProfile(): Profile {
		return this.profile;
	}

	public addSkill(skillName: string): Skill {
		const newSkill: Skill = {
			id: this.profile.skills.length + 1,
			name: skillName,
		};
		this.profile.skills.push(newSkill);
		return newSkill;
	}
}
