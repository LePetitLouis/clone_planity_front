import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputPhone from './InputPhone';

export default {
    title: 'UI/Input',
    component: InputPhone,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        placeholder: { control: 'text' },
        defaultCountry: { control: 'text' },
        error: { control: 'text' },
        onChange: { action: 'changed' },
    },
} as ComponentMeta<typeof InputPhone>;

const Template: ComponentStory<typeof InputPhone> = (args) => <InputPhone {...args} />;

export const Phone = Template.bind({});

Phone.args = {
    label: 'Téléphone portable*',
    value: '',
    placeholder: 'Téléphone portable',
    defaultCountry: 'FR',
    error: '',
    onChange: () => { },
};
