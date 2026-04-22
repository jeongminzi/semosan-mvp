# SEMOSAN (세모산) - 프로젝트 통합 문서

> **이 문서는 Claude Code 터미널에서 개발을 시작하기 위한 모든 정보를 담고 있습니다.**
> 
> **작성일**: 2026-04-22  
> **최종 업데이트**: 요구사항 정의서 기준 2026-04-19

---

## 📌 프로젝트 개요

### 프로젝트명
**SEMOSAN (세모산)** - 실시간 밀착 등산 도우미

### 핵심 컨셉
등산의 시작부터 끝까지 유저의 안전과 완등을 책임지는 **'스마트 페이스메이커'**

### 타겟 유저
- 등산 초보자 (등린이)
- 안전한 등산을 원하는 일반 등산객
- 기록을 남기고 싶은 등산 애호가

### 핵심 가치 제안
1. **안전**: 일몰 연동 하산 경고로 산에서 어둠을 맞이하지 않도록
2. **동기부여**: AI 페이스 코칭으로 완등까지 지속적인 응원
3. **기록**: LiveClimb로 등산 과정을 생생하게 아카이빙

---

## 🎯 MVP 기능 명세 (우선순위별)

### 1순위 - Core MVP
**반드시 구현해야 하는 핵심 기능**

#### 1. 실시간 GPS 트래킹 시스템
- **이정표 기반 현 위치 시각화**
  - 사용자가 눈앞의 이정표 남은 거리를 입력
  - 앱이 지도상에 현재 위치를 시각적으로 매핑
  
- **스마트 소요 시간 예측**
  - 실시간 등산 속도와 고도 파악
  - 최종 목적지까지 잔여 시간을 동적으로 계산 및 업데이트
  
- **일몰 연동 하산 안전 알림** ⚠️ 매우 중요
  - 당일 일몰 시간 + 현재 위치 + 하산 예상 속도 계산
  - 하산 시작 '골든 타임' 경고 알림
  - 안전 완등 가능 목표 시간 제시
  
- **스마트 음성 내비게이션**
  - 우천/안개/야간 시 화면 보지 않고도 정보 획득
  - 남은 거리, 예상 소요 시간, 현재 페이스 음성 안내

#### 2. AI 페이스 코칭 및 휴식 타이머
- 목표 시간 대비 페이스 쳐지면 동기부여 알림
- 적절한 휴식 시간 제안
- 자동 타이머로 오버페이스 방지

#### 3. LiveClimb (구간별 사진 아카이빙)
- 100m, 200m 등 특정 구간 돌파 시 실시간 팝업
- 그 순간의 풍경과 표정 기록 유도
- 고도별로 아래→위(정상) 방향으로 갤러리 아카이빙

#### 4. 날씨/환경 정보
- 산별/날짜별 날씨
- 미세먼지
- 러브버그(해충) 정보

---

### 2순위 - 리텐션 기능
**사용자 재방문을 유도하는 기능**

#### 1. 맞춤 산 큐레이션
- AI 기반 유저 체력 수준 분석
- 기존 등반 이력 기반 추천
  - 비슷한 난이도 산
  - 한 단계 높은 도전적인 산
- 필터링 검색 (짧은 코스, 가까운 거리 등)

#### 2. 정복 여정 아카이빙
- 등산 종료 후 그래픽 리포트 자동 생성
  - 총 소요 시간
  - 고도 변화 그래프
  - 페이스 분석
  - 이동 경로 맵
- 산별 등산 기록 컬렉션
  - 완등한 산: 트로피/깃발 표시
  - 중도 포기: 정복 비율 시각화

---

### 3순위 - 소셜/부가 기능
**커뮤니티 형성 기능**

#### 1. 함산러를 위한 소셜 공유
- 지인 초대 '공동 등반 방' 개설
- 함께 페이스와 기록 공유

#### 2. 등산 로컬 맛집 추천
- **등산 전 (포장용)**: 김밥, 샌드위치, 커피
- **등산 후 (충전용)**: 막걸리, 전, 백숙

#### 3. 등린이 필수 장비 큐레이션
- 상황별 준비물 체크리스트
- 유저 후기 기반 꿀템 커뮤니티

---

## 🏗️ 화면 구조 (Screen Flow)

### 공통 요소
- **하단 고정 내비게이션** (4개 탭)
  1. 홈
  2. 산목록
  3. 트래킹
  4. 커뮤니티

---

### 1. 홈 화면 (Home)

#### 1-1. 지도형 홈 (기본)
**화면 구성:**
```
┌─────────────────────────┐
│ [프로필] 닉네임 | 칭호   │
├─────────────────────────┤
│                         │
│   🗺️ 전국 지도           │
│                         │
│   📍 등산한 산 (핀)      │
│   📍 추천 산 (핀)        │
│   📍 큐레이션 산 (핀)    │
│                         │
│   [지도/리스트 토글]     │
│                         │
└─────────────────────────┘
│ 홈 | 산목록 | 트래킹 | 커뮤 │
└─────────────────────────┘
```

**기능:**
- 지도 확대/축소
- 산 핀 클릭 → 하단 모달 표시
- 지도형 ↔ 리스트형 전환 토글

#### 1-2. 리스트형 홈
**화면 구성:**
```
┌─────────────────────────┐
│ [정렬] 최신순 ▼          │
├─────────────────────────┤
│ 📸 [썸네일]              │
│ 북한산 백운대 코스        │
│ 2026-04-15 | 3.2km | 2h  │
│          [후기작성 →]    │
├─────────────────────────┤
│ 📸 [썸네일]              │
│ 관악산 연주대 코스        │
│ ...                     │
└─────────────────────────┘
```

**정렬 옵션:**
- 최신순
- 오래된순
- 거리 긴 순
- 가나다순

