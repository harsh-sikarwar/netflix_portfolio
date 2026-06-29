import { Certification } from '../types';
import { staticCertifications } from '../staticContent';

export async function getCertifications(): Promise<Certification[]> {
  return staticCertifications;
}
