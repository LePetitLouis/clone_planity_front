import { useEffect, useState } from "react";

import Result from "../components/result/Result";

import { IShop } from "../index.d";

const Results = () => {
  const [shops, setShops] = useState<IShop[]>([]);

  useEffect(() => {
    const fetchShops = async () => {
      const data = [{
        id: 1,
        name: "Salon de coiffure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
        address: "133 rue du Ranelagh",
        phone: "0123456789",
        email: "test@gmail.com",
        image: "https://source.unsplash.com/1600x900/?salon",
        lng: 2.267000,
        lat: 48.856310,
        categories: ["Coiffure", "Esthétique"],
        openingHours: ["Lundi - Vendredi: 9h - 19h"],
        city: "Paris",
        postalCode: "75000",
      },
      {
        id: 2,
        name: "Super Salon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
        address: "1 rue de la paix",
        phone: "0623456789",
        email: "bob@gmail.com",
        image: "https://source.unsplash.com/1600x900/?salon",
        lng: 2.567560,
        lat: 48.950570,
        categories: ["Coiffure", "Esthétique"],
        openingHours: ["Lundi - Vendredi: 9h - 19h"],
        city: "Paris",
        postalCode: "75000",
      },
      {
        id: 3,
        name: "Hello Salon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
        address: "11 rue de la paix",
        phone: "0623456789",
        email: "bob@gmail.com",
        image: "https://source.unsplash.com/1600x900/?salon",
        lng: 3.567560,
        lat: 48.950570,
        categories: ["Coiffure", "Esthétique"],
        openingHours: ["Lundi - Vendredi: 9h - 19h"],
        city: "Paris",
        postalCode: "75000",
      }]
      setShops(data);
    }

    fetchShops();
  }, [])

  return (
    <>
      <Result shops={shops} />
    </>
  );
};

export default Results;