#### 1-3. 산 정보 모달 (핀 클릭 시)
```
┌─────────────────────────┐
│ 🏔️ 북한산                │
│ 📸 [대표 이미지]          │
│                         │
│ 누적 등산 횟수: 3회       │
│ 누적 시간: 6시간 30분     │
│ 누적 거리: 12.5km        │
│                         │
│ [등반 기록 더보기 →]     │
└─────────────────────────┘
```

#### 1-4. 개별 등반 기록 페이지
```
┌─────────────────────────┐
│ ← 북한산 백운대 코스      │
├─────────────────────────┤
│ 📅 2026-04-15           │
│ ⏱️ 소요시간: 2h 15m      │
│ 📏 거리: 3.2km           │
│ 📈 고도: 520m            │
│ 🔥 칼로리: 450kcal       │
│                         │
│ 📍 경로 이미지            │
│ [지도 상세보기]          │
│                         │
│ ─────────────────       │
│                         │
│ 📸 LiveClimb 갤러리      │
│ ┌───┐ ┌───┐ ┌───┐      │
│ │정상│ │500│ │100│      │ (아래→위 순서)
│ └───┘ └───┘ └───┘      │
│                         │
│ [💾 이미지로 저장]       │
│                         │
│ [✍️ 후기 작성하기]       │
└─────────────────────────┘
```

#### 1-5. 후기 작성 에디터
```
┌─────────────────────────┐
│ ← 후기 작성              │
├─────────────────────────┤
│ 접근성: ⭐⭐⭐⭐⭐       │
│ 주변시설: ⭐⭐⭐☆☆      │
│ 경치: ⭐⭐⭐⭐⭐         │
│                         │
│ 📷 [사진 첨부] (최대 4장)│
│                         │
│ ✍️ [자유 텍스트 입력]    │
│                         │
│      [업로드]            │
└─────────────────────────┘
```

---

### 2. 산목록 화면 (Mountain List)

#### 2-1. 산 검색 및 목록
```
┌─────────────────────────┐
│ 🔍 산 이름 검색...       │
│ [필터] 난이도 | 지역      │
├─────────────────────────┤
│ 🏔️ 북한산                │
│ 서울 강북구 | 836m       │
│ ☀️ 맑음 | 😷 보통         │
├─────────────────────────┤
│ 🏔️ 관악산                │
│ 서울 관악구 | 632m       │
│ ...                     │
└─────────────────────────┘
```

**환경 정보 표시:**
- ☀️ 날씨
- 😷 미세먼지
- 🐛 러브버그(해충)

#### 2-2. 산 상세 페이지
```
┌─────────────────────────┐
│ ← 북한산                 │
├─────────────────────────┤
│ 📸 [대표 이미지]          │
│                         │
│ 🏔️ 높이: 836m            │
│ 📍 서울특별시 강북구      │
│                         │
│ 📝 설명:                 │
│ 북한산은 서울에서...      │
│                         │
│ ⚠️ 탐방로 통제 정보       │
│ • 대남문 코스 통제중      │
│                         │
│ ─────────────────       │
│                         │
│ 📋 코스 목록 (3개)        │
│                         │
│ [초급] 우이암 코스        │
│ 거리: 2.1km | 1h 30m    │
│                         │
│ [중급] 백운대 코스        │
│ 거리: 3.2km | 2h 15m    │
│                         │
│ [고급] 종주 코스          │
│ 거리: 8.5km | 5h        │
└─────────────────────────┘
```

#### 2-3. 코스 상세 페이지
```
┌─────────────────────────┐
│ ← 백운대 코스            │
├─────────────────────────┤
│ 📸 [코스 지도]            │
│                         │
│ 난이도: ⭐⭐⭐ (중급)      │
│ 거리: 3.2km             │
│ 예상 소요: 2h 15m       │
│ 고도차: 520m            │
│ 오르막: 75% | 내리막: 25%│
│                         │
│ 📍 출발: 우이동 주차장    │
│ 📍 도착: 백운대 정상      │
│                         │
│ ─────────────────       │
│                         │
│ 🚌 교통편                │
│ • 지하철 4호선 우이신설선 │
│                         │
│ 🏪 편의시설              │
│ • 화장실: 출발점, 중간    │
│ • 매점: 중간 휴게소       │
│                         │
│ 🎒 추천 장비             │
│ • 등산화, 등산 스틱       │
│                         │
│ 👥 다른 사람들의 기록     │
│ 평균 소요: 2h 10m       │
│                         │
│    [🎬 기록하기 시작]     │
└─────────────────────────┘
```

---

### 3. 트래킹 화면 (Tracking) ⭐ 가장 중요

#### 3-1. 트래킹 시작 전 (코스 미리보기)
```
┌─────────────────────────┐
│ ← 백운대 코스            │
├─────────────────────────┤
│                         │
│   🗺️ [코스 지도 미리보기] │
│                         │
│   📏 거리: 3.2km         │
│   ⏱️ 예상: 2h 15m        │
│   📈 고도차: 520m        │
│                         │
│   ☀️ 오늘 날씨: 맑음 22°C│
│   🌅 일몰: 19:35        │
│                         │
│                         │
│     [▶️ 등산 시작]       │
│                         │
└─────────────────────────┘
```

#### 3-2. 트래킹 진행 중 (핵심 화면)
```
┌─────────────────────────┐
│ 🔍 [현 위치 검색]         │
├─────────────────────────┤
│                         │
│      🗺️                  │
│   [실시간 지도]           │
│                         │
│   📍 내 위치 (파란점)     │
│   ━━━ 코스 경로          │
│                         │
│                         │
├─────────────────────────┤
│ 진행률: [▓▓▓▓░░░░░░]    │
│ 현재 → 정상 → 하산       │
├─────────────────────────┤
│ ⏱️ 경과: 01:15:23        │
│ 📏 이동: 1.8km / 3.2km  │
│ 📈 고도: 320m           │
├─────────────────────────┤
│ 🎯 정상까지: 25분 남음    │
│ 🏁 하산 예정: 17:30     │
│ 🌅 일몰까지: 2시간 5분   │⚠️ 중요
├─────────────────────────┤
│ [⏸️] [📸] [✅정상도착]    │
└─────────────────────────┘
```

