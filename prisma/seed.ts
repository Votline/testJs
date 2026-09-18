import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.skill.deleteMany();
	await prisma.experience.deleteMany();
	await prisma.project.deleteMany();
	await prisma.profile.deleteMany();

	const profile = await prisma.profile.create({
	data: {
		name: "Go & TS Backend Developer",
		description: "Бэкенд-инженер с опытом на Go и TypeScript",
		githubUrl: "https://github.com/Votline/testJs",
		skills: {
			create: [
				{ name: "Go" },
				{ name: "TypeScript" },
				{ name: "PostgreSQL" },
				{ name: "Redis" },
				{ name: "GraphQL" },
				{ name: "Kubernetes" },
				{ name: "Docker" },
				{ name: "Prometheus" },
				{ name: "Grafana" },
			],
		},
		experience: {
			create: [
				{
					company: "EdTech Company",
					position: "Backend Developer",
					period: "2025 - 2026",
					achievments: "Разработка высоконагруженных сервисов",
				},
				{
					company: "VoIP Telecom",
					position: "Backend Developer",
					period: "2024 - 2025",
					achievments: "Разработка телеком решений",
				},
			],
		},
		projects: {
			create: [
				{
					name: "Gurl-cli: интеграционное тестирование с DSL",
					url: "https://github.com/Votline/Gurl-cli",
				},
				{
					name: "Цифровая визитка",
					url: "https://github.com/Votline/testJs",
				},
			],
			},
		},
	});

	console.log("Successfully filled. ID:", profile.id);
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async() => {
		await prisma.$disconnect();
	});
