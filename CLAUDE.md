# SEMOSAN (세모산) — Claude Code 작업 가이드

> **이 파일은 Claude Code가 세션 시작 시 자동으로 읽습니다.**
> 이 프로젝트에서 코드를 작성하거나 디자인을 적용할 때 **반드시 아래 규칙을 따르세요.**

---

## 🚨 최우선 규칙 — 반드시 준수

### 필수 참고 문서 (작업 전 반드시 확인)

다음 3개 문서는 **프로젝트의 진실 공급원(Source of Truth)** 입니다. 질문이 생기거나 코드/디자인을 작성할 때 **답을 먼저 이 문서들에서 찾으세요**:

| 우선순위 | 문서 | 경로 | 언제 참고? |
|---|---|---|---|
| **1순위** | 통합 개발 브리프 | `docs/CLAUDE_CODE_BRIEF.md` | 모든 기능/화면/API/DB 스키마 확인 |
| **2순위** | 레이아웃 패턴 라이브러리 | `docs/LAYOUT_PATTERNS.md` | 화면/컴포넌트 레이아웃 짤 때 |
| **3순위** | 문서 인덱스 | `docs/README.md` | 다른 문서 위치/용도 파악 |

**규칙**:
1. 새 화면/컴포넌트를 만들기 전에 `docs/LAYOUT_PATTERNS.md`에서 **유사 패턴을 먼저 찾으세요**. 10개 검증된 패턴 중 하나를 **베껴서** 시작합니다 — 새로 만들지 않습니다.
2. 간격/크기/색상은 **절대 하드코딩 금지**. 디자인 토큰만 사용합니다.
3. 데이터 모델/API는 `docs/CLAUDE_CODE_BRIEF.md`의 스키마를 그대로 사용합니다.
4. 우선순위는 브리프의 "MVP 기능 명세 (1순위 → 3순위)" 순서대로 구현합니다.

---

## 🎨 디자인 시스템 Quick Reference

**상세 정의는** `docs/CLAUDE_CODE_BRIEF.md` 및 `docs/LAYOUT_PATTERNS.md`에 있습니다. 아래는 자주 쓰는 값 요약.

### 색상
- **Primary**: `#03B26C` (등산 녹색) — CTA, 활성 상태, 주요 강조
- **Gray**: Cool Gray 계열 (파란빛 회색, 50~900 단계) — 텍스트/배경/보더
- **Status**: Success `#22C55E` · Warning `#F59E0B` · Danger `#EF4444`
- **규칙**: Primary 남용 금지 · 텍스트는 기본 Gray[900] / 보조 Gray[600-700]

### 타이포그래피
- **Font**: Pretendard (한글/영문 모두 동일) — 다른 폰트 금지
- **Weight**: `Medium(500)`, `Semibold(600)`, `Bold(700)` 이 3개만 사용
- **Scale**: 12, 14, 16, 18, 20, 24, 28, 32, 40, 48 (8px 기반)

### 간격 (8px Grid 엄수)
- 사용 가능 값: `0, 4, 8, 12, 16, 24, 32, 48, 64, 96px`
- 하드코딩 절대 금지. `Spacing[2]` = 8px, `Spacing[4]` = 16px 식으로 토큰 사용

### Border Radius
- `sm: 4`, `base: 8`, `md: 12`, `lg: 16`, `xl: 20`, `full: 9999`

### Touch Target
- 최소 44×44px. 버튼/탭 영역 이보다 작게 만들지 말 것.

### 아이콘 라이브러리 (필수)
- **Phosphor Icons (Fill weight)** 만 사용: https://phosphoricons.com/?weight=fill
- **Weight 고정**: `fill` (다른 weight — regular/thin/light/bold/duotone 사용 금지)
- **패키지**:
  - React Native: `phosphor-react-native`
  - 웹 데모/프로토타입: `@phosphor-icons/web` 또는 CDN
- **사용 예**:
  ```tsx
  import { House, Mountains, MapPin, Camera } from 'phosphor-react-native';
  <House size={24} weight="fill" color={Colors.gray[900]} />
  ```
- **규칙**:
  - 모든 아이콘 호출 시 `weight="fill"` 명시 (기본값 바뀔 위험 방지)
  - 크기는 디자인 토큰 사용: `IconSize.sm(16) / md(24) / lg(32) / xl(40)`
  - 이모지(🏔, 📸 등)로 아이콘 대체 금지. 반드시 Phosphor 컴포넌트 사용

---

## 🧩 레이아웃 패턴 (10가지, `docs/LAYOUT_PATTERNS.md`)

새 화면 작업 시 먼저 이 중에서 해당되는 패턴을 선택하세요:

| # | 패턴 | 사용처 |
|---|---|---|
| 1 | Full Screen Modal | 리뷰 작성, 설정 |
| 2 | Bottom Sheet Modal | 선택, 정보, 액션 시트 |
| 3 | Search Bar with Filters | 산/장소 검색 |
| 4 | Icon Grid Cards | 카테고리, 퀵 액션 (4열) |
| 5 | Star Rating Card | 리뷰 평가 (48px 별) |
| 6 | Suggestion Card | 안내, 추천 메시지 |
| 7 | Action Sheet Item | 메뉴, 옵션 리스트 |
| 8 | Transportation Route Card | 대중교통, 경로 |
| 9 | List Item with Thumbnail | 장소/콘텐츠 목록 (56px 썸네일) |
| 10 | Profile Header | 마이페이지 (64px 아바타) |

