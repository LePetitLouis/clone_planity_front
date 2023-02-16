import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        color: { control: 'color' },
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        rounded: { control: 'boolean' },
        height: { control: 'text' },
        children: { control: 'text' },
        onClick: { action: 'clicked' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Generic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Generic.args = {
    children: 'Button',
    rounded: true,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    height: '40px',
    onClick: () => { },
};