import type { Meta, StoryObj } from '@storybook/react';
import { CaretRight, Mountains, Star } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';

import { ListItem } from './ListItem';
import { Colors } from '../../constants';

const meta: Meta<typeof ListItem> = {
  title: 'Composite/ListItem',
  component: ListItem,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <View style={{ width: 375, backgroundColor: Colors.background.primary }}>
        <Story />
      </View>
    ),
  ],
  args: {
    title: '북한산',
    subtitle: '서울특별시 강북구 · 836m',
    size: 'default',
    divider: true,
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Playground: Story = {};

export const WithIcon: Story = {
  args: {
    title: '관악산',
    subtitle: '서울 관악구 · 632m',
    leftIcon: <Mountains size={24} weight="fill" color={Colors.icon.muted} />,
  },
};

export const WithRightAction: Story = {
  args: {
    title: '북한산',
    subtitle: '서울 강북구 · 836m',
    leftIcon: <Mountains size={24} weight="fill" color={Colors.icon.muted} />,
    rightText: '3회 완등',
    rightIcon: <CaretRight size={16} weight="fill" color={Colors.icon.muted} />,
    onPress: () => {},
  },
};

export const MountainList: Story = {
  name: '실전: 산 목록',
  render: () => (
    <View>
      {[
        { t: '북한산', s: '서울 강북구 · 836m', r: '3회' },
        { t: '관악산', s: '서울 관악구 · 632m', r: '1회' },
        { t: '도봉산', s: '서울 도봉구 · 740m', r: '—' },
        { t: '수락산', s: '서울 노원구 · 638m', r: '2회' },
      ].map((item, i, arr) => (
        <ListItem
          key={item.t}
          title={item.t}
          subtitle={item.s}
          leftIcon={<Mountains size={24} weight="fill" color={Colors.icon.muted} />}
          rightText={item.r}
          rightIcon={<CaretRight size={16} weight="fill" color={Colors.icon.muted} />}
          divider={i < arr.length - 1}
          onPress={() => {}}
        />
      ))}
    </View>
  ),
};

export const ReviewList: Story = {
  name: '실전: 내 리뷰 리스트',
  render: () => (
    <View>
      <ListItem
        title="북한산 백운대"
        subtitle="2026-04-15 · ⭐⭐⭐⭐⭐"
        thumbnailUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200"
        rightIcon={<Star size={16} weight="fill" color={Colors.status.warning} />}
        divider
        onPress={() => {}}
      />
      <ListItem
        title="관악산 연주대"
        subtitle="2026-04-08 · ⭐⭐⭐⭐"
        thumbnailUrl="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=200"
        rightIcon={<Star size={16} weight="fill" color={Colors.status.warning} />}
        onPress={() => {}}
      />
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View>
      <ListItem
        title="Compact"
        subtitle="py=8"
        size="compact"
        leftIcon={<Mountains size={24} weight="fill" color={Colors.icon.muted} />}
        divider
      />
      <ListItem
        title="Default"
        subtitle="py=12 (기본)"
        size="default"
        leftIcon={<Mountains size={24} weight="fill" color={Colors.icon.muted} />}
        divider
      />
      <ListItem
        title="Large"
        subtitle="py=16"
        size="large"
        leftIcon={<Mountains size={24} weight="fill" color={Colors.icon.muted} />}
      />
    </View>
  ),
};
