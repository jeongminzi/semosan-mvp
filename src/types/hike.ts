/**
 * Hike (등반 기록) 관련 타입
 * 참조: docs/CLAUDE_CODE_BRIEF.md — Database Schema
 */

import type { LatLng } from './mountain';

export type DifficultyFeedback = 'easier' | 'appropriate' | 'harder';

export interface HikeRecord {
  id: string;
  userId: string;
  mountainId: string;
  courseId: string;

  // 시간
  startTime: string;
  endTime?: string;
  duration?: number; // minutes

  // 측정값
  distance?: number; // meters (실제 이동)
  maxAltitude?: number;
  avgPace?: number; // km/h
  calories?: number;

  // 경로
  actualRoute: LatLng[];

  // 상태
  completed: boolean;
  summitReached: boolean;

  // 피드백
  difficultyFeedback?: DifficultyFeedback;

  // 메타
  createdAt: string;
}

export interface LiveClimbPhoto {
  id: string;
  hikeRecordId: string;

  // 위치
  altitude: number;
  latitude?: number;
  longitude?: number;

  // 이미지
  imageUrl: string;

  // 메타
  capturedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  mountainId: string;
  courseId: string;
  hikeRecordId: string;

  // 평가 (1-5)
  accessibilityRating?: number;
  facilitiesRating?: number;
  sceneryRating?: number;

  // 내용
  content?: string;

  // 사진
  photoUrls?: string[];

  // 메타
  createdAt: string;
}
