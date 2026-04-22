import type { Meta, StoryObj } from '@storybook/react';
import { MapPin, Mountains, Play, ArrowRight, Heart } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';

import { Button } from './Button';
import { Colors, Spacing } from '../../constants';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SEMOSAN 기본 버튼. 5가지 variant × 3가지 size. Phosphor Icon (fill weight) 좌/우 아이콘 지원.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: '등산 시작',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// -----------------------------------------------------------------------------
// 1. Playground — 컨트롤로 모든 props 조작
// -----------------------------------------------------------------------------

export const Playground: Story = {};

// -----------------------------------------------------------------------------
// 2. Variants
// -----------------------------------------------------------------------------

export const Primary: Story = {
  args: { variant: 'primary', children: '등산 시작' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: '취소' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: '건너뛰기' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: '둘러보기' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: '기록 삭제' },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: Spacing[3], alignItems: 'flex-start' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </View>
  ),
};

// -----------------------------------------------------------------------------
// 3. Sizes
// -----------------------------------------------------------------------------

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: Spacing[3], alignItems: 'flex-start' }}>
      <Button size="sm">Small (32)</Button>
      <Button size="md">Medium (40)</Button>
      <Button size="lg">Large (48)</Button>
    </View>
  ),
};

// -----------------------------------------------------------------------------
// 4. With Icons (Phosphor Fill)
// -----------------------------------------------------------------------------

export const WithLeftIcon: Story = {
  args: {
    children: '등산 시작',
    leftIcon: <Play size={18} weight="fill" color={Colors.text.inverse} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'ghost',
    children: '자세히 보기',
    rightIcon: (
      <ArrowRight size={16} weight="fill" color={Colors.text.primary} />
    ),
  },
};

export const IconShowcase: Story = {
  render: () => (
    <View style={{ gap: Spacing[3], alignItems: 'flex-start' }}>
      <Button
        variant="primary"
        leftIcon={<Play size={18} weight="fill" color={Colors.text.inverse} />}
      >
        등산 시작
      </Button>
      <Button
        variant="outline"
        leftIcon={
          <Mountains size={16} weight="fill" color={Colors.interactive.primary} />
        }
      >
        산 찾기
      </Button>
      <Button
        variant="ghost"
        leftIcon={<MapPin size={16} weight="fill" color={Colors.text.primary} />}
      >
        현재 위치
      </Button>
      <Button
        variant="secondary"
        rightIcon={<Heart size={16} weight="fill" color={Colors.text.primary} />}
      >
        즐겨찾기
      </Button>
    </View>
  ),
};

// -----------------------------------------------------------------------------
// 5. States
// -----------------------------------------------------------------------------

export const Disabled: Story = {
  args: { disabled: true, children: '비활성화' },
};

export const Loading: Story = {
  args: { loading: true, children: '로딩중' },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: '전체 너비 버튼' },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <View style={{ width: 320 }}>
        <Story />
      </View>
    ),
  ],
};

// -----------------------------------------------------------------------------
// 6. Real Scenarios (브리프 기반 실제 사용 예)
// -----------------------------------------------------------------------------

export const TrackingStart: Story = {
  name: '실전: 트래킹 시작 화면 CTA',
  render: () => (
    <View style={{ width: 343, gap: Spacing[2] }}>
      <Button
        variant="primary"
        size="lg"
        fullWidth
        leftIcon={<Play size={20} weight="fill" color={Colors.text.inverse} />}
      >
        등산 시작
      </Button>
      <Button variant="ghost" size="md" fullWidth>
        둘러보기
      </Button>
    </View>
  ),
};

export const Onboarding: Story = {
  name: '실전: 온보딩 CTA',
  render: () => (
    <View style={{ width: 343, gap: Spacing[2] }}>
      <Button variant="primary" size="lg" fullWidth>
        연동하기
      </Button>
      <Button variant="ghost" size="md" fullWidth>
        건너뛰기
      </Button>
    </View>
  ),
};
