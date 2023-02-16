import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

import { RouterProvider } from "react-router-dom";
import router from "../../../../router/router";

import ListCity from './ListCity';

export default {
    title: 'UI/List',
    component: ListCity,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <RouterProvider router={router} />
                <Story />
            </Provider>
        ),
    ],
    argTypes: {
        cities: { control: 'text' },
        category: { control: 'text' },
    },
} as ComponentMeta<typeof ListCity>;

const Template: ComponentStory<typeof ListCity> = (args) => <ListCity {...args} />;

export const City = Template.bind({});

City.args = {
    cities: ["Paris", "Lyon", "Marseille"],
    category: "Coiffeur",
};
