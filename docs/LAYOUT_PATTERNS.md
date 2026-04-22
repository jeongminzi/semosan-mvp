# SEMOSAN Layout Pattern Library

> **제약 기반 레이아웃 시스템 - 검증된 패턴만 사용하여 실수 방지**  
> Version 1.0 | 2026-04-22

---

## 📐 핵심 원칙

### 1. 제약 기반 설계
- **선택지를 줄여서 실수 방지**
- **검증된 값만 사용** (간격, 색상, 크기)
- **패턴 라이브러리에서 선택**하여 일관성 확보

### 2. 레퍼런스 학습
- 네이버 지도, 당근마켓 등 **고품질 앱 분석**
- 공통 패턴 추출 및 재사용
- AI가 "베껴야 할 좋은 예시" 제공

### 3. 일관성 우선
- 모든 화면이 같은 패턴 언어 사용
- 사용자가 학습 비용 없이 사용 가능
- 개발자가 빠르게 구현 가능

---

## 🎨 레이아웃 패턴 카탈로그

### Pattern 1: Full Screen Modal (전체 화면 모달)

**사용 케이스:** 리뷰 작성, 장소 검색, 설정

#### 구조
```
┌─────────────────────────┐
│ [X]              닫기   │ ← Header (56px)
├─────────────────────────┤
│                         │
│   큰 제목               │ ← Title Section (80-120px)
│   부제목 (선택)         │
│                         │
├─────────────────────────┤
│                         │
│   [카드 영역 1]         │ ← Content Cards
│                         │
│   [카드 영역 2]         │
│                         │
│   [카드 영역 3]         │
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const FullScreenModal = {
  // Header
  headerHeight: 56,
  headerPadding: Spacing[4], // 16px
  closeButtonSize: 32,
  closeButtonPosition: 'top-right',
  
  // Title Section
  titleSectionPadding: {
    top: Spacing[6], // 24px
    horizontal: Spacing[4], // 16px
    bottom: Spacing[8], // 32px
  },
  titleFontSize: FontSize['3xl'], // 28px
  titleFontWeight: FontWeight.bold, // 700
  titleLineHeight: LineHeight.tight, // 1.25
  
  // Content
  contentPadding: Spacing[4], // 16px
  cardGap: Spacing[4], // 16px 간격
  
  // Background
  backgroundColor: Gray[50], // #F8FAFB
};
```

#### 레퍼런스
- 당근마켓 리뷰 작성
- 네이버 장소 상세

---

### Pattern 2: Bottom Sheet Modal (하단 시트)

**사용 케이스:** 간단한 선택, 정보 표시, 액션 선택

#### 구조
```
                          
     [배경 딤 처리]        
                          
┌─────────────────────────┐
│      ━━ Handle          │ ← Handle Bar (40px)
├─────────────────────────┤
│                         │
│   제목                  │ ← Header (Optional)
│                         │
├─────────────────────────┤
│                         │
│   콘텐츠 영역           │ ← Content
│                         │
│   • 리스트              │
│   • 정보 카드           │
│   • 액션 버튼           │
│                         │
│                         │
│   [주요 액션 버튼]      │ ← CTA (고정 하단)
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const BottomSheet = {
  // Handle
  handleHeight: 40,
  handleBarWidth: 40,
  handleBarHeight: 4,
  handleBarColor: Gray[300], // #CBD3DB
  handleBarRadius: BorderRadius.full,
  
  // Container
  borderRadius: {
    topLeft: BorderRadius.xl, // 20px
    topRight: BorderRadius.xl, // 20px
    bottomLeft: 0,
    bottomRight: 0,
  },
  backgroundColor: Gray[0], // #FFFFFF
  
  // Padding
  contentPadding: {
    top: Spacing[4], // 16px
    horizontal: Spacing[4], // 16px
    bottom: Spacing[6] + 34, // 24px + SafeArea
  },
  
  // Shadow
  shadow: Shadow.xl,
  
  // Overlay
  overlayColor: 'rgba(17, 24, 39, 0.7)', // Gray[900] 70%
};
```

