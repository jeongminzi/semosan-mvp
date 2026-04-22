/**
 * User 관련 타입
 * 참조: docs/CLAUDE_CODE_BRIEF.md — Database Schema
 */

export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';

export interface User {
  id: string;
  email?: string;
  nickname: string;
  profileImageUrl?: string;

  // 체력 정보
  fitnessLevel: FitnessLevel;

  // 통계
  totalHikes: number;
  totalDistance: number; // meters
  totalTime: number; // minutes
  totalCalories: number;

  // 건강 데이터
  avgStepsPerDay?: number;
  restingHeartRate?: number;

  // 메타
  createdAt: string;
  updatedAt: string;
}
