import { Mountains } from 'phosphor-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';

export interface LoginScreenProps {
  onAppleLogin?: () => void;
  onKakaoLogin?: () => void;
  onNaverLogin?: () => void;
  onExplore?: () => void;
}

/**
 * 온보딩 — 소셜 로그인 화면 (01-01)
 */
export function LoginScreen({
  onAppleLogin,
  onKakaoLogin,
  onNaverLogin,
  onExplore,
}: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logoWrap}>
          <Mountains size={48} weight="fill" color={Colors.interactive.primary} />
        </View>
        <Text style={styles.brand}>SEMOSAN</Text>
        <Text style={styles.tagline}>실시간 밀착 등산 도우미</Text>
      </View>

      <View style={styles.actions}>
        <Button variant="primary" size="lg" fullWidth onPress={onAppleLogin}>
          Apple로 시작하기
        </Button>
        <Button variant="secondary" size="lg" fullWidth onPress={onKakaoLogin}>
          카카오로 시작하기
        </Button>
        <Button variant="secondary" size="lg" fullWidth onPress={onNaverLogin}>
          네이버로 시작하기
        </Button>

        <Pressable onPress={onExplore} style={styles.exploreBtn}>
          <Text style={styles.exploreText}>둘러보기 (비회원)</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    paddingHorizontal: 28,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[5],
  },
  logoWrap: {
    width: 96,
    height: 96,
    borderRadius: 28,
    backgroundColor: Colors.interactive.weak,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -1,
    color: Colors.text.primary,
    marginTop: Spacing[2],
  },
  tagline: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    marginTop: -Spacing[2],
  },
  actions: {
    gap: Spacing[3],
    paddingBottom: Spacing[10],
  },
  exploreBtn: {
    paddingVertical: Spacing[3],
    alignItems: 'center',
    marginTop: Spacing[1],
  },
  exploreText: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
    textDecorationLine: 'underline',
  },
});
