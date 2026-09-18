export interface Skill {
	id: number;
	name: string;
}

export interface Experience {
	id: number;
	company: string;
	position: string;
	period: string;
	achivements: string;
}

export interface Project {
	id: number;
	name: string;
	url: string;
}

export interface Profile {
	id: number;
	name: string;
	description: string;
	githuburl: string;
	skills: Skill[];
	experience: Experience[];
	projects: Project[];
}