**실시간 업데이트 항목:**
- ⏱️ 타이머 (시:분:초)
- 📏 이동 거리
- 📈 현재 고도
- 🎯 남은 시간 (동적 계산)
- 🌅 일몰 카운트다운

#### 3-3. 음성 내비게이션 알림 예시
**500m 돌파 시:**
> 🔊 "500미터를 돌파했습니다! 정상까지 2.7킬로미터 남았어요. 현재 페이스로 25분 후 도착 예정입니다. 화이팅!"

**일몰 1시간 전:**
> 🔊 "⚠️ 일몰까지 1시간 남았습니다. 안전한 하산을 위해 서둘러주세요!"

#### 3-4. LiveClimb 촬영 알림 (팝업)
```
┌─────────────────────────┐
│                         │
│   📸 LiveClimb          │
│                         │
│   500m 돌파!            │
│   이 순간을 기록하세요   │
│                         │
│   [📷 촬영] [나중에]     │
│                         │
└─────────────────────────┘
```

#### 3-5. 정상 도착
```
┌─────────────────────────┐
│                         │
│      🎉🏔️🎉             │
│                         │
│   정상 도착을 축하합니다! │
│                         │
│   소요 시간: 2h 10m     │
│   이동 거리: 3.2km      │
│                         │
│   [📸 정상 인증샷]       │
│   [⬇️ 하산 시작]         │
│                         │
└─────────────────────────┘
```

#### 3-6. 등산 완료 후 난이도 피드백
```
┌─────────────────────────┐
│   등산 완료! 🎊          │
├─────────────────────────┤
│                         │
│   이 코스의 난이도는      │
│   추천보다 어떠셨나요?    │
│                         │
│   [😅 더 쉬웠어요]       │
│   [👍 적당했어요]        │
│   [😰 더 어려웠어요]     │
│                         │
└─────────────────────────┘
```

#### 3-7. 그래픽 리포트 (등산 완료)
```
┌─────────────────────────┐
│   백운대 코스 완주! 🏆   │
├─────────────────────────┤
│                         │
│   📅 2026-04-22         │
│   ⏱️ 2h 10m 35s         │
│   📏 3.2km              │
│   📈 고도차 520m         │
│   🔥 450kcal            │
│                         │
│   ┌─ 고도 그래프 ─┐     │
│   │     /\        │     │
│   │    /  \       │     │
│   │   /    \___   │     │
│   └──────────────┘     │
│                         │
│   ┌─ 경로 지도 ─┐       │
│   │  🗺️ [루트맵]  │       │
│   └──────────────┘     │
│                         │
│   [💾 저장] [📤 공유]    │
└─────────────────────────┘
```

---

### 4. 온보딩 화면 (Onboarding)

#### 4-1. 소셜 로그인
```
┌─────────────────────────┐
│                         │
│      🏔️ SEMOSAN         │
│                         │
│   실시간 밀착 등산 도우미 │
│                         │
│                         │
│   [🍎 Apple로 시작하기]  │
│   [💬 카카오로 시작하기]  │
│   [N 네이버로 시작하기]   │
│                         │
│   [둘러보기 (비회원)]     │
│                         │
└─────────────────────────┘
```

#### 4-2. 건강 데이터 연동
```
┌─────────────────────────┐
│   체력 수준 분석 🏃      │
├─────────────────────────┤
│                         │
│   더 정확한 추천을 위해   │
│   건강 데이터를 연동할게요│
│                         │
│   📊 Apple Health       │
│   (또는 Google Fit)      │
│                         │
│   수집 항목:             │
│   • 평균 걸음수          │
│   • 최근 운동 기록       │
│   • 심박수 (선택)        │
│                         │
│   [연동하기] [건너뛰기]   │
│                         │
└─────────────────────────┘
```

#### 4-3. 자가진단 (건강 데이터 없을 때)
```
┌─────────────────────────┐
│   체력 수준 선택 💪      │
├─────────────────────────┤
│                         │
│   평소 운동 빈도는?      │
│                         │
│   ○ 거의 안함            │
│   ○ 주 1-2회            │
│   ● 주 3-4회            │
│   ○ 거의 매일           │
│                         │
│   ─────────────────     │
│                         │
│   3km 걷기 소요 시간?    │
│                         │
│   ○ 45분 이상           │
│   ● 30-45분            │
│   ○ 30분 이하           │
│                         │
│        [다음]            │
│                         │
└─────────────────────────┘
```

---

## 📊 데이터 구조 및 API 명세

### Database Schema (Supabase 기준)

#### 1. users (사용자)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE,
  nickname VARCHAR(50) NOT NULL,
  profile_image_url TEXT,
  
  -- 체력 정보
  fitness_level VARCHAR(20) DEFAULT 'beginner', -- beginner/intermediate/advanced
  
  -- 통계
  total_hikes INTEGER DEFAULT 0,
  total_distance INTEGER DEFAULT 0, -- meters
  total_time INTEGER DEFAULT 0, -- minutes
  total_calories INTEGER DEFAULT 0,
  
  -- 건강 데이터
  avg_steps_per_day INTEGER,
  resting_heart_rate INTEGER,
  
  -- 메타
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. mountains (산)
```sql
CREATE TABLE mountains (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  
  -- 위치
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  region VARCHAR(100), -- 서울특별시 강북구
  
  -- 기본 정보
  height INTEGER NOT NULL, -- meters
  description TEXT,
  image_url TEXT,
  
  -- 메타
  created_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_mountains_location ON mountains(latitude, longitude);
CREATE INDEX idx_mountains_region ON mountains(region);
```

