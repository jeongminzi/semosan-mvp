/**
 * Mountain 관련 타입
 * 참조: docs/CLAUDE_CODE_BRIEF.md — Database Schema
 */

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Mountain {
  id: string;
  name: string;

  // 위치
  latitude: number;
  longitude: number;
  region: string; // 서울특별시 강북구

  // 기본 정보
  height: number; // meters
  description?: string;
  imageUrl?: string;

  // 메타
  createdAt: string;
}

export interface MountainWithStats extends Mountain {
  userHikeCount: number;
  userTotalTime: number; // minutes
  userTotalDistance: number; // meters
}
