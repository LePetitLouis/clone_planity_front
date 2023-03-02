import { useEffect, useState } from "react";

import Result from "../components/result/Result";

import { IShop } from "../index.d";

import { useAppSelector } from "../store/hook";
import { selectSearch } from "../store/slice/searchSlice";

import { API } from "../services";

const Results = () => {
  const [shops, setShops] = useState<IShop[]>([]);

  const search = useAppSelector(selectSearch);

  useEffect(() => {
    const fetchShopsByCoords = async () => {
      const data = await API.geocoding.getCoordinates(search.place);

      const shops = await API.shop.getShopByCoordinates(search.category, data[1], data[0]);
      if (shops.length) {
        shops.map(async (shop: IShop) => {
          shop.address = await API.geocoding.getAddress(shop.lat, shop.long);
          return shop;
        });
        console.log(shops);
        setShops(shops);
      }
      else setShops([]);
    };

    fetchShopsByCoords();
  }, [search.place, search.category])

  return (
    <>
      <Result shops={shops} />
    </>
  );
};

export default Results;