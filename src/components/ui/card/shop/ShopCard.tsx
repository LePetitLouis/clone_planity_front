import { ShopCardContainer, ShopCardAddress, ShopCardTitle, ShopCardImage, ShopCardContent } from "./ShopCardStyles";

import Button from "../../button/Button";
import { CiLocationOn } from "react-icons/ci";

import { IShop } from "../../../../index.d";
import { useEffect, useState } from "react";

export interface ShopCardProps {
  shop: IShop
  onClick: (shop: IShop) => void
}

const ShopCard = ({ shop, onClick }: ShopCardProps) => {
  const [shopState, setShopState] = useState<IShop>(shop);

  useEffect(() => {
    console.log(shop)
    setShopState(shop);
  }, [shop])

  return (
    <ShopCardContainer onClick={() => onClick(shop)}>
      <ShopCardImage src="https://source.unsplash.com/1600x900/?salon" />
      <ShopCardContent>
        <ShopCardTitle>{shopState.name}</ShopCardTitle>
        <div style={{ 'display': 'flex', 'gap': '5px', 'alignItems': 'center' }}>
          <CiLocationOn size={15} />
          <ShopCardAddress>{shopState.address}</ShopCardAddress>
        </div>
        <Button onClick={() => null} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Prendre RDV</Button>
      </ShopCardContent>
    </ShopCardContainer>
  );
};

export default ShopCard;