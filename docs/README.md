# SEMOSAN (세모산) - 프로젝트 문서

> **실시간 밀착 등산 도우미 앱**  
> Version 1.0 | 2026-04-22

---

## 📁 프로젝트 구조

```
semosan-mvp/
├── README.md                      # 이 파일
├── PROJECT_PLAN.md                # 프로젝트 마스터플랜
├── CLAUDE_CODE_BRIEF.md           # Claude Code용 통합 개발 문서
├── DESIGN_SYSTEM.md               # 디자인 시스템 (색상, 타이포, 간격)
├── LAYOUT_PATTERNS.md             # 레이아웃 패턴 라이브러리
└── references/                    # 레퍼런스 이미지 (8개)
    ├── ref-01-review-modal.png
    ├── ref-02-rating-card.png
    ├── ref-03-search-empty.png
    ├── ref-04-search-results.png
    ├── ref-05-route-list.png
    ├── ref-06-route-map.png
    ├── ref-07-route-detail.png
    └── ref-08-profile-home.png
```

---

## 📄 문서 설명

### 1. PROJECT_PLAN.md
**프로젝트 전체 계획서**

- 프로젝트 개요 및 목적
- 기술 스택 제안
- 개발 우선순위 (Phase 1~4)
- 데이터 구조 설계
- 폴더 구조
- 개발 체크리스트

**사용 대상:** PM, 개발팀 전체

---

### 2. CLAUDE_CODE_BRIEF.md ⭐ **가장 중요**
**Claude Code 터미널용 통합 개발 문서**

포함 내용:
- ✅ 프로젝트 개요
- ✅ MVP 기능 명세 (우선순위별)
- ✅ 모든 화면 구조 (ASCII 와이어프레임)
- ✅ 데이터베이스 스키마
- ✅ API 엔드포인트
- ✅ 디자인 시스템
- ✅ 기술 스택
- ✅ 폴더 구조
- ✅ 핵심 알고리즘 (페이스 계산, 일몰 경고)
- ✅ 개발 우선순위 체크리스트

**사용 대상:** Claude Code (터미널), 백엔드 개발자

**사용 방법:**
```bash
# Claude Code 실행
npx @anthropic-ai/claude-code

# 문서 내용 전달
cat CLAUDE_CODE_BRIEF.md
```

---

### 3. DESIGN_SYSTEM.md
**디자인 시스템 완전 가이드**