#### 레퍼런스
- 네이버 지도 경로 상세
- 카카오맵 장소 정보

---

### Pattern 3: Search Bar with Filters (검색 + 필터)

**사용 케이스:** 산 검색, 장소 찾기, 콘텐츠 필터링

#### 구조
```
┌─────────────────────────┐
│ [←] [검색어 입력...]  🎤│ ← Search Bar (48px)
├─────────────────────────┤
│                         │
│ [📍내위치] [🗺️지도선택] │ ← Quick Actions
│                         │
├─────────────────────────┤
│ 🏠집 📖회사 📍경기...  [▷]│ ← Filter Chips (Horizontal Scroll)
├─────────────────────────┤
│                         │
│   [검색 결과 항목 1]    │ ← Results List
│   [검색 결과 항목 2]    │
│   [검색 결과 항목 3]    │
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const SearchWithFilters = {
  // Search Bar
  searchBarHeight: 48,
  searchBarPadding: Spacing[3], // 12px
  searchBarRadius: BorderRadius.base, // 8px
  searchBarBackground: Gray[100], // #F1F4F6
  
  // Search Input
  inputPadding: {
    left: Spacing[4], // 16px (아이콘 공간)
    right: Spacing[4], // 16px
  },
  inputFontSize: FontSize.base, // 16px
  placeholderColor: Gray[400], // #9EA8B3
  
  // Quick Actions
  quickActionGap: Spacing[2], // 8px
  quickActionPadding: Spacing[4], // 16px (상하좌우)
  
  // Filter Chips
  chipHeight: 36,
  chipPadding: {
    vertical: Spacing[2], // 8px
    horizontal: Spacing[3], // 12px
  },
  chipGap: Spacing[2], // 8px
  chipRadius: BorderRadius.full,
  chipBackground: {
    default: Gray[100],
    selected: Primary[500],
  },
  chipTextColor: {
    default: Gray[900],
    selected: Gray[0],
  },
  
  // Container
  containerPadding: Spacing[4], // 16px
  sectionGap: Spacing[3], // 12px
};
```

#### 인터랙션
- **포커스 시:** 검색바 border 강조 (Primary[500])
- **입력 중:** 자동완성 드롭다운 표시
- **칩 선택:** 배경색 변경 + 결과 필터링
- **음성 버튼:** 음성 검색 활성화

#### 레퍼런스
- 네이버 지도 검색
- 당근마켓 검색

---

### Pattern 4: Icon Grid Cards (아이콘 그리드)

**사용 케이스:** 카테고리 선택, 기능 모음, 퀵 액션

#### 구조
```
┌─────────────────────────┐
│                         │
│  [🎯] [💳] [📸] [🔍]   │ ← 4-Column Grid
│  텍스트1 텍스트2 텍스트3 텍스트4│
│                         │
│  [📊] [⚙️] [📝] [❤️]   │
│  텍스트5 텍스트6 텍스트7 텍스트8│
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const IconGrid = {
  // Grid
  columns: 4, // 고정 4열
  gap: Spacing[4], // 16px
  padding: Spacing[4], // 16px
  
  // Card (각 아이템)
  cardWidth: 'auto', // flex 1
  cardHeight: 88, // 고정 높이
  cardPadding: Spacing[3], // 12px
  cardRadius: BorderRadius.lg, // 16px
  cardBackground: Gray[0], // #FFFFFF
  
  // Icon
  iconSize: IconSize.lg, // 32px
  iconMarginBottom: Spacing[2], // 8px
  
  // Label
  labelFontSize: FontSize.sm, // 14px
  labelFontWeight: FontWeight.medium, // 500
  labelColor: Gray[900],
  labelAlign: 'center',
  
  // Badge (선택적 - "인증" 등)
  badgePosition: 'top-right',
  badgeSize: 16,
  badgeBackground: Primary[500],
  badgeColor: Gray[0],
};
```

#### 레퍼런스
- 당근마켓 리뷰 타입 선택
- 토스 홈 화면

---

