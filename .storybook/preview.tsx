import type { Preview } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'gray-50', value: '#F8FAFB' },
        { name: 'gray-100', value: '#F1F4F6' },
        { name: 'dark', value: '#111827' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Design Tokens',
          ['Colors', 'Typography', 'Spacing', 'Shadows'],
          'Primitives',
          ['Button', 'Badge', 'Chip', 'Input'],
          'Composite',
          ['Card', 'ListItem', 'SearchBar', 'Modal', 'BottomSheet'],
          'Patterns',
          'Screens',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: 'transparent' }}>
        <Story />
      </View>
    ),
  ],
};

export default preview;
