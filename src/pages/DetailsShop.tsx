import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IShop } from "../index.d";

import Details from "../components/details/Details";

const DetailsShop = () => {
    const { id } = useParams<{ id: string }>();
    const [shop, setShop] = useState<IShop | null>(null);

    useEffect(() => {
        console.log("shop id ", id);

        const fetchShop = async () => {
            // const data = {
            //     id: 1,
            //     name: "Salon de coiffure",
            //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
            //     address: "133 rue du Ranelagh",
            //     phone: "0123456789",
            //     email: "test@gmail.com",
            //     image: "https://source.unsplash.com/1600x900/?salon",
            //     lng: 2.267000,
            //     lat: 48.856310,
            //     categories: ["Coiffure", "Esthétique"],
            //     openingHours: [
            //       {
            //           "day": 1,
            //           "opening": "09:00",
            //           "closing": "18:00"
            //       },
            //       {
            //           "day": 2,
            //           "opening": "09:00",
            //           "closing": "18:00"
            //       },
            //       {
            //           "day": 3,
            //           "opening": "09:00",
            //           "closing": "18:00"
            //       },
            //       {
            //           "day": 4,
            //           "opening": "09:00",
            //           "closing": "18:00"
            //       },
            //       {
            //           "day": 5,
            //           "opening": "09:00",
            //           "closing": "18:00"
            //       },
            //       { 
            //           "day": 6,
            //           "opening": "",
            //           "closing": ""
            //       },
            //       {
            //           "day": 0,
            //           "opening": "",
            //           "closing": ""
            //       }
            //     ],
            //     collaborators: [
            //         {
            //             id: 1,
            //             name: "Bob",
            //         },
            //         {
            //             id: 2,
            //             name: "Roger",
            //         },
            //         {
            //             id: 3,
            //             name: "Jean",
            //         },
            //     ],
            //     benefits: [{
            //         title: "Balayages et Décolorations",
            //         benefits: [
            //             {
            //                 id: 1,
            //                 title: "Mèche ou Balayage - Cheveux Courts",
            //                 time: "30 min",
            //                 price: "50 €",
            //             },
            //             {
            //                 id: 2,
            //                 title: "Mèche ou Balayage - Cheveux Mi-Longs",
            //                 time: "45 min",
            //                 price: "60 €",
            //             },
            //             {
            //                 id: 3,
            //                 title: "Mèche ou Balayage - Cheveux Longs",
            //                 time: "1h",
            //                 price: "70 €",
            //             },
            //             {
            //                 id: 4,
            //                 title: "Mèche ou Balayage - Cheveux Super Longs",
            //                 time: "1h30",
            //                 price: "80 €",
            //             },
            //         ],
            //     }, {
            //         title: "Hommes",
            //         description: "Un diagnostique personnalisé sera réalisé à votre arrivée.",
            //         benefits: [
            //             {
            //                 id: 5,
            //                 title: "Shampoing  + Massage + Brushing",
            //                 time: "30 min",
            //                 price: "30 €",
            //             },
            //             {
            //                 id: 6,
            //                 title: "Shampoing Massage, Coupe, Coiffage",
            //                 description: "UNIQUEMENT RESERVABLE LES MARDIS ET MERCREDIS",
            //                 time: "30 min",
            //                 price: "30 €",
            //             },
            //             {
            //                 id: 7,
            //                 title: "Coupe Ado - 16 ans",
            //                 time: "30 min",
            //                 price: "30 €",
            //             },
            //             {
            //                 id: 8,
            //                 title: "Barbe",
            //                 time: "30 min",
            //                 price: "30 €",
            //             },
            //         ],
            //     }],
            //     city: "Paris",
            //     postalCode: "75000",
            // };
            // setShop(data);
        };

        fetchShop();
    }, [id]);

    return (
        <>
            {shop && <Details shop={shop} />}
        </>
    );
};

export default DetailsShop;