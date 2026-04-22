import { Camera, Plus } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Button, StarRating, TopBar } from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';

export interface ReviewFormScreenProps {
  onClose?: () => void;
  onSubmit?: (data: {
    access: number;
    facilities: number;
    scenery: number;
    content: string;
  }) => void;
}

/**
 * 홈 — 후기 작성 에디터 (02-05)
 */
export function ReviewFormScreen({ onClose, onSubmit }: ReviewFormScreenProps) {
  const [access, setAccess] = useState(5);
  const [facilities, setFacilities] = useState(3);
  const [scenery, setScenery] = useState(5);
  const [content, setContent] = useState('');
  const [photos] = useState<string[]>([
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300',
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=300',
  ]);

  return (
    <View style={styles.container}>
      <TopBar
        title="후기 작성"
        onBack={onClose}
        rightAction={
          <Pressable hitSlop={8}>
            <Text style={styles.save}>저장</Text>
          </Pressable>
        }
      />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>북한산 백운대 코스 · 2026-04-15</Text>

        <View style={styles.ratingBlock}>
          <RatingRow label="접근성" value={access} onChange={setAccess} />
          <RatingRow label="주변 시설" value={facilities} onChange={setFacilities} />
          <RatingRow label="경치" value={scenery} onChange={setScenery} />
        </View>

        <View>
          <Text style={styles.label}>사진 첨부 (최대 4장)</Text>
          <View style={styles.photoGrid}>
            {photos.map((p, i) => (
              <View key={i} style={styles.photo}>
                <Image source={{ uri: p }} style={styles.photoImg} />
              </View>
            ))}
            {[0, 1].map((i) => (
              <Pressable key={`empty-${i}`} style={[styles.photo, styles.photoEmpty]}>
                <Plus size={20} weight="bold" color={Colors.text.tertiary} />
              </Pressable>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.label}>후기 내용</Text>
          <TextInput
            multiline
            value={content}
            onChangeText={setContent}
            placeholder="오늘의 등산은 어떠셨나요? 경치, 코스 난이도, 꿀팁을 남겨보세요..."
            placeholderTextColor={Colors.text.placeholder}
            style={[styles.textarea, webNoOutline]}
            textAlignVertical="top"
          />
        </View>

        <Pressable style={styles.photoShortcut}>
          <Camera size={18} weight="fill" color={Colors.interactive.primary} />
          <Text style={styles.photoShortcutText}>카메라로 촬영하기</Text>
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onPress={() =>
            onSubmit?.({ access, facilities, scenery, content })
          }
        >
          업로드
        </Button>
      </View>
    </View>
  );
}

function RatingRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <View style={styles.ratingRow}>
      <Text style={styles.ratingLabel}>{label}</Text>
      <StarRating value={value} size="md" onChange={onChange} />
    </View>
  );
}

const webNoOutline = Platform.select({
  web: { outlineWidth: 0, outlineStyle: 'none' as const },
  default: {},
}) as any;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary },
  save: {
    ...Typography.label,
    color: Colors.interactive.primary,
  },
  scroll: {
    padding: Spacing[5],
    gap: Spacing[6],
  },
  subtitle: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontFamily: 'Menlo',
  },
  ratingBlock: {
    gap: Spacing[4],
    paddingVertical: Spacing[2],
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    paddingTop: Spacing[4],
    paddingBottom: Spacing[4],
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingLabel: {
    ...Typography.body,
    color: Colors.text.primary,
    fontWeight: '600',
  },
  label: {
    ...Typography.label,
    color: Colors.text.secondary,
    marginBottom: Spacing[2],
  },
  photoGrid: {
    flexDirection: 'row',
    gap: Spacing[2],
  },
  photo: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Primitive.gray[100],
  },
  photoImg: { width: '100%', height: '100%' },
  photoEmpty: {
    borderWidth: 1,
    borderColor: Primitive.gray[200],
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background.secondary,
  },
  textarea: {
    borderWidth: 1,
    borderColor: Colors.border.default,
    borderRadius: 12,
    padding: Spacing[4],
    minHeight: 120,
    ...Typography.body,
    color: Colors.text.primary,
  },
  photoShortcut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[2],
    padding: Spacing[3],
    borderRadius: 12,
    backgroundColor: Colors.interactive.weak,
  },
  photoShortcutText: {
    ...Typography.body,
    color: Colors.interactive.weakText,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[4],
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
});