### Pattern 5: Star Rating Card (별점 평가)

**사용 케이스:** 리뷰 작성, 만족도 평가

#### 구조
```
┌─────────────────────────┐
│                         │
│  리뷰를 작성해주세요 필수│ ← Title + Badge
│                         │
│  ⭐ ⭐ ⭐ ⭐ ⭐         │ ← Star Rating (Interactive)
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const StarRating = {
  // Container
  cardPadding: Spacing[6], // 24px
  cardRadius: BorderRadius.lg, // 16px
  cardBackground: Gray[0], // #FFFFFF
  
  // Title
  titleFontSize: FontSize.lg, // 18px
  titleFontWeight: FontWeight.semibold, // 600
  titleColor: Gray[900],
  titleMarginBottom: Spacing[4], // 16px
  
  // Badge (필수)
  badgeMarginLeft: Spacing[2], // 8px
  badgePadding: {
    vertical: Spacing[1], // 4px
    horizontal: Spacing[2], // 8px
  },
  badgeRadius: BorderRadius.sm, // 4px
  badgeBackground: Gray[900],
  badgeColor: Gray[0],
  badgeFontSize: FontSize.xs, // 12px
  
  // Stars
  starSize: 48, // 큼직하게 (터치 편의)
  starGap: Spacing[2], // 8px
  starColorEmpty: Gray[200], // #E4E9ED
  starColorFilled: Warning.main, // #F59E0B
  
  // Layout
  alignment: 'center',
};
```

#### 인터랙션
- **탭:** 해당 별점까지 채워짐
- **드래그:** 슬라이드로 별점 조정
- **애니메이션:** 선택 시 scale(1.2) → scale(1)

#### 레퍼런스
- 당근마켓 별점 평가
- 배달의민족 리뷰

---

### Pattern 6: Suggestion Card (제안 카드)

**사용 케이스:** 안내 메시지, 추천, 유도 액션

#### 구조
```
┌─────────────────────────┐
│                         │
│  이것이 마음에 든다면,   │ ← Primary Text
│  '좋아요' 누르고         │ ← Secondary Text
│  비슷한 장소를 추천받으세요│ ← Tertiary Text
│                         │
│  [♡ 이번 곳 좋아요!]    │ ← Ghost Button (Optional)
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const SuggestionCard = {
  // Container
  padding: Spacing[6], // 24px
  radius: BorderRadius.lg, // 16px
  background: Gray[50], // #F8FAFB (연한 배경)
  border: 'none',
  
  // Text Hierarchy
  primaryText: {
    fontSize: FontSize.lg, // 18px
    fontWeight: FontWeight.semibold, // 600
    color: Gray[900],
    lineHeight: LineHeight.snug, // 1.375
  },
  secondaryText: {
    fontSize: FontSize.base, // 16px
    fontWeight: FontWeight.medium, // 500
    color: Gray[700],
    lineHeight: LineHeight.normal, // 1.5
  },
  tertiaryText: {
    fontSize: FontSize.sm, // 14px
    fontWeight: FontWeight.medium, // 500
    color: Gray[600],
    lineHeight: LineHeight.normal, // 1.5
  },
  
  // Button (Optional)
  buttonMarginTop: Spacing[4], // 16px
  buttonPadding: {
    vertical: Spacing[3], // 12px
    horizontal: Spacing[4], // 16px
  },
  buttonRadius: BorderRadius.base, // 8px
  buttonBackground: Gray[0],
  buttonBorder: `1px solid ${Gray[200]}`,
  
  // Layout
  textAlign: 'center',
  textGap: Spacing[1], // 4px (줄간격)
};
```

#### 레퍼런스
- 당근마켓 추천 메시지
- 네이버 안내 카드

---

### Pattern 7: Action Sheet Item (액션 시트 아이템)

**사용 케이스:** 선택 리스트, 메뉴, 옵션

