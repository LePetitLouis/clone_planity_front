import { ResultContainer, ResultContent, ResultMap } from "./ResultStyles";

import ListShop from "../ui/list/shop/ListShop";
import Map, { Marker } from 'react-map-gl';

import { IShop } from "../../index.d";

import { env } from "../../config/env";  

interface ResultProps {
  shops: IShop[];
}

const Result = ({ shops }: ResultProps) => {
  return (
    <ResultContainer>
      <ResultContent>
        <ListShop shops={shops} />
      </ResultContent>

      <ResultMap>
        {/* <Map
          initialViewState={{
            longitude: 2.333333,
            latitude: 48.866667,
            zoom: 6,
          }}
          mapboxAccessToken={env.REACT_APP_API_KEY_MAPBOX}
          style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker longitude={2.567560} latitude={48.950570} anchor="bottom"></Marker>
          {shops.map((shop) => (
            <Marker longitude={shop.lng} latitude={shop.lat} anchor="bottom" />
          ))}
        </Map> */}
      </ResultMap>
    </ResultContainer>
  );
};

export default Result;