#### 3. courses (코스)
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mountain_id UUID REFERENCES mountains(id),
  
  name VARCHAR(100) NOT NULL, -- 백운대 코스
  difficulty VARCHAR(20) NOT NULL, -- easy/medium/hard
  
  -- 코스 정보
  distance INTEGER NOT NULL, -- meters
  estimated_time INTEGER NOT NULL, -- minutes
  elevation_gain INTEGER NOT NULL, -- meters
  ascent_percentage INTEGER, -- 75 (오르막 비율)
  
  -- 경로 좌표 (GeoJSON)
  route_coordinates JSONB,
  
  -- 출발/도착
  start_point VARCHAR(200),
  end_point VARCHAR(200),
  
  -- 시설 정보
  facilities JSONB, -- {restrooms: ['start', 'middle'], shops: ['middle']}
  
  -- 메타
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. hike_records (등산 기록)
```sql
CREATE TABLE hike_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  mountain_id UUID REFERENCES mountains(id),
  course_id UUID REFERENCES courses(id),
  
  -- 시간
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP,
  duration INTEGER, -- minutes
  
  -- 측정값
  distance INTEGER, -- meters (실제 이동 거리)
  max_altitude INTEGER,
  avg_pace DECIMAL(5, 2), -- km/h
  calories INTEGER,
  
  -- 경로 (실제 이동한 좌표들)
  actual_route JSONB,
  
  -- 상태
  completed BOOLEAN DEFAULT FALSE,
  summit_reached BOOLEAN DEFAULT FALSE,
  
  -- 피드백
  difficulty_feedback VARCHAR(20), -- easier/appropriate/harder
  
  -- 메타
  created_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_hike_records_user ON hike_records(user_id);
CREATE INDEX idx_hike_records_mountain ON hike_records(mountain_id);
CREATE INDEX idx_hike_records_date ON hike_records(start_time);
```

#### 5. liveclimb_photos (LiveClimb 사진)
```sql
CREATE TABLE liveclimb_photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  hike_record_id UUID REFERENCES hike_records(id),
  
  -- 위치
  altitude INTEGER NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- 이미지
  image_url TEXT NOT NULL,
  
  -- 메타
  captured_at TIMESTAMP DEFAULT NOW()
);
```

#### 6. reviews (후기)
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  mountain_id UUID REFERENCES mountains(id),
  course_id UUID REFERENCES courses(id),
  hike_record_id UUID REFERENCES hike_records(id),
  
  -- 평가
  accessibility_rating INTEGER, -- 1-5
  facilities_rating INTEGER, -- 1-5
  scenery_rating INTEGER, -- 1-5
  
  -- 내용
  content TEXT,
  
  -- 사진
  photo_urls JSONB,
  
  -- 메타
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

### API 엔드포인트 설계

#### 인증 (Authentication)
```
POST /auth/login/kakao
POST /auth/login/apple
POST /auth/login/naver
POST /auth/logout
GET  /auth/me
```

#### 산 (Mountains)
```
GET    /mountains              # 산 목록 (검색, 필터)
GET    /mountains/:id          # 산 상세
GET    /mountains/:id/courses  # 특정 산의 코스 목록
GET    /mountains/nearby       # 현재 위치 근처 산
```

#### 코스 (Courses)
```
GET    /courses/:id            # 코스 상세
GET    /courses/:id/stats      # 코스 통계 (다른 사람들 기록)
```

#### 트래킹 (Tracking)
```
POST   /tracking/start         # 트래킹 시작
POST   /tracking/pause         # 일시정지
POST   /tracking/resume        # 재개
POST   /tracking/summit        # 정상 도착
POST   /tracking/complete      # 등산 완료
POST   /tracking/location      # 실시간 위치 업데이트
```

#### 기록 (Records)
```
GET    /records                # 내 기록 목록
GET    /records/:id            # 개별 기록 상세
GET    /records/stats          # 통계 (총 거리, 시간 등)
POST   /records/:id/review     # 후기 작성
```

#### LiveClimb
```
POST   /liveclimb/upload       # 사진 업로드
GET    /liveclimb/:recordId    # 특정 기록의 사진들
```

#### 추천 (Recommendations)
```
GET    /recommendations        # AI 추천 산
GET    /curations              # 테마 큐레이션
```

#### 환경 정보 (Environment)
```
GET    /weather/:mountainId    # 산별 날씨
GET    /air-quality/:region    # 지역별 미세먼지
```

---

## 🎨 디자인 시스템

### 색상 팔레트

#### Primary Colors (주요 색상)
```javascript
const colors = {
  // 등산 녹색 (Primary)
  primary: {
    50:  '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#2D7A3E', // Main
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  
  // 배경/회색조
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#EEEEEE',
  },
  
  // 텍스트
  text: {
    primary: '#1A1A1A',
    secondary: '#6B6B6B',
    tertiary: '#9E9E9E',
    inverse: '#FFFFFF',
  },
  
  // 상태 색상
  status: {
    success: '#4CAF50',
    warning: '#FFA726',
    danger: '#EF5350',
    info: '#42A5F5',
  },
  
  // 액센트 (CTA, 강조)
  accent: {
    orange: '#FF6B35',
    blue: '#2196F3',
  },
};
```

#### 사용 예시
```javascript
// 버튼
backgroundColor: colors.primary[500]

// 경고 알림
backgroundColor: colors.status.warning

// 일몰 카운트다운
color: colors.accent.orange
```

---