---

## 🏗 기술 스택 (브리프 기준)

- **Framework**: Expo (React Native) + TypeScript
- **State**: Zustand
- **Navigation**: React Navigation (bottom-tabs + native-stack)
- **Backend/DB**: Supabase
- **Maps**: react-native-maps (또는 Mapbox)
- **Sensors**: expo-location, expo-sensors
- **Media**: expo-camera, expo-speech

---

## 📁 프로젝트 구조 (현재 & 계획)

```
semosan-mvp/
├── CLAUDE.md                       ← 이 파일 (세션 가이드)
├── README.md                       ← 사람용 프로젝트 소개
├── docs/                           ← 🚨 필수 참고 문서
│   ├── CLAUDE_CODE_BRIEF.md       (1순위: 전체 브리프)
│   ├── LAYOUT_PATTERNS.md         (2순위: 레이아웃 라이브러리)
│   └── README.md                   (3순위: 문서 인덱스)
├── references/                     ← 레퍼런스 이미지 (추가 예정)
├── wireframes/                     ← Lo-fi 와이어프레임 (HTML)
│   ├── index.html
│   └── styles.css
└── (앱 코드 — 미구현)
    └── src/
        ├── app/
        ├── features/
        ├── shared/
        ├── services/
        ├── store/
        └── types/
```

---

## ✅ 작업 시 체크리스트

### 새 화면을 만들 때
- [ ] `docs/CLAUDE_CODE_BRIEF.md`에서 해당 화면 스펙 확인
- [ ] `docs/LAYOUT_PATTERNS.md`에서 관련 패턴 선택
- [ ] 패턴의 제약 조건(간격/크기/색상) 그대로 적용
- [ ] Spacing/FontSize/BorderRadius 토큰만 사용 (하드코딩 금지)
- [ ] Touch target 44×44px 이상 확인
- [ ] Safe Area 고려 (하단 34px)

### 새 컴포넌트를 만들 때
- [ ] 기존 `shared/components/`에 비슷한 것 없는지 먼저 확인
- [ ] 패턴 라이브러리에 해당 패턴 있는지 확인
- [ ] Props 인터페이스는 `types/`에 분리
- [ ] 디자인 토큰만 참조 (절대값 금지)

### 데이터/API 작업할 때
- [ ] `docs/CLAUDE_CODE_BRIEF.md`의 "Database Schema" 섹션 기준
- [ ] API 엔드포인트 명세 기준
- [ ] Supabase 클라이언트는 `services/supabase/client.ts` 경유

---

## 🎯 개발 우선순위 (브리프 Sprint 기준)

1. **Sprint 1**: 프로젝트 세팅 (Expo + 디자인 시스템 + 공용 컴포넌트)
2. **Sprint 2-3**: 홈, 산목록, 산/코스 상세
3. **Sprint 4-5**: 트래킹 시스템 ⭐ (가장 중요)
4. **Sprint 6**: 음성 내비게이션
5. **Sprint 7**: LiveClimb (구간별 사진)
6. **Sprint 8**: 기록 아카이빙
7. **Sprint 9**: 온보딩
8. **Sprint 10-11**: 추천, 폴리싱

---

## 🚫 해서는 안 되는 것

- ❌ 디자인 토큰 밖의 색상/간격/크기 하드코딩
- ❌ Pretendard 외 다른 폰트 사용
- ❌ Phosphor Fill weight 외 다른 아이콘 라이브러리·weight 사용 (이모지로 아이콘 대체 포함)
- ❌ 패턴 라이브러리에 없는 새 레이아웃을 즉흥으로 만들기 (있는 것부터 재사용)
- ❌ 브리프에 없는 기능 임의 추가
- ❌ 브리프에 명시된 기능을 축소/생략 (확인 없이)
- ❌ Weight 400/300/800 등 허용 외 값 사용

---

## 📝 현재 진행 상태 (2026-04-22)

- [x] 요구사항 · 브리프 정리 (`docs/CLAUDE_CODE_BRIEF.md`)
- [x] 레이아웃 패턴 라이브러리 (`docs/LAYOUT_PATTERNS.md`)
- [x] Lo-fi 와이어프레임 16개 화면 (`wireframes/`)
- [x] Git 저장소 초기화
- [ ] 레퍼런스 이미지 (`references/`) — 추가 대기
- [ ] DESIGN_SYSTEM.md 별도 파일 — 아직 공유 안됨 (핵심 값은 위 Quick Reference 참조)
- [ ] Expo 프로젝트 초기화 (Sprint 1)
- [ ] 디자인 토큰 파일 생성 (`src/shared/constants/`)
- [ ] 공용 컴포넌트 구현

---

**이 가이드를 따르지 않는 코드는 재작업 대상입니다. 작업 전 문서 확인은 비용이 아니라 필수 절차입니다.**
