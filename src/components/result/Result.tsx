import { ResultContainer, ResultContent, ResultMap } from "./ResultStyles";

import ListShop from "../ui/list/shop/ListShop";
import Map, { Marker } from 'react-map-gl';

import { IShop } from "../../index.d"; 

interface ResultProps {
  shops: IShop[];
}

const Result = ({ shops }: ResultProps) => {
  return (
    <ResultContainer>
      <ResultContent>
        {shops.length ? <ListShop shops={shops} /> : <p>Aucun salon à proximité</p>}
      </ResultContent>

      <ResultMap>
        <Map
          initialViewState={{
            longitude: 2.333333,
            latitude: 48.866667,
            zoom: 6,
          }}
          mapboxAccessToken={process.env.REACT_APP_API_KEY_MAPBOX}
          style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {shops.map((shop, index) => (
            <Marker key={index} longitude={shop.long} latitude={shop.lat} anchor="bottom" />
          ))}
        </Map>
      </ResultMap>
    </ResultContainer>
  );
};

export default Result;