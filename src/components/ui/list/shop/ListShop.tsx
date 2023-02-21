import { ListShopContainer, ListShopHeader, ListShopTitle, ListShopSubTitle } from "./ListShopStyles";
import ShopCard from "../../card/shop/ShopCard";

import { IShop } from "../../../../index.d";
import { useAppSelector, useAppDispatch } from "../../../../store/hook";
import { selectSearch } from "../../../../store/slice/searchSlice";
import { useNavigate } from "react-router-dom";
import { setShop } from "../../../../store/slice/bookingSlice";

interface ListShopProps {
  shops: IShop[];
}

const ListShop = ({ shops }: ListShopProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const search = useAppSelector(selectSearch)

  const handleSelectedShop = (shop: IShop) => {
    dispatch(setShop(shop))
    navigate(`/details-shop/${shop.id}`);
  }

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
            onClick={(shop) => handleSelectedShop(shop)}
          />
        ))}
      </ListShopContainer>
    </>
  );
};

export default ListShop;