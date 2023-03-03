import { axios } from "./axios.class";

class Shop {
    public async getShopByCoordinates(kind: string, lat: number, lng: number) {
        try {
            const { data } = await axios.get(`/shops/nearby/${lng}/${lat}/${kind}`);
            if (data === null) {
                return [];
            }
            return data;
        } catch {
            return null;
        }
    }

    public async getDetailsShop(id: number) {
        try {
            const { data } = await axios.get(`/shop/${id}`);
            return data;
        } catch {
            return null;
        }
    }
}

export const shop = new Shop();