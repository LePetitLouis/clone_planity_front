import { ShopCardContainer, ShopCardAddress, ShopCardTitle, ShopCardImage, ShopCardContent } from "./ShopCardStyles";

import Button from "../../button/Button";
import { CiLocationOn } from "react-icons/ci";

import { IShop } from "../../../../index.d";

export interface ShopCardProps {
  shop: IShop
  onClick: (shop: IShop) => void
}

const ShopCard = ({ shop, onClick }: ShopCardProps) => {

  return (
    <ShopCardContainer onClick={() => onClick(shop)}>
      <ShopCardImage src={shop.image} />
      <ShopCardContent>
        <ShopCardTitle>{shop.name}</ShopCardTitle>
        <div style={{ 'display': 'flex', 'gap': '5px', 'alignItems': 'center' }}>
          <CiLocationOn size={15} />
          <ShopCardAddress>{shop.address}, {shop.postalCode} {shop.city}</ShopCardAddress>
        </div>
        <Button onClick={() => null} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Prendre RDV</Button>
      </ShopCardContent>
    </ShopCardContainer>
  );
};

export default ShopCard;