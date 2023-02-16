import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputText from './InputText';

export default {
    title: 'UI/Input',
    component: InputText,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        colorLabel: { control: 'color' },
        colorInput: { control: 'color' },
        border: { control: 'color' },
        type: { control: 'text' },
        placeholder: { control: 'text' },
        error: { control: 'text' },
        rounded: { control: 'boolean' },
        height: { control: 'text' },
        backgroundInputColor: { control: 'color' },
        onChange: { action: 'changed' },
    },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Text = Template.bind({});

Text.args = {
    label: 'Nom*',
    value: '',
    colorLabel: '#000000',
    colorInput: '#000000',
    border: '#000000',
    type: 'text',
    placeholder: 'Nom',
    error: '',
    rounded: true,
    height: '40px',
    backgroundInputColor: '#FFFFFF',
    onChange: () => { },
};