### 타이포그래피

#### Font Family
```javascript
const fonts = {
  primary: 'Pretendard', // 한글
  secondary: 'Inter',    // 영문/숫자
  mono: 'JetBrains Mono', // 코드/데이터
};
```

#### Font Scale (8px 기반)
```javascript
const fontSizes = {
  xs: 12,   // 캡션, 라벨
  sm: 14,   // 보조 텍스트
  base: 16, // 기본 본문
  lg: 20,   // 소제목
  xl: 24,   // 제목
  '2xl': 32, // 큰 제목
  '3xl': 40, // 히어로
  '4xl': 48, // 특별 강조
};
```

#### Line Height
```javascript
const lineHeights = {
  tight: 1.2,   // 제목
  normal: 1.5,  // 본문
  relaxed: 1.8, // 설명문
};
```

#### Font Weight
```javascript
const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};
```

---

### 간격 시스템 (8px Grid)

```javascript
const spacing = {
  0: 0,
  1: 4,   // 0.5 단위
  2: 8,   // 1 단위
  3: 12,
  4: 16,  // 2 단위
  5: 20,
  6: 24,  // 3 단위
  8: 32,  // 4 단위
  10: 40,
  12: 48, // 6 단위
  16: 64, // 8 단위
  20: 80,
  24: 96, // 12 단위
};
```

#### 사용 가이드
- **4px (spacing[1])**: 아이콘-텍스트 간격
- **8px (spacing[2])**: 관련 요소 간 최소 간격
- **16px (spacing[4])**: 섹션 내부 여백
- **24px (spacing[6])**: 섹션 간 구분
- **32px (spacing[8])**: 큰 섹션 구분
- **48px (spacing[12])**: 화면 상하 여백

---

### Border Radius (모서리 둥글기)

```javascript
const borderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999, // 완전 원형
};
```

---

### Shadow (그림자)

```javascript
const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};
```

---

## 🧩 컴포넌트 라이브러리

### 기본 컴포넌트

#### Button (버튼)
```jsx
// Primary 버튼
<Button variant="primary" size="large">
  등산 시작
</Button>

// 스타일
{
  backgroundColor: colors.primary[500],
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[6],
  borderRadius: borderRadius.lg,
  fontSize: fontSizes.base,
  fontWeight: fontWeights.semibold,
  color: colors.text.inverse,
}
```

**Variants:**
- `primary`: 주요 액션
- `secondary`: 보조 액션
- `outline`: 외곽선
- `ghost`: 투명 배경

**Sizes:**
- `small`: 32px 높이
- `medium`: 40px 높이
- `large`: 48px 높이

---

#### Card (카드)
```jsx
<Card>
  <CardImage src={mountain.image} />
  <CardTitle>{mountain.name}</CardTitle>
  <CardDescription>{mountain.region}</CardDescription>
</Card>

// 스타일
{
  backgroundColor: colors.background.primary,
  borderRadius: borderRadius.lg,
  padding: spacing[4],
  shadow: shadows.md,
}
```

---

#### Badge (배지)
```jsx
<Badge variant="success">완등</Badge>
<Badge variant="warning">중급</Badge>

// 스타일
{
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[3],
  borderRadius: borderRadius.full,
  fontSize: fontSizes.xs,
  fontWeight: fontWeights.medium,
}
```

---

#### ProgressBar (진행 바)
```jsx
<ProgressBar value={60} max={100} />

// 트래킹 화면용
{
  height: 8,
  backgroundColor: colors.background.tertiary,
  borderRadius: borderRadius.full,
  
  // 진행된 부분
  fill: {
    height: 8,
    backgroundColor: colors.primary[500],
    borderRadius: borderRadius.full,
  }
}
```

---

#### Modal (모달)
```jsx
<Modal visible={isVisible} onClose={handleClose}>
  <ModalHeader title="북한산" />
  <ModalContent>
    {/* 내용 */}
  </ModalContent>
</Modal>

// 스타일
{
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: colors.background.primary,
  borderTopLeftRadius: borderRadius['2xl'],
  borderTopRightRadius: borderRadius['2xl'],
  paddingBottom: spacing[6],
}
```

---

## 📱 기술 스택 및 라이브러리

### Core Framework
```json
{
  "react-native": "^0.76.0",
  "expo": "~52.0.0",
  "typescript": "^5.3.0"
}
```

### Navigation
```json
{
  "@react-navigation/native": "^7.0.0",
  "@react-navigation/bottom-tabs": "^7.0.0",
  "@react-navigation/native-stack": "^7.0.0"
}
```

### State Management
```json
{
  "zustand": "^5.0.0"
}
```

### Map & Location
```json
{
  "react-native-maps": "^1.18.0",
  "@mapbox/mapbox-gl-react-native": "^10.0.0",
  "expo-location": "~18.0.0",
  "@react-native-community/geolocation": "^3.4.0"
}
```

### Camera & Media
```json
{
  "expo-camera": "~16.0.0",
  "expo-image-picker": "~16.0.0",
  "expo-media-library": "~17.0.0"
}
```

### Health & Sensors
```json
{
  "expo-sensors": "~14.0.0",
  "react-native-health": "^1.20.0"
}
```

### Audio & Speech
```json
{
  "expo-speech": "~13.0.0",
  "expo-av": "~15.0.0"
}
```

### Notifications
```json
{
  "expo-notifications": "~0.29.0"
}
```

### Backend & Database
```json
{
  "@supabase/supabase-js": "^2.45.0",
  "react-native-url-polyfill": "^2.0.0"
}
```

### UI Components
```json
{
  "react-native-reanimated": "~3.16.0",
  "react-native-gesture-handler": "~2.20.0",
  "react-native-svg": "15.8.0"
}
```