#### 구조
```
┌─────────────────────────┐
│ 📍 출발                  │ ← 단일 항목
│                         │
│ 🔴 도착                  │
│                         │
│ ━━━━━━━━━━━━━━━━━━━━━ │ ← Divider
│                         │
│ 🚌 미리보기              │
│                         │
│ 🚶 안내시작         [✓] │ ← 선택됨 표시
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const ActionSheetItem = {
  // Item
  height: 56, // 넉넉한 터치 영역
  padding: {
    vertical: Spacing[4], // 16px
    horizontal: Spacing[4], // 16px
  },
  
  // Icon (Optional)
  iconSize: IconSize.md, // 24px
  iconMarginRight: Spacing[3], // 12px
  iconColor: Gray[700],
  
  // Text
  textFontSize: FontSize.base, // 16px
  textFontWeight: FontWeight.medium, // 500
  textColor: Gray[900],
  
  // Checkmark (선택 표시)
  checkmarkSize: IconSize.md, // 24px
  checkmarkColor: Primary[500],
  checkmarkPosition: 'right',
  
  // Divider
  dividerHeight: 1,
  dividerColor: Gray[200], // #E4E9ED
  dividerMargin: 0,
  
  // States
  hover: {
    backgroundColor: Gray[50],
  },
  pressed: {
    backgroundColor: Gray[100],
  },
  selected: {
    backgroundColor: Primary[50],
    textColor: Primary[700],
  },
};
```

#### 레퍼런스
- 네이버 지도 경로 옵션
- iOS 액션 시트

---

### Pattern 8: Transportation Route Card (경로 카드)

**사용 케이스:** 대중교통 경로, 이동 시간 표시

#### 구조
```
┌─────────────────────────┐
│ 최적                 📌 │ ← Badge + Pin
│                         │
│ 16분                    │ ← 큰 시간 표시
│ 오전 10:19 - 오전 10:35 │ ← 시간 범위
│ 1,450원                 │ ← 요금
│                         │
│ ━━━━━━━━━━━━━━━━━━━━━ │ ← Visual Timeline
│ 🚶7분 🚌5분 🚶3분      │
│       누리1            │ ← 노선 정보
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const RouteCard = {
  // Container
  padding: Spacing[4], // 16px
  radius: BorderRadius.lg, // 16px
  background: Gray[0],
  border: `1px solid ${Gray[200]}`,
  
  // Badge (최적)
  badgePosition: 'top-left',
  badgePadding: {
    vertical: Spacing[1], // 4px
    horizontal: Spacing[2], // 8px
  },
  badgeRadius: BorderRadius.sm, // 4px
  badgeBackground: Primary[500],
  badgeColor: Gray[0],
  badgeFontSize: FontSize.xs, // 12px
  badgeFontWeight: FontWeight.semibold, // 600
  
  // Time (큰 텍스트)
  timeFontSize: FontSize['4xl'], // 32px
  timeFontWeight: FontWeight.bold, // 700
  timeColor: Gray[900],
  timeMarginBottom: Spacing[1], // 4px
  
  // Time Range
  timeRangeFontSize: FontSize.sm, // 14px
  timeRangeColor: Gray[600],
  timeRangeMarginBottom: Spacing[1], // 4px
  
  // Price
  priceFontSize: FontSize.base, // 16px
  priceFontWeight: FontWeight.semibold, // 600
  priceColor: Gray[900],
  
  // Timeline Bar
  timelineHeight: 8,
  timelineMarginTop: Spacing[3], // 12px
  timelineMarginBottom: Spacing[2], // 8px
  timelineRadius: BorderRadius.full,
  timelineBackground: Gray[200],
  timelineSegments: [
    { color: Gray[400], percentage: 45 }, // 걷기
    { color: Primary[500], percentage: 30 }, // 버스
    { color: Gray[400], percentage: 25 }, // 걷기
  ],
  
  // Route Details
  routeFontSize: FontSize.sm, // 14px
  routeColor: Gray[700],
  routeGap: Spacing[2], // 8px
};
```

#### 인터랙션
- **카드 탭:** 상세 경로 확장
- **핀 버튼:** 즐겨찾기 추가/제거
- **타임라인:** 시각적 비율 표시

