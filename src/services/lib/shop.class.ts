import { axios } from "./axios.class";

class Shop {
    public async getShopByCoordinates(kind: string, lat: number, lng: number) {
        try {
            const { data } = await axios.get(`/shops/${kind}/${lat}/${lng}`);
            return data;
        } catch {
            return null;
        }
    }

    public async getDetailsShop(id: string) {
        try {
            const { data } = await axios.get(`/shops/details/${id}`);
            return data;
        } catch {
            return null;
        }
    }
}

export const shop = new Shop();