포함 내용:
- 🎨 Color System (Primary #03B26C, Cool Gray)
  - Primitive Colors (50~900 단계)
  - Semantic Colors (Background, Text, Border, Interactive, Status)
- 🔤 Typography (Pretendard, Medium/Semibold/Bold만)
  - Font Scale (12~48px, 8px 기반)
  - Typography Presets (Display, Heading, Body, Caption, Button)
- 📏 Spacing (8px Grid System, 0~128px)
- 🔲 Border Radius (none~full, 0~9999px)
- 🌑 Shadow (xs~xl, iOS/Android 지원)
- ⚡ Animation (Duration, Easing)
- 🎭 Opacity (0~100%)
- 📐 Size (Icon, Touch Target, Component Height)
- 🔧 Z-Index (레이어 순서)
- 🎨 Component Styles (Button, Input, Card, Badge, Modal)
- 💻 React Native 코드 예시

**사용 대상:** 디자이너, 프론트엔드 개발자

**핵심 특징:**
- Primitive + Semantic 색상 분리
- 8px Grid 엄격 준수
- Pretendard 전용 (Medium, Semibold, Bold만)
- Cool Gray 톤 (파란빛 도는 회색)

---

### 4. LAYOUT_PATTERNS.md
**레퍼런스 기반 레이아웃 패턴 라이브러리**

포함 내용:
- 📐 10가지 검증된 레이아웃 패턴
  1. Full Screen Modal
  2. Bottom Sheet Modal
  3. Search Bar with Filters
  4. Icon Grid Cards
  5. Star Rating Card
  6. Suggestion Card
  7. Action Sheet Item
  8. Transportation Route Card
  9. List Item with Thumbnail
  10. Profile Header
- 🎯 컴포넌트 조합 규칙
- 📐 반응형 규칙
- ✅ 디자인 체크리스트
- 📸 레퍼런스 이미지 분석 (8개)

**사용 대상:** 디자이너, 프론트엔드 개발자, AI

**핵심 철학:**
- 제약 기반 설계 (선택지를 줄여 실수 방지)
- 레퍼런스 학습 (네이버, 당근 등 검증된 앱 분석)
- 패턴 재사용 (AI가 베껴야 할 좋은 예시)

**모든 패턴마다 제공:**
- 구조 다이어그램 (ASCII)
- 제약 조건 (TypeScript)
- 사용 케이스
- 레퍼런스 출처

---

### 5. references/ (레퍼런스 이미지 폴더)
**8개의 고품질 레퍼런스 스크린샷**

| 파일명 | 화면 | 분석 포인트 |
|--------|------|-------------|
| `ref-01-review-modal.png` | 리뷰 작성 모달 | 큰 제목, 아이콘 그리드, 뱃지 |
| `ref-02-rating-card.png` | 별점 평가 카드 | 별점 섹션, 제안 카드 |
| `ref-03-search-empty.png` | 검색 빈 화면 | 검색바, 필터 칩, 빈 상태 |
| `ref-04-search-results.png` | 검색 결과 | 자동완성, 하이라이트 |
| `ref-05-route-list.png` | 경로 리스트 | 교통수단 탭, 타임라인 |
| `ref-06-route-map.png` | 경로 지도 | 지도 라인, 경로 칩 |
| `ref-07-route-detail.png` | 경로 상세 | 하단 시트, 액션 버튼 |
| `ref-08-profile-home.png` | 프로필 홈 | 아바타, 리스트, FAB |

**출처:** 네이버 지도, 당근마켓

---

## 🚀 Quick Start

### 1. 디자이너용
```bash
# 1. DESIGN_SYSTEM.md 읽기
# 2. Figma에서 디자인 토큰 설정
# 3. LAYOUT_PATTERNS.md 참고하여 컴포넌트 제작
# 4. references/ 이미지들과 비교
```

### 2. 개발자용 (Claude Code)
```bash
# Claude Code 실행
npx @anthropic-ai/claude-code

# 프로젝트 디렉토리로 이동
cd /path/to/semosan-mvp

# 통합 문서 읽기
cat CLAUDE_CODE_BRIEF.md

# 또는 명령어로 바로 시작
"CLAUDE_CODE_BRIEF.md 파일을 읽고 프로젝트 개발을 시작해줘. 
먼저 React Native + Expo 프로젝트를 초기화하고, 
DESIGN_SYSTEM.md의 색상과 타이포그래피를 구현해줘."
```

### 3. 프론트엔드 개발자용 (수동)
```bash
# 1. DESIGN_SYSTEM.md 읽고 tokens.ts 파일 생성
# 2. LAYOUT_PATTERNS.md에서 필요한 패턴 선택
# 3. 해당 패턴의 제약 조건대로 컴포넌트 구현
# 4. references/ 이미지와 비교하며 미세 조정
```

---

## 📋 개발 체크리스트

### Phase 1: 프로젝트 세팅 (1-2일)
- [ ] `CLAUDE_CODE_BRIEF.md` 읽기
- [ ] React Native + Expo 프로젝트 생성
- [ ] `DESIGN_SYSTEM.md` 기반 토큰 파일 생성
- [ ] 폴더 구조 구축
- [ ] 기본 컴포넌트 (Button, Card) 구현

### Phase 2: 디자인 시스템 구축 (2-3일)
- [ ] 색상 시스템 (`colors.ts`)
- [ ] 타이포그래피 (`typography.ts`)
- [ ] 간격 시스템 (`spacing.ts`)
- [ ] Border Radius, Shadow 정의
- [ ] 공용 컴포넌트 10개 구현

### Phase 3: 화면 개발 (2-3주)
- [ ] 홈 화면 (지도형/리스트형)
- [ ] 산목록 (검색, 필터)
- [ ] 트래킹 (GPS, 타이머, 일몰 경고) ⭐ 가장 중요
- [ ] LiveClimb (구간별 사진)
- [ ] 온보딩 (소셜 로그인)
- [ ] 기록 아카이빙

---

## 🎨 디자인 시스템 핵심 요약

### 색상
```typescript
Primary: #03B26C (등산 녹색)
Gray: Cool Gray (파란빛 회색)
Success: #22C55E
Warning: #F59E0B
Danger: #EF4444
```

### 타이포그래피
```typescript
Font: Pretendard
Weights: Medium(500), Semibold(600), Bold(700)
Scale: 12, 14, 16, 18, 20, 24, 28, 32, 40, 48px
```

### 간격
```typescript
8px Grid: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96px
```

### Border Radius
```typescript
Base: 8px, MD: 12px, LG: 16px, XL: 20px, Full: 9999px
```

---

## 🎯 핵심 패턴 Quick Reference

| 패턴 | 사용처 | 핵심 제약 |
|------|--------|-----------|
| Full Screen Modal | 리뷰 작성, 설정 | Header 56px, Title 80-120px |
| Bottom Sheet | 선택, 정보 | Handle 40px, Radius 20px |
| Search + Filters | 산 검색 | 48px 높이, 8px 칩 간격 |
| Icon Grid | 카테고리 | 4열 고정, 88px 높이 |
| Star Rating | 리뷰 평가 | 48px 별, 중앙 정렬 |
| Route Card | 대중교통 | 32px 시간, 타임라인 8px |
| List Item | 장소 목록 | 56x56px 썸네일, 72px 높이 |
| Profile Header | 마이페이지 | 64x64px 아바타 |

---

## 📞 문의 및 피드백

프로젝트 관련 질문이나 개선 사항이 있으면 팀에 공유해주세요!

---

**문서 버전**: 1.0  
**최종 업데이트**: 2026-04-22  
**제작**: SEMOSAN Product Team

---

## 🌟 Next Steps

1. **디자이너**: Figma 컴포넌트 라이브러리 구축
2. **개발자**: Claude Code로 개발 시작
3. **PM**: 우선순위 조정 및 스프린트 계획

**Let's build SEMOSAN! 🏔️**
