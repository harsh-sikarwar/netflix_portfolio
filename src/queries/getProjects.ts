import { Project } from '../types';
import { staticProjects } from '../staticContent';

export async function getProjects(): Promise<Project[]> {
  return staticProjects;
}