#### 레퍼런스
- 네이버 지도 대중교통
- 카카오맵 길찾기

---

### Pattern 9: List Item with Thumbnail (썸네일 리스트)

**사용 케이스:** 장소 목록, 콘텐츠 리스트, 검색 결과

#### 구조
```
┌─────────────────────────┐
│ 🏪                       │
│ [썸네일] LIVE Atelier   │ ← 썸네일 + 제목
│  56x56   1.4.토         │    부제
│                         │
│          내 리뷰    ⭐  │ ← 액션 + 아이콘
│                         │
├─────────────────────────┤
│ 🍴                       │
│ [썸네일] 카이카츠       │
│  56x56   10.29.화       │
│                         │
│          내 리뷰    ⭐  │
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const ListItemThumbnail = {
  // Container
  height: 72, // 고정 높이 (썸네일 56 + 패딩)
  padding: Spacing[4], // 16px
  borderBottom: `1px solid ${Gray[200]}`,
  
  // Thumbnail
  thumbnailSize: 56, // 56x56px (고정)
  thumbnailRadius: BorderRadius.base, // 8px
  thumbnailMarginRight: Spacing[3], // 12px
  thumbnailBackground: Gray[100],
  
  // Icon (썸네일 대체)
  iconSize: IconSize.xl, // 40px
  iconPadding: Spacing[2], // 8px
  iconBackground: Gray[100],
  iconColor: Gray[600],
  
  // Text
  titleFontSize: FontSize.base, // 16px
  titleFontWeight: FontWeight.semibold, // 600
  titleColor: Gray[900],
  titleMaxLines: 1, // 말줄임
  
  subtitleFontSize: FontSize.sm, // 14px
  subtitleFontWeight: FontWeight.medium, // 500
  subtitleColor: Gray[600],
  subtitleMarginTop: Spacing[1], // 4px
  
  // Right Action
  actionText: {
    fontSize: FontSize.sm, // 14px
    fontWeight: FontWeight.medium, // 500
    color: Gray[600],
  },
  actionIcon: {
    size: IconSize.sm, // 16px
    color: Gray[500],
    marginLeft: Spacing[1], // 4px
  },
  
  // Layout
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
```

#### 레퍼런스
- 네이버 마이페이지
- 당근마켓 리스트

---

### Pattern 10: Profile Header (프로필 헤더)

**사용 케이스:** 마이페이지, 사용자 정보 표시

#### 구조
```
┌─────────────────────────┐
│                         │
│  [아바타]  유아이볼      │ ← 아바타 + 닉네임
│   64x64   리뷰 14 >     │    부가 정보
│                         │
└─────────────────────────┘
```

#### 제약 조건
```typescript
const ProfileHeader = {
  // Container
  padding: Spacing[4], // 16px
  background: Gray[0],
  
  // Avatar
  avatarSize: 64, // 64x64px
  avatarRadius: BorderRadius.full, // 완전 원형
  avatarBorder: `2px solid ${Gray[200]}`,
  avatarMarginRight: Spacing[3], // 12px
  
  // Badge (편집 아이콘 등)
  badgeSize: 24,
  badgePosition: 'bottom-right', // 아바타 우하단
  badgeBackground: Gray[900],
  badgeColor: Gray[0],
  badgeIconSize: IconSize.xs, // 12px
  
  // Name
  nameFontSize: FontSize.xl, // 20px
  nameFontWeight: FontWeight.bold, // 700
  nameColor: Gray[900],
  
  // Subtitle (리뷰 개수 등)
  subtitleFontSize: FontSize.sm, // 14px
  subtitleFontWeight: FontWeight.medium, // 500
  subtitleColor: Gray[600],
  subtitleMarginTop: Spacing[1], // 4px
  
  // Chevron
  chevronSize: IconSize.sm, // 16px
  chevronColor: Gray[500],
  chevronMarginLeft: Spacing[1], // 4px
  
  // Layout
  flexDirection: 'row',
  alignItems: 'center',
};
```

#### 레퍼런스
- 네이버 MY
- 당근마켓 프로필

