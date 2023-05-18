import { promises as fs } from "fs";
import path from "path";

export async function getApps(): Promise<Application[]> {
  // apps file location
  const appsFileLoc = path.join(process.cwd(), "./public/apps/apps.json");

  // read file
  const fileContents = await fs.readFile(appsFileLoc, "utf8");

  return JSON.parse(fileContents);
}

export interface Application {
  name: string;
  category: string;
  description: string;
  assets: {
    logo: string;
    thumbnail: string;
  };
  links: {
    website?: string;
    discord?: string;
    twitter?: string;
    github?: string;
  };
}
