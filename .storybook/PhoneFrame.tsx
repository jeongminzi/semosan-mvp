import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PHONE_W = 375;
const PHONE_H = 812;
const STATUSBAR_H = 44;

export interface PhoneFrameProps {
  children: React.ReactNode;
  /** 상태바 시계 */
  time?: string;
  /** 다크 배경 위에 폰 보이기 */
  showOutline?: boolean;
}

/**
 * PhoneFrame — Storybook에서 화면을 iPhone 375×812 프레임에 감싸기
 * 하단 home indicator, 상단 상태바 포함
 */
export function PhoneFrame({
  children,
  time = '9:41',
  showOutline = true,
}: PhoneFrameProps) {
  return (
    <View style={styles.stage}>
      <View
        style={[
          styles.phone,
          showOutline && styles.phoneOutline,
        ]}
      >
        <View style={styles.statusbar}>
          <Text style={styles.time}>{time}</Text>
          <View style={styles.statusbarRight}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.body}>{children}</View>

        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    padding: 20,
    alignItems: 'flex-start',
  },
  phone: {
    width: PHONE_W,
    height: PHONE_H,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
  },
  phoneOutline: {
    borderWidth: 1,
    borderColor: '#C8C8CE',
  },
  statusbar: {
    height: STATUSBAR_H,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  statusbarRight: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#1A1A1A',
    borderRadius: 2,
  },
  body: {
    flex: 1,
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    width: 134,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#1A1A1A',
  },
});
