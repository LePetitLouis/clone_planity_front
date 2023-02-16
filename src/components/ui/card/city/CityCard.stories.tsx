import { ComponentStory, ComponentMeta } from '@storybook/react';

import CityCard from './CityCard';

export default {
    title: 'UI/Card',
    component: CityCard,
    argTypes: {
        city: { control: 'text' },
        image: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        onClick: { action: 'clicked' },
    },
} as ComponentMeta<typeof CityCard>;

const Template: ComponentStory<typeof CityCard> = (args) => <CityCard {...args} />;

export const City = Template.bind({});

City.args = {
    city: 'Coiffeur à Paris',
    image: 'https://source.unsplash.com/390x200/?Paris',
    title: 'Découvrez nos',
    description: 'Paris, la ville lumière',
    onClick: () => { },
};