### Utilities
```json
{
  "date-fns": "^4.1.0",
  "axios": "^1.7.0",
  "react-hook-form": "^7.53.0",
  "zod": "^3.23.0"
}
```

---

## 📂 프로젝트 폴더 구조

```
semosan-mvp/
├── src/
│   ├── app/                    # 앱 진입점
│   │   ├── App.tsx
│   │   └── navigation.tsx
│   │
│   ├── features/               # 기능별 모듈
│   │   ├── home/
│   │   │   ├── screens/
│   │   │   │   ├── HomeScreen.tsx
│   │   │   │   ├── RecordListScreen.tsx
│   │   │   │   └── RecordDetailScreen.tsx
│   │   │   ├── components/
│   │   │   │   ├── MapView.tsx
│   │   │   │   ├── MountainPin.tsx
│   │   │   │   └── RecordCard.tsx
│   │   │   └── hooks/
│   │   │       └── useHikeRecords.ts
│   │   │
│   │   ├── mountains/
│   │   │   ├── screens/
│   │   │   │   ├── MountainListScreen.tsx
│   │   │   │   ├── MountainDetailScreen.tsx
│   │   │   │   └── CourseDetailScreen.tsx
│   │   │   └── components/
│   │   │       ├── MountainCard.tsx
│   │   │       └── CourseCard.tsx
│   │   │
│   │   ├── tracking/           # 🔥 가장 중요
│   │   │   ├── screens/
│   │   │   │   ├── TrackingPreviewScreen.tsx
│   │   │   │   ├── TrackingScreen.tsx
│   │   │   │   └── CompletionScreen.tsx
│   │   │   ├── components/
│   │   │   │   ├── LiveMap.tsx
│   │   │   │   ├── Timer.tsx
│   │   │   │   ├── ProgressBar.tsx
│   │   │   │   ├── SunsetCounter.tsx
│   │   │   │   └── ControlButtons.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useGPSTracking.ts
│   │   │   │   ├── usePaceCalculator.ts
│   │   │   │   └── useSunsetAlert.ts
│   │   │   └── services/
│   │   │       ├── locationService.ts
│   │   │       ├── voiceNavigation.ts
│   │   │       └── liveClimbService.ts
│   │   │
│   │   ├── liveclimb/
│   │   │   ├── screens/
│   │   │   │   └── LiveClimbGalleryScreen.tsx
│   │   │   └── components/
│   │   │       └── PhotoCapture.tsx
│   │   │
│   │   ├── onboarding/
│   │   │   ├── screens/
│   │   │   │   ├── LoginScreen.tsx
│   │   │   │   ├── HealthConnectScreen.tsx
│   │   │   │   └── FitnessAssessmentScreen.tsx
│   │   │   └── components/
│   │   │       └── SocialLoginButton.tsx
│   │   │
│   │   └── profile/
│   │       └── screens/
│   │           └── ProfileScreen.tsx
│   │
│   ├── shared/                 # 공용 모듈
│   │   ├── components/         # 공용 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Loading.tsx
│   │   │
│   │   ├── hooks/              # 공용 훅
│   │   │   ├── useAuth.ts
│   │   │   └── useToast.ts
│   │   │
│   │   ├── utils/              # 유틸리티
│   │   │   ├── distance.ts
│   │   │   ├── time.ts
│   │   │   └── format.ts
│   │   │
│   │   └── constants/          # 상수
│   │       ├── colors.ts
│   │       ├── spacing.ts
│   │       └── typography.ts
│   │
│   ├── services/               # 외부 서비스
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── mountains.ts
│   │   │   ├── courses.ts
│   │   │   ├── tracking.ts
│   │   │   └── records.ts
│   │   │
│   │   ├── supabase/
│   │   │   └── client.ts
│   │   │
│   │   └── external/
│   │       ├── weatherAPI.ts
│   │       └── sunsetAPI.ts
│   │
│   ├── store/                  # Zustand 스토어
│   │   ├── authStore.ts
│   │   ├── trackingStore.ts
│   │   └── recordsStore.ts
│   │
│   └── types/                  # TypeScript 타입
│       ├── user.ts
│       ├── mountain.ts
│       ├── course.ts
│       ├── hike.ts
│       └── api.ts
│
├── assets/                     # 정적 파일
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── .env                        # 환경 변수
├── app.json                    # Expo 설정
├── package.json
└── tsconfig.json
```

---

## 🚀 개발 시작 가이드

### 1단계: 프로젝트 초기화

```bash
# Expo 프로젝트 생성
npx create-expo-app semosan-mvp --template expo-template-blank-typescript

cd semosan-mvp

# 필수 패키지 설치
npx expo install react-native-maps expo-location expo-camera
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npx expo install zustand
npx expo install expo-speech expo-notifications
npx expo install date-fns
```

### 2단계: 디자인 시스템 구축

```bash
# 색상, 타이포그래피, 간격 상수 파일 생성
mkdir -p src/shared/constants
touch src/shared/constants/colors.ts
touch src/shared/constants/spacing.ts
touch src/shared/constants/typography.ts
```

### 3단계: 기본 컴포넌트 구현

```bash
# 공용 컴포넌트 생성
mkdir -p src/shared/components
touch src/shared/components/Button.tsx
touch src/shared/components/Card.tsx
touch src/shared/components/Modal.tsx
```

### 4단계: 폴더 구조 생성

```bash
# 기능별 폴더 생성
mkdir -p src/features/{home,mountains,tracking,onboarding,profile}
mkdir -p src/features/home/{screens,components,hooks}
mkdir -p src/features/tracking/{screens,components,hooks,services}
```

### 5단계: Mock 데이터 준비

```bash
# 샘플 산 데이터
mkdir -p src/data
touch src/data/mockMountains.ts
touch src/data/mockCourses.ts
```

---

