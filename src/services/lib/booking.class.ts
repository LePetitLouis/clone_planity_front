import { axios } from "./axios.class";

class Booking {
    public async getBookingByUser() {
        try {
            const { data } = await axios.get(`/reservation`);
            return data;
        } catch {
            return null;
        }
    }

    // public async getBookingByShop(id: string) {
    //     try {
    //         const { data } = await axios.get(`/bookings/shop/${id}`);
    //         return data;
    //     } catch {
    //         return null;
    //     }
    // }

    public async createBooking(booking: any) {
        try {
            const { data } = await axios.post(`/reservation`, booking);
            return data;
        } catch {
            return null;
        }
    }

    // public async updateBooking(booking: any) {
    //     try {
    //         const { data } = await axios.patch(`/bookings/${booking._id}`, booking);
    //         return data;
    //     } catch {
    //         return null;
    //     }
    // }

    // public async deleteBooking(id: string) {
    //     try {
    //         const { data } = await axios.delete(`/bookings/${id}`);
    //         return data;
    //     } catch {
    //         return null;
    //     }
    // }
}

export const booking = new Booking();