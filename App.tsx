import { CaretLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LoginScreen } from './src/features/onboarding/screens/LoginScreen';
import { HealthConnectScreen } from './src/features/onboarding/screens/HealthConnectScreen';
import { FitnessAssessmentScreen } from './src/features/onboarding/screens/FitnessAssessmentScreen';
import { HomeMapScreen } from './src/features/home/screens/HomeMapScreen';
import { HomeListScreen } from './src/features/home/screens/HomeListScreen';
import { MountainInfoSheetScreen } from './src/features/home/screens/MountainInfoSheetScreen';
import { RecordDetailScreen } from './src/features/home/screens/RecordDetailScreen';
import { ReviewFormScreen } from './src/features/home/screens/ReviewFormScreen';
import { MountainListScreen } from './src/features/mountains/screens/MountainListScreen';
import { MountainDetailScreen } from './src/features/mountains/screens/MountainDetailScreen';
import { CourseDetailScreen } from './src/features/mountains/screens/CourseDetailScreen';
import { TrackingPreviewScreen } from './src/features/tracking/screens/TrackingPreviewScreen';
import { TrackingActiveScreen } from './src/features/tracking/screens/TrackingActiveScreen';
import { LiveClimbAlertScreen } from './src/features/tracking/screens/LiveClimbAlertScreen';
import { SummitReachedScreen } from './src/features/tracking/screens/SummitReachedScreen';
import { CompletionReportScreen } from './src/features/tracking/screens/CompletionReportScreen';

import { Colors, Spacing, Typography } from './src/shared/constants';

type ScreenId =
  | 'login'
  | 'health'
  | 'fitness'
  | 'home-map'
  | 'home-list'
  | 'mountain-sheet'
  | 'record-detail'
  | 'review-form'
  | 'mountain-list'
  | 'mountain-detail'
  | 'course-detail'
  | 'tracking-preview'
  | 'tracking-active'
  | 'liveclimb-alert'
  | 'summit-reached'
  | 'completion-report';

const SCREENS: Array<{
  section: string;
  id: ScreenId;
  code: string;
  title: string;
  component: React.ComponentType<any>;
}> = [
  { section: '01 온보딩', id: 'login', code: '01-01', title: '소셜 로그인', component: LoginScreen },
  { section: '01 온보딩', id: 'health', code: '01-02', title: '건강 데이터 연동', component: HealthConnectScreen },
  { section: '01 온보딩', id: 'fitness', code: '01-03', title: '자가진단', component: FitnessAssessmentScreen },
  { section: '02 홈 & 기록', id: 'home-map', code: '02-01', title: '홈 지도형', component: HomeMapScreen },
  { section: '02 홈 & 기록', id: 'home-list', code: '02-02', title: '홈 리스트형', component: HomeListScreen },
  { section: '02 홈 & 기록', id: 'mountain-sheet', code: '02-03', title: '산 정보 모달', component: MountainInfoSheetScreen },
  { section: '02 홈 & 기록', id: 'record-detail', code: '02-04', title: '등반 기록 상세', component: RecordDetailScreen },
  { section: '02 홈 & 기록', id: 'review-form', code: '02-05', title: '후기 작성', component: ReviewFormScreen },
  { section: '03 산 탐색', id: 'mountain-list', code: '03-01', title: '산 목록', component: MountainListScreen },
  { section: '03 산 탐색', id: 'mountain-detail', code: '03-02', title: '산 상세', component: MountainDetailScreen },
  { section: '03 산 탐색', id: 'course-detail', code: '03-03', title: '코스 상세', component: CourseDetailScreen },
  { section: '04 트래킹', id: 'tracking-preview', code: '04-01', title: '트래킹 시작 전', component: TrackingPreviewScreen },
  { section: '04 트래킹', id: 'tracking-active', code: '04-02', title: '트래킹 진행 중 ⭐', component: TrackingActiveScreen },
  { section: '04 트래킹', id: 'liveclimb-alert', code: '04-03', title: 'LiveClimb 알림', component: LiveClimbAlertScreen },
  { section: '04 트래킹', id: 'summit-reached', code: '04-04', title: '정상 도착', component: SummitReachedScreen },
  { section: '04 트래킹', id: 'completion-report', code: '04-05', title: '완료 리포트', component: CompletionReportScreen },
];

export default function App() {
  const [active, setActive] = useState<ScreenId | null>(null);

  if (active) {
    const s = SCREENS.find((x) => x.id === active);
    if (!s) return null;
    const Screen = s.component;

    return (
      <View style={styles.frame}>
        <View style={styles.phone}>
          <Screen onBack={() => setActive(null)} onClose={() => setActive(null)} />
        </View>
        <Pressable onPress={() => setActive(null)} style={styles.backFloat}>
          <CaretLeft size={18} weight="bold" color={Colors.text.inverse} />
          <Text style={styles.backFloatText}>갤러리로</Text>
        </Pressable>
      </View>
    );
  }

  const sections = Array.from(new Set(SCREENS.map((s) => s.section)));

  return (
    <View style={styles.galleryRoot}>
      <StatusBar />
      <View style={styles.galleryHeader}>
        <Text style={styles.galleryTitle}>🏔️ SEMOSAN Screens</Text>
        <Text style={styles.gallerySubtitle}>
          {SCREENS.length}개 화면 · 클릭하여 프리뷰
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {sections.map((section) => (
          <View key={section} style={styles.section}>
            <Text style={styles.sectionTitle}>{section}</Text>
            <View style={styles.sectionBody}>
              {SCREENS.filter((s) => s.section === section).map((s) => (
                <Pressable
                  key={s.id}
                  onPress={() => setActive(s.id)}
                  style={({ pressed }) => [styles.card, pressed && { opacity: 0.7 }]}
                >
                  <Text style={styles.cardCode}>{s.code}</Text>
                  <Text style={styles.cardTitle}>{s.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
        <View style={{ height: Spacing[10] }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  galleryRoot: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  galleryHeader: {
    paddingTop: 64,
    paddingHorizontal: Spacing[6],
    paddingBottom: Spacing[6],
  },
  galleryTitle: {
    ...Typography.h1,
    color: Colors.text.primary,
    marginBottom: Spacing[1],
  },
  gallerySubtitle: {
    ...Typography.body,
    color: Colors.text.secondary,
  },
  grid: {
    paddingHorizontal: Spacing[6],
  },
  section: {
    marginBottom: Spacing[8],
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionBody: {
    gap: Spacing[2],
  },
  card: {
    backgroundColor: Colors.background.primary,
    borderRadius: 12,
    padding: Spacing[4],
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  cardCode: {
    ...Typography.caption,
    color: Colors.interactive.primary,
    fontFamily: 'Menlo',
    fontWeight: '700',
    marginBottom: 4,
  },
  cardTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
  },
  frame: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 375,
    height: 812,
    backgroundColor: Colors.background.primary,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  backFloat: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  backFloatText: {
    ...Typography.bodySm,
    color: Colors.text.inverse,
    fontWeight: '600',
  },
});