## 🎯 개발 우선순위 및 체크리스트

### Sprint 1: 프로젝트 세팅 (1-2일)
- [ ] Expo 프로젝트 생성
- [ ] TypeScript 설정
- [ ] 폴더 구조 구축
- [ ] 디자인 시스템 (colors, spacing, typography)
- [ ] 기본 컴포넌트 (Button, Card, Modal)
- [ ] Navigation 구조
- [ ] Mock 데이터 준비

### Sprint 2: 홈 화면 (2-3일)
- [ ] 지도형 홈 (react-native-maps)
- [ ] 산 핀 표시
- [ ] 리스트형 홈
- [ ] 지도/리스트 토글
- [ ] 산 정보 모달
- [ ] 기록 목록 화면

### Sprint 3: 산 목록 및 탐색 (2일)
- [ ] 산 검색 기능
- [ ] 산 목록 화면
- [ ] 산 상세 페이지
- [ ] 코스 목록/상세
- [ ] 필터 기능

### Sprint 4: 트래킹 시스템 - Phase 1 (4-5일) 🔥
- [ ] GPS 위치 추적 시작
- [ ] 실시간 지도 표시
- [ ] 현재 위치 마커
- [ ] 코스 경로 오버레이
- [ ] 타이머 구현
- [ ] 일시정지/재개/완료 버튼
- [ ] 이동 거리 계산

### Sprint 5: 트래킹 시스템 - Phase 2 (3-4일) 🔥
- [ ] 페이스 계산 알고리즘
- [ ] 남은 시간 예측 (동적)
- [ ] 일몰 시간 API 연동
- [ ] 일몰 카운트다운
- [ ] 일몰 1시간/30분 전 경고
- [ ] 진행률 바
- [ ] 고도 측정

### Sprint 6: 음성 내비게이션 (2일)
- [ ] expo-speech 연동
- [ ] 구간 돌파 알림 (500m, 1km)
- [ ] 음성 안내 문구 작성
- [ ] 설정에서 on/off

### Sprint 7: LiveClimb (3일)
- [ ] 카메라 권한 요청
- [ ] 구간별 촬영 알림 트리거
- [ ] 사진 촬영 UI
- [ ] 고도별 갤러리 화면
- [ ] 이미지 저장 기능

### Sprint 8: 기록 아카이빙 (2-3일)
- [ ] 등산 완료 시 기록 저장
- [ ] 그래픽 리포트 생성
- [ ] 고도 그래프
- [ ] 경로 지도 이미지
- [ ] 공유 기능

### Sprint 9: 온보딩 (2일)
- [ ] 소셜 로그인 (카카오/애플)
- [ ] 건강 데이터 연동
- [ ] 자가진단 폼
- [ ] 체력 레벨 산출

### Sprint 10: 추천 시스템 (2-3일)
- [ ] 추천 알고리즘 기본 로직
- [ ] 난이도별 산 필터링
- [ ] 지도에 추천 핀 표시
- [ ] AI 큐레이션 (시즌별)

### Sprint 11: 폴리싱 (2-3일)
- [ ] iOS Live Activity
- [ ] 안드로이드 Foreground Service
- [ ] 배터리 최적화
- [ ] 버그 수정
- [ ] 성능 개선

---

## 🔧 환경 변수 (.env)

```env
# Supabase
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Mapbox (지도)
EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-token

# 소셜 로그인
EXPO_PUBLIC_KAKAO_APP_KEY=your-kakao-key
EXPO_PUBLIC_NAVER_CLIENT_ID=your-naver-id
EXPO_PUBLIC_NAVER_CLIENT_SECRET=your-naver-secret

# 날씨 API
EXPO_PUBLIC_WEATHER_API_KEY=your-weather-api-key

# 일몰 API
EXPO_PUBLIC_SUNRISE_SUNSET_API=https://api.sunrise-sunset.org
```

---

## 📊 핵심 알고리즘 설명

### 1. 페이스 계산 및 남은 시간 예측

```typescript
/**
 * 페이스 계산
 * @param distance - 이동한 거리 (meters)
 * @param time - 소요 시간 (seconds)
 * @returns pace - km/h
 */
function calculatePace(distance: number, time: number): number {
  const distanceKm = distance / 1000;
  const timeHours = time / 3600;
  return distanceKm / timeHours;
}

/**
 * 남은 시간 예측
 * @param remainingDistance - 남은 거리 (meters)
 * @param currentPace - 현재 페이스 (km/h)
 * @returns estimatedMinutes - 예상 소요 시간 (minutes)
 */
function estimateRemainingTime(
  remainingDistance: number, 
  currentPace: number
): number {
  const remainingKm = remainingDistance / 1000;
  const hours = remainingKm / currentPace;
  return Math.round(hours * 60);
}

/**
 * 고도를 고려한 보정 페이스
 * 오르막: 페이스 감소
 * 내리막: 페이스 증가
 */
function adjustPaceForElevation(
  basePace: number,
  elevationChange: number
): number {
  // 100m 오를 때마다 페이스 10% 감소
  const elevationFactor = elevationChange > 0 
    ? 1 - (elevationChange / 1000) 
    : 1 + (Math.abs(elevationChange) / 2000);
  
  return basePace * elevationFactor;
}
```

### 2. 일몰 기반 하산 경고

