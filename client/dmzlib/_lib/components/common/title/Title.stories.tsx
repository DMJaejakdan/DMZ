import type { Meta, StoryObj } from '@storybook/react';
import theme from '#/design/theme.css';
import Title from './Title';

const meta = {
  title: 'Common/Title',
  component: Title,
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { hn: 'h1', content: 'Title', color: 'white' },
};
