import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './Footer';

export default {
  component: Footer,
  title: 'common/Footer',
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
