import { ContactMe } from '../types';
import { staticContactMe } from '../staticContent';

export async function getContactMe(): Promise<ContactMe> {
  return staticContactMe;
}
