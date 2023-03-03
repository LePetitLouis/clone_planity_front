import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button/Button';
import { API } from '../services';
import { HomeTraderCardText, HomeTraderContainer, HomeTraderContainerCard, HomeTraderMain } from './HomeTraderStyles';

const HomeTrader = () => {

  const navigate = useNavigate();

  const redirectShopDetails = (id:number) => {
    navigate("/details-shop/"+id)
  }

  const [shopID, setShopID] = useState<[]>([])

  useEffect(() => {
    const fetchShopID = async () => {
      const data = await API.shop.getShopByUser();
      if (data) setShopID(data);
      else setShopID([]);
    }

    fetchShopID();
  }, [])

  console.log(shopID)

  return (
    <HomeTraderMain>
      <HomeTraderContainer>
        {shopID.map((item:any, key) => (
          <HomeTraderContainerCard>
            <HomeTraderCardText>{item.name}</HomeTraderCardText>
            <Button 
                color="var(--white)" 
                backgroundColor="var(--grey-900)" 
                borderColor="var(--white)" 
                height="48px" 
                rounded 
                onClick={() => redirectShopDetails(item.id)}
                >
                Créer
            </Button>
          </HomeTraderContainerCard>
        ))}
      </HomeTraderContainer>
    </HomeTraderMain>
  );
};

export default HomeTrader;