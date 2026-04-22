import { Camera } from 'phosphor-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Button, MapMock } from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';

export interface LiveClimbAlertScreenProps {
  milestoneMeters?: number;
  onCapture?: () => void;
  onLater?: () => void;
}

/**
 * 트래킹 — LiveClimb 촬영 알림 (04-03)
 */
export function LiveClimbAlertScreen({
  milestoneMeters = 500,
  onCapture,
  onLater,
}: LiveClimbAlertScreenProps) {
  return (
    <View style={styles.container}>
      <MapMock
        fullBleed
        pins={[{ x: 0.45, y: 0.5, user: true }]}
        route={{ path: 'M 12 85 Q 40 60 55 35 T 88 10' }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.overlay} />

      <View style={styles.popup}>
        <View style={styles.iconWrap}>
          <Camera size={28} weight="fill" color={Colors.interactive.primary} />
        </View>
        <Text style={styles.eyebrow}>LiveClimb</Text>
        <Text style={styles.title}>{milestoneMeters}m 돌파! 🎉</Text>
        <Text style={styles.desc}>
          이 순간의 풍경과 표정을{'\n'}기록해보세요.
        </Text>

        <View style={styles.actions}>
          <Button variant="primary" size="lg" fullWidth onPress={onCapture}>
            지금 촬영
          </Button>
          <Pressable onPress={onLater} hitSlop={8} style={styles.laterBtn}>
            <Text style={styles.laterText}>나중에</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17, 24, 39, 0.55)',
  },
  popup: {
    position: 'absolute',
    top: '50%',
    left: Spacing[6],
    right: Spacing[6],
    transform: [{ translateY: -180 }],
    backgroundColor: Colors.background.primary,
    borderRadius: 24,
    padding: Spacing[6],
    alignItems: 'center',
    gap: Spacing[2],
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: Colors.interactive.weak,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing[2],
  },
  eyebrow: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    ...Typography.h2,
    color: Colors.text.primary,
    marginBottom: Spacing[1],
  },
  desc: {
    ...Typography.body,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: Spacing[5],
  },
  actions: {
    width: '100%',
    gap: Spacing[2],
  },
  laterBtn: {
    paddingVertical: Spacing[3],
    alignItems: 'center',
  },
  laterText: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
  },
});

void Primitive;
