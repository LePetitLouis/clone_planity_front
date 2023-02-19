import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

import { RouterProvider } from "react-router-dom";
import router from "../../../../router/router";

import ShopCard from './ShopCard';

export default {
    title: 'UI/Card',
    component: ShopCard,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <RouterProvider router={router} />
                <Story />
            </Provider>
        ),
    ],
    argTypes: {
        shop: { control: 'text' },
    },
} as ComponentMeta<typeof ShopCard>;

const Template: ComponentStory<typeof ShopCard> = (args) => <ShopCard {...args} />;

export const Shop = Template.bind({});

Shop.args = {
    shop: {
        "id": 1,
        "name": "Salon de coiffure",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
        "address": "133 rue du Ranelagh",
        "phone": "0123456789",
        "email": "test@gmail.com",
        "image": "https://source.unsplash.com/1600x900/?salon",
        "lng": 2.267000,
        "lat": 48.856310,
        "categories": ["Coiffure", "Esthétique"],
        "openingHours": [
            {
                "day": 1,
                "opening": "09:00",
                "closing": "18:00"
            },
            {
                "day": 2,
                "opening": "09:00",
                "closing": "18:00"
            },
            {
                "day": 3,
                "opening": "09:00",
                "closing": "18:00"
            },
            {
                "day": 4,
                "opening": "09:00",
                "closing": "18:00"
            },
            {
                "day": 5,
                "opening": "09:00",
                "closing": "18:00"
            },
            { 
                "day": 6,
                "opening": "09:00",
                "closing": "18:00"
            },
            {
                "day": 0,
                "opening": "09:00",
                "closing": "18:00"
            }
        ],
        "city": "Paris",
        "postalCode": "75000",
    },
};
