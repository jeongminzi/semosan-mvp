import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Button, ProgressBar, TopBar } from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';

export interface FitnessAssessmentScreenProps {
  onNext?: (answers: { frequency: string; walkingTime: string }) => void;
  onBack?: () => void;
}

const FREQUENCY = ['거의 안 함', '주 1~2회', '주 3~4회', '거의 매일'];
const WALKING = ['45분 이상', '30~45분', '30분 이하'];

/**
 * 온보딩 — 자가진단 (01-03)
 */
export function FitnessAssessmentScreen({ onNext, onBack }: FitnessAssessmentScreenProps) {
  const [frequency, setFrequency] = useState<string | null>('주 3~4회');
  const [walking, setWalking] = useState<string | null>('30~45분');

  const canContinue = !!frequency && !!walking;

  return (
    <View style={styles.container}>
      <TopBar onBack={onBack} rightAction={<Text style={styles.step}>2 / 2</Text>} />

      <View style={styles.content}>
        <ProgressBar value={100} size="sm" />

        <View style={styles.question}>
          <Text style={styles.qTitle}>평소 운동 빈도는?</Text>
          <View style={styles.options}>
            {FREQUENCY.map((opt) => (
              <RadioOption
                key={opt}
                label={opt}
                selected={frequency === opt}
                onPress={() => setFrequency(opt)}
              />
            ))}
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.qTitle}>3km 걷기 소요 시간은?</Text>
          <View style={styles.options}>
            {WALKING.map((opt) => (
              <RadioOption
                key={opt}
                label={opt}
                selected={walking === opt}
                onPress={() => setWalking(opt)}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!canContinue}
          onPress={() => frequency && walking && onNext?.({ frequency, walkingTime: walking })}
        >
          다음
        </Button>
      </View>
    </View>
  );
}

function RadioOption({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.option, selected && styles.optionSelected]}
    >
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioDot} />}
      </View>
      <Text style={[styles.optionLabel, selected && { fontWeight: '600' }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  step: { ...Typography.bodySm, color: Colors.text.tertiary },
  content: {
    flex: 1,
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[5],
    gap: Spacing[8],
  },
  question: { gap: Spacing[3] },
  qTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
  },
  options: { gap: Spacing[2] },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Primitive.gray[200],
    paddingHorizontal: Spacing[4],
    backgroundColor: Colors.background.primary,
  },
  optionSelected: {
    borderColor: Colors.interactive.primary,
    backgroundColor: Colors.interactive.weak,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Primitive.gray[300],
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: Colors.interactive.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.interactive.primary,
  },
  optionLabel: {
    ...Typography.body,
    color: Colors.text.primary,
  },
  actions: {
    paddingHorizontal: Spacing[5],
    paddingBottom: Spacing[10],
  },
});
