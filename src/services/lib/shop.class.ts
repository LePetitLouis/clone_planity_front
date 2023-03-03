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

    public async getShopByUser(){
        try{
            const {data} = await axios.get(`/get-shop-by-user`);
            if(data === null){
                return [];
            }
            return data
        } catch {
            return null
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

    public async registerShop(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        password: string,
        name: string,
        address: string,
        city: string,
        country: string,
        zip_code: string,
        description: string,
        id_kind: any[],
    ) {
        try {
        const { data } = await axios.post(`/new-shop`, {
            firstName,
            lastName,
            phone,
            email,
            password,
            name,
            address,
            city,
            country,
            zip_code,
            description,
            id_kind
        });
            return data
        } catch {
            return null;
        }
    }
}

export const shop = new Shop();