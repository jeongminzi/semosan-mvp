import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Chip } from './Chip';
import { Spacing } from '../../constants';

const meta: Meta<typeof Chip> = {
  title: 'Primitives/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'selected', 'weak', 'outline'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { children: '전체', variant: 'default', selected: false },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: Spacing[2], flexWrap: 'wrap' }}>
      <Chip variant="default">기본</Chip>
      <Chip variant="selected">선택됨</Chip>
      <Chip variant="weak">강조</Chip>
      <Chip variant="outline">외곽선</Chip>
    </View>
  ),
};

export const DifficultyFilter: Story = {
  name: '실전: 난이도 필터 (선택 상태 토글)',
  render: () => {
    const [active, setActive] = useState('전체');
    const options = ['전체', '초급', '중급', '고급'];
    return (
      <View style={{ flexDirection: 'row', gap: Spacing[2] }}>
        {options.map((opt) => (
          <Chip
            key={opt}
            selected={active === opt}
            onPress={() => setActive(opt)}
          >
            {opt}
          </Chip>
        ))}
      </View>
    );
  },
};

export const RegionFilter: Story = {
  name: '실전: 지역 필터 (가로 스크롤)',
  render: () => (
    <View style={{ flexDirection: 'row', gap: Spacing[2], flexWrap: 'wrap', maxWidth: 343 }}>
      <Chip selected>전체</Chip>
      <Chip>서울</Chip>
      <Chip>경기</Chip>
      <Chip>강원</Chip>
      <Chip>충청</Chip>
      <Chip>전라</Chip>
      <Chip>경상</Chip>
      <Chip>제주</Chip>
    </View>
  ),
};
