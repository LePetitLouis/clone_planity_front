import axios from "axios";

class Geocoding {
    
    public async getCoordinates(address: string) {
        try {
            const { data } = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGV0aXRsb3VpcyIsImEiOiJjbDNlOTAyMmUwZmRvM2ZsNXJtcjV4OTBkIn0.X9rxSrW6cEvzHSpYBT6VHA`
            );
            return data.features[0].center;
        } catch {
            return null;
        }
    }

    public async getAddress(lat: number, lng: number): Promise<string> {
        try {
            const { data } = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoicGV0aXRsb3VpcyIsImEiOiJjbDNlOTAyMmUwZmRvM2ZsNXJtcjV4OTBkIn0.X9rxSrW6cEvzHSpYBT6VHA`
            );
            return data.features[0].place_name;
        } catch {
            return "";
        }
    }
}

export const geocoding = new Geocoding();