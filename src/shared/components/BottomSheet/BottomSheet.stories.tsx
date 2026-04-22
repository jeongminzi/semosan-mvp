import type { Meta, StoryObj } from '@storybook/react';
import { MapPin, Navigation, Play } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { BottomSheet } from './BottomSheet';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Colors, Spacing, Typography } from '../../constants';

const meta: Meta<typeof BottomSheet> = {
  title: 'Composite/BottomSheet',
  component: BottomSheet,
  parameters: { layout: 'centered' },
  args: { visible: false },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <View>
        <Button onPress={() => setOpen(true)}>시트 열기</Button>
        <BottomSheet
          {...args}
          visible={open}
          onClose={() => setOpen(false)}
          title="옵션 선택"
        >
          <View style={{ gap: Spacing[3] }}>
            <Text style={Typography.body}>시트 콘텐츠 영역</Text>
            <Button fullWidth onPress={() => setOpen(false)}>
              확인
            </Button>
          </View>
        </BottomSheet>
      </View>
    );
  },
};

export const MountainInfo: Story = {
  name: '실전: 산 정보 모달 (지도 핀 클릭)',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <View>
        <Button onPress={() => setOpen(true)}>지도 핀 클릭</Button>
        <BottomSheet visible={open} onClose={() => setOpen(false)}>
          <View style={{ gap: Spacing[4] }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing[3] }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 12,
                  backgroundColor: Colors.background.tertiary,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={Typography.h3}>북한산</Text>
                <Text style={[Typography.bodySm, { color: Colors.text.secondary }]}>
                  서울 강북구 · 836m
                </Text>
              </View>
              <Badge variant="primary" pill>3회 완등</Badge>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {[
                { n: '3', l: '등산 횟수' },
                { n: '6.5h', l: '누적 시간' },
                { n: '12.5km', l: '누적 거리' },
              ].map((s) => (
                <View key={s.l} style={{ alignItems: 'center', gap: 4 }}>
                  <Text style={Typography.h3}>{s.n}</Text>
                  <Text style={[Typography.caption, { color: Colors.text.tertiary }]}>
                    {s.l}
                  </Text>
                </View>
              ))}
            </View>

            <Button variant="primary" size="lg" fullWidth>
              등반 기록 더보기
            </Button>
          </View>
        </BottomSheet>
      </View>
    );
  },
};

export const RouteOptions: Story = {
  name: '실전: 코스 옵션 액션 시트',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <View>
        <Button onPress={() => setOpen(true)}>코스 옵션</Button>
        <BottomSheet visible={open} onClose={() => setOpen(false)} title="코스 시작">
          <View style={{ gap: Spacing[2] }}>
            {[
              { icon: <MapPin size={20} weight="fill" color={Colors.icon.default} />, label: '현재 위치부터' },
              { icon: <Navigation size={20} weight="fill" color={Colors.icon.default} />, label: '입구로 안내' },
              { icon: <Play size={20} weight="fill" color={Colors.icon.default} />, label: '바로 기록 시작' },
            ].map((item) => (
              <View
                key={item.label}
                style={{
                  height: 56,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Spacing[3],
                  paddingHorizontal: Spacing[2],
                }}
              >
                {item.icon}
                <Text style={Typography.body}>{item.label}</Text>
              </View>
            ))}
            <Button variant="weak" fullWidth onPress={() => setOpen(false)}>
              취소
            </Button>
          </View>
        </BottomSheet>
      </View>
    );
  },
};
