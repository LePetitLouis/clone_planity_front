import { ShopCardContainer, ShopCardAddress, ShopCardTitle, ShopCardImage, ShopCardContent } from "./ShopCardStyles";

import Button from "../../button/Button";
import { CiLocationOn } from "react-icons/ci";

import { IShop } from "../../../../index.d";
import { useNavigate } from "react-router-dom";

export interface ShopCardProps {
  shop: IShop
}

const ShopCard = ({ shop }: ShopCardProps) => {
  const navigate = useNavigate();

  const handleShowShop = () => {
    console.log('show shop', shop.id);

    navigate(`/details-shop/${shop.id}`);
  }

  return (
    <ShopCardContainer onClick={handleShowShop}>
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