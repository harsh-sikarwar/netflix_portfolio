import { Skill } from '../types';
import { staticSkills } from '../staticContent';

export async function getSkills(): Promise<Skill[]> {
  return staticSkills;
}
