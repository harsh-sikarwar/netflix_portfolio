import { ProfileBanner } from '../types';
import { staticProfileBanner } from '../staticContent';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return staticProfileBanner;
}
