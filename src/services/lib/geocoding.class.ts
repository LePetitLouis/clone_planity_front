import axios from "axios";
import { env } from "../../config/env";

class Geocoding {
    
    public async getCoordinates(address: string) {
        try {
            const { data } = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${env.REACT_APP_API_KEY_MAPBOX}`
            );
            return data.features[0].center;
        } catch {
            return null;
        }
        
        // const response = await axios.get(
        //     `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?proximity=ip&access_token=${env.REACT_APP_API_KEY_MAPBOX}`
        // );
        // const data = response.data;
        // if (!data || data.status === "ZERO_RESULTS") {
        // throw new Error("Could not find location for the specified address.");
        // }
        // const coordinates = data.results[0].geometry.location;
        // return coordinates;
    }
}

export const geocoding = new Geocoding();