---

## 🎯 컴포넌트 조합 규칙

### Rule 1: 카드 내부 간격

```typescript
const CardInternalSpacing = {
  // 제목 → 내용
  titleToContent: Spacing[4], // 16px
  
  // 내용 → 내용 (관련)
  relatedContent: Spacing[3], // 12px
  
  // 내용 → 액션 버튼
  contentToAction: Spacing[6], // 24px
  
  // 액션 버튼 간
  actionButtonGap: Spacing[2], // 8px
};
```

### Rule 2: 카드 외부 간격

```typescript
const CardExternalSpacing = {
  // 카드 ↔ 카드 (같은 섹션)
  cardToCard: Spacing[3], // 12px
  
  // 섹션 ↔ 섹션
  sectionToSection: Spacing[6], // 24px
  
  // 화면 상단 여백
  screenTopMargin: Spacing[4], // 16px
  
  // 화면 하단 여백
  screenBottomMargin: Spacing[6] + 34, // 24px + SafeArea
};
```

### Rule 3: 리스트 아이템

```typescript
const ListItemSpacing = {
  // 아이템 높이
  compact: 48,
  default: 56,
  large: 72,
  
  // 아이템 간 구분선
  dividerColor: Gray[200],
  dividerThickness: 1,
  dividerInset: Spacing[4], // 16px (왼쪽 여백)
  
  // 아이템 내부 패딩
  horizontalPadding: Spacing[4], // 16px
  verticalPadding: Spacing[3], // 12px
};
```

---

## 📐 반응형 규칙

### 모바일 (기본)
```typescript
const MobileLayout = {
  screenPadding: Spacing[4], // 16px
  maxWidth: '100%',
  columnCount: 1,
  
  // Grid (Icon Grid 등)
  gridColumns: 4,
  gridGap: Spacing[4], // 16px
};
```

### 태블릿 (768px+)
```typescript
const TabletLayout = {
  screenPadding: Spacing[6], // 24px
  maxWidth: 720,
  columnCount: 2,
  
  // Grid
  gridColumns: 6,
  gridGap: Spacing[6], // 24px
};
```

---

## ✅ 디자인 체크리스트

### 새 화면 만들 때
- [ ] 패턴 라이브러리에서 유사한 패턴 찾기
- [ ] 제약 조건 준수 (간격, 크기, 색상)
- [ ] 터치 영역 최소 44x44px
- [ ] 배경/전경 대비 비율 4.5:1 이상
- [ ] Safe Area 고려 (하단 34px)

### 코드 작성할 때
- [ ] Spacing 시스템 사용 (하드코딩 금지)
- [ ] FontSize/FontWeight 정의된 값만 사용
- [ ] BorderRadius 일관성
- [ ] Shadow 적절히 적용
- [ ] Primary 색상 남용하지 않기

---

## 🔄 패턴 확장 가이드

### 새 패턴 추가 시
1. **레퍼런스 수집**: 2-3개 앱에서 유사 패턴 찾기
2. **공통점 추출**: 간격, 크기, 구조 분석
3. **제약 조건 정의**: TypeScript 타입으로 명시
4. **Figma 컴포넌트 생성**: 디자이너와 협업
5. **코드 구현**: React Native 컴포넌트
6. **문서화**: 이 파일에 추가

---

## 📸 레퍼런스 이미지

> 모든 레퍼런스 이미지는 `/references` 폴더에 저장되어 있습니다.

### 이미지 목록

#### 1. Review Modal (리뷰 작성 모달)
**파일**: `ref-01-review-modal.png`  
**패턴**: Full Screen Modal, Icon Grid Cards  
**분석 포인트:**
- 큰 제목 + 부제목 구조
- 4열 아이콘 그리드
- "인증" 뱃지 배치
- 클립 만들기 프로모션 카드
- 최근 방문 내역 리스트

---

