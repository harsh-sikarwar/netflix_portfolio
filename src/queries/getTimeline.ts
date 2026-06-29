import { TimelineItem } from '../types';
import { staticTimeline } from '../staticContent';

export async function getTimeline(): Promise<TimelineItem[]> {
  return staticTimeline;
}
