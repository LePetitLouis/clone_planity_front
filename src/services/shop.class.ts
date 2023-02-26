import http from "./http-common";

import { IShop } from "../index.d";

export class Shop {

    // Get all shops by kind and city
    async getShopByKindAndCity(kind: string, city: string) {
        return await http.get(`/get-shop/${kind}/${city}`);
    }

    // Get all shops by user id
    async getShopByUserId(userId: string) {
        return await http.get(`/get-shop-by-user/${userId}`);
    }

    // Add new shop
    async addShop(shop: IShop) {
        return await http.post("/new-shop", shop);
    }

    // Update shop
    async updateShop(shop: IShop) {
        return await http.put(`/shop/${shop.id}`, shop);
    }

    // Delete shop
    async deleteShop(shopId: string) {
        return await http.delete(`/shop/${shopId}`);
    }
}