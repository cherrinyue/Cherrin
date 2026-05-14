export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  type: "AI App" | "B2B SaaS" | "Consumer Tool" | "Experiment";
  tags: string[];
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}
