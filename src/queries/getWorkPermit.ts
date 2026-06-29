import { WorkPermit } from '../types';
import { staticWorkPermit } from '../staticContent';

export async function getWorkPermit(): Promise<WorkPermit> {
  return staticWorkPermit;
}
