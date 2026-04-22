import { mockMountains } from './mockMountains';
import { mockCourses } from './mockCourses';
import { mockHikeRecords } from './mockHikeRecords';

export { mockMountains, mockCourses, mockHikeRecords };

// Helpers
export function findMountain(id: string) {
  return mockMountains.find((m) => m.id === id);
}

export function findCourse(id: string) {
  return mockCourses.find((c) => c.id === id);
}

export function coursesByMountain(mountainId: string) {
  return mockCourses.filter((c) => c.mountainId === mountainId);
}

export function findHikeRecord(id: string) {
  return mockHikeRecords.find((r) => r.id === id);
}