```typescript
/**
 * 일몰까지 남은 시간 계산
 */
function calculateTimeUntilSunset(sunsetTime: Date): number {
  const now = new Date();
  const diff = sunsetTime.getTime() - now.getTime();
  return Math.floor(diff / 1000 / 60); // minutes
}

/**
 * 안전 하산 시작 시간 계산
 * @param currentLocation - 현재 위치
 * @param descentDistance - 하산 거리 (meters)
 * @param estimatedDescentPace - 예상 하산 페이스 (km/h)
 * @param sunsetTime - 일몰 시간
 * @returns shouldStartDescent - 지금 하산 시작해야 하는지
 */
function shouldStartDescent(
  currentLocation: LatLng,
  descentDistance: number,
  estimatedDescentPace: number,
  sunsetTime: Date
): boolean {
  const descentTime = estimateRemainingTime(descentDistance, estimatedDescentPace);
  const timeUntilSunset = calculateTimeUntilSunset(sunsetTime);
  
  // 여유 시간 30분 추가
  const safetyBuffer = 30;
  
  return timeUntilSunset <= (descentTime + safetyBuffer);
}
```

### 3. LiveClimb 촬영 트리거

```typescript
/**
 * 구간 돌파 감지
 */
const ALTITUDE_MILESTONES = [100, 200, 300, 500, 700, 1000]; // meters

function checkAltitudeMilestone(
  currentAltitude: number,
  previousAltitude: number
): number | null {
  for (const milestone of ALTITUDE_MILESTONES) {
    if (previousAltitude < milestone && currentAltitude >= milestone) {
      return milestone;
    }
  }
  return null;
}

/**
 * 사용 예시
 */
const milestone = checkAltitudeMilestone(520, 480);
if (milestone) {
  // 500m 돌파! LiveClimb 촬영 알림
  showLiveClimbAlert(milestone);
}
```

---

## 🧪 테스트 시나리오

### 시나리오 1: 등산 완주 (Happy Path)
1. 앱 실행 → 홈 화면
2. 산목록 탭 → 북한산 검색
3. 백운대 코스 선택
4. 기록하기 시작 → 트래킹 화면
5. GPS 추적 시작
6. 500m 돌파 → 음성 알림 + LiveClimb 촬영
7. 정상 도착 → 정상 인증샷
8. 하산 시작
9. 등산 완료 → 그래픽 리포트
10. 후기 작성

### 시나리오 2: 일몰 경고 (Safety)
1. 오후 5시에 등산 시작 (일몰 7시)
2. 트래킹 진행
3. 오후 6시: "일몰까지 1시간" 경고
4. 오후 6시 30분: "일몰까지 30분" 긴급 경고
5. 사용자 하산 결정
6. 중도 포기 기록 저장

### 시나리오 3: 비회원 탐색
1. 앱 실행 → 로그인 건너뛰기
2. 산목록 탐색 가능
3. 산 상세, 코스 상세 조회 가능
4. 기록하기 클릭 → 로그인 유도

---

## 📝 다음 단계 액션 아이템

### 즉시 실행할 것
1. **Expo 프로젝트 생성**
   ```bash
   npx create-expo-app semosan-mvp --template expo-template-blank-typescript
   ```

2. **디자인 시스템 파일 생성**
   - colors.ts
   - spacing.ts
   - typography.ts

3. **Mock 데이터 준비**
   - 서울 근교 산 5개 (북한산, 관악산, 도봉산, 수락산, 불암산)
   - 각 산마다 코스 2-3개

4. **첫 번째 화면 구현**
   - 홈 화면 지도형 프로토타입

---

## 💡 개발 팁

### GPS 정확도 개선
```typescript
// 고정밀 GPS 설정
const locationOptions = {
  accuracy: LocationAccuracy.BestForNavigation,
  distanceInterval: 10, // 10m마다 업데이트
  timeInterval: 5000,   // 5초마다 업데이트
};
```

### 배터리 최적화
```typescript
// 화면 꺼졌을 때도 위치 추적
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    // 위치 데이터 처리
  }
});
```

### 일몰 시간 API 호출
```typescript
// https://sunrise-sunset.org/api
async function getSunsetTime(lat: number, lng: number, date: string) {
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}&formatted=0`;
  const response = await fetch(url);
  const data = await response.json();
  return new Date(data.results.sunset);
}
```

---

## 🎯 성공 지표 (KPI)

### MVP 성공 기준
1. **기능 완성도**
   - [ ] GPS 트래킹 정확도 95% 이상
   - [ ] 일몰 경고 100% 작동
   - [ ] 음성 내비게이션 정상 작동
   - [ ] LiveClimb 사진 저장률 90% 이상

2. **사용성**
   - [ ] 등산 시작까지 3탭 이내
   - [ ] 트래킹 화면 로딩 3초 이내
   - [ ] 배터리 소모 시간당 10% 이하

3. **안정성**
   - [ ] 크래시율 1% 이하
   - [ ] GPS 끊김 복구 자동화

---

## 📚 참고 자료

### API 문서
- [산림청 산 정보 API](https://www.forest.go.kr/kfsweb/kfi/kfs/cms/cmsView.do?mn=NKFS_06_09_01&cmsId=FC_001274)
- [국립공원공단 탐방로 API](https://www.knps.or.kr/front/portal/visit/visitCourseMain.do)
- [기상청 단기예보 API](https://www.data.go.kr/data/15084084/openapi.do)
- [일몰 시간 API](https://sunrise-sunset.org/api)

### 기술 문서
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Supabase Docs](https://supabase.com/docs)

---

## ✅ 최종 체크

**이 문서를 Claude Code에게 주면:**
1. ✅ 프로젝트 목적과 핵심 기능을 이해
2. ✅ 화면 구조와 UI/UX 파악
3. ✅ 데이터 구조와 API 설계 파악
4. ✅ 디자인 시스템 완전 이해
5. ✅ 개발 우선순위와 체크리스트 확인
6. ✅ 기술 스택과 폴더 구조 파악
7. ✅ 핵심 알고리즘 로직 이해

**즉시 개발 시작 가능합니다!** 🚀

---

**문서 버전**: 1.0  
**마지막 업데이트**: 2026-04-22  
**작성자**: Product Team
