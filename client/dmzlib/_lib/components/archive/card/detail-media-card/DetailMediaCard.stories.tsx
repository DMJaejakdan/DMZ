import type { Meta, StoryObj } from '@storybook/react';

import DetailMediaCard from './DetailMediaCard';

const meta = {
  title: 'Archive/Card/DetailMediaCard',
  component: DetailMediaCard,
  argTypes: {},
} satisfies Meta<typeof DetailMediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mediaImg: '',
    title: '제목',
  },
};
