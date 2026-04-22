/**
 * Course (등산 코스) 관련 타입
 * 참조: docs/CLAUDE_CODE_BRIEF.md — Database Schema
 */

import type { LatLng } from './mountain';

export type CourseDifficulty = 'easy' | 'medium' | 'hard';

export interface CourseFacilities {
  restrooms?: Array<'start' | 'middle' | 'end'>;
  shops?: Array<'start' | 'middle' | 'end'>;
  shelters?: Array<'start' | 'middle' | 'end'>;
}

export interface Course {
  id: string;
  mountainId: string;

  name: string;
  difficulty: CourseDifficulty;

  // 코스 정보
  distance: number; // meters
  estimatedTime: number; // minutes
  elevationGain: number; // meters
  ascentPercentage?: number; // 0-100

  // 경로 좌표
  routeCoordinates: LatLng[];

  // 출발/도착
  startPoint?: string;
  endPoint?: string;

  // 시설 정보
  facilities?: CourseFacilities;

  // 메타
  createdAt: string;
}