#### 2. Rating Card (별점 평가 카드)
**파일**: `ref-02-rating-card.png`  
**패턴**: Star Rating Card, Suggestion Card  
**분석 포인트:**
- 결제 정보 요약 카드
- 별점 평가 섹션 (필수 뱃지)
- 5개 큰 별 (터치 친화적)
- "좋아요" 제안 카드
- 사진/영상 추가 섹션

---

#### 3. Search Empty State (검색 빈 화면)
**파일**: `ref-03-search-empty.png`  
**패턴**: Search Bar with Filters  
**분석 포인트:**
- 뒤로가기 + 검색 입력창 + 음성 버튼
- 내위치 / 지도에서 선택 탭
- 필터 칩 (집, 회사, 경기 등)
- 빈 상태 메시지
- 한글 키보드 노출 상태

---

#### 4. Search Results (검색 결과)
**파일**: `ref-04-search-results.png`  
**패턴**: Search Bar with Filters, Action Sheet Item  
**분석 포인트:**
- 자동완성 제안 (경기광주역, 경기도광주역, 경기대학교)
- 하이라이트된 검색어
- 아이콘 (플래그, 핀)
- 거리 정보 (26km, 28km)
- 지하철/전철 라벨

---

#### 5. Route List (경로 리스트)
**파일**: `ref-05-route-list.png`  
**패턴**: Transportation Route Card  
**분석 포인트:**
- 출발/도착 입력 필드 (교환 버튼)
- 교통수단 탭 (버스, 자동차, 도보, 자전거)
- "최적" 뱃ج
- 큰 시간 표시 (16분)
- 시간 범위 + 요금
- 타임라인 바 (걷기+버스+걷기)
- 버스 노선 정보

---

#### 6. Route Map (경로 지도)
**파일**: `ref-06-route-map.png`  
**패턴**: Transportation Route Card (지도 뷰)  
**분석 포인트:**
- 상단 경로 요약 칩들 (최적 16분, 103번 18분, 107번 20분)
- 지도 위 경로 라인
- 출발점 (녹색 핀)
- 버스 정류장 (버스 아이콘)
- 도착점 (빨간 핀)
- 하단 경로 카드
- "안내를 시작하고 승하차 알림도 받아보세요" 툴팁

---

#### 7. Route Detail (경로 상세)
**파일**: `ref-07-route-detail.png`  
**패턴**: Bottom Sheet Modal, Action Sheet Item  
**분석 포인트:**
- 하단 시트 (Handle Bar)
- "3개 정류장 이동 5분" 섹션
- 하차 정류장 정보
- 도보 거리/시간
- 도착지 주소
- 전화하기 버튼
- 도로 위치 지도 임베드
- "정보 수정 제안" 링크
- "미리보기 / 안내시작" 버튼

---

#### 8. Profile Home (프로필 홈)
**파일**: `ref-08-profile-home.png`  
**패턴**: Profile Header, Icon Grid Cards, List Item with Thumbnail  
**분석 포인트:**
- 프로필 헤더 (아바타 + 닉네임 + 리뷰 개수)
- 4열 아이콘 그리드 (예약, 주문, 내 리뷰, 쿠폰)
- 퀵 액션 탭 (집/회사, 자주가는 곳, 버스, 지하철)
- 광고 배너
- "내 타임라인" 섹션
- 임베드된 지도
- 장소 리스트 (썸네일 + 제목 + 날짜)
- FAB (플로팅 액션 버튼) "리뷰 쓰기"
- 하단 탭바

---

## 📚 참고 자료

### 분석한 레퍼런스
- **네이버 지도** (검색, 경로, 장소)
- **당근마켓** (리뷰, 리스트, 프로필)
- **카카오맵** (경로, 교통)
- **토스** (홈, 카테고리)

### 디자인 원칙 출처
- [Apple HIG - Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Material Design - Layout](https://m3.material.io/foundations/layout/understanding-layout/overview)

### 레퍼런스 이미지 위치
```
semosan-mvp/
└── references/
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

**문서 버전**: 1.1  
**마지막 업데이트**: 2026-04-22

이 패턴 라이브러리를 활용하여 일관되고 사용자 친화적인 SEMOSAN을 만들어주세요! 🏔️✨
