import { ListShopContainer, ListShopHeader, ListShopTitle, ListShopSubTitle } from "./ListShopStyles";
import ShopCard from "../../card/shop/ShopCard";

import { IShop } from "../../../../index.d";
import { useAppSelector } from "../../../../store/hook";
import { selectSearch } from "../../../../store/searchSlice";

interface ListShopProps {
  shops: IShop[];
}

const ListShop = ({ shops }: ListShopProps) => {
  const search = useAppSelector(selectSearch)

  return (
    <>
      <ListShopHeader>
        <ListShopTitle>Sélectionnez un salon</ListShopTitle>
        <ListShopSubTitle>Les meilleurs salons et instituts aux alentours de {search.place} : Réservation en ligne</ListShopSubTitle>
      </ListShopHeader>
      <ListShopContainer>
        {shops.map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
          />
        ))}
      </ListShopContainer>
    </>
  );
};

export default ListShop;