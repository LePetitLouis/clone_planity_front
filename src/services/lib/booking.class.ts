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

    public async GetExistingReservationForPeriod(id: number) {
        try {
            const { data } = await axios.get(`/reservation/${id}`);
            if (data === null) return [];
            return data;
        } catch {
            return false;
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

    public async createBooking(id_benefit: number, id_shop: number, date: string, time: string, comment?: string) {
        try {
            const { data } = await axios.post(`/reservation`, { id_benefit, id_shop, date, time, comment });
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

    public async deleteBooking(id: number) {
        try {
            const { data } = await axios.delete(`/reservation/${id}`);
            return data;
        } catch {
            return null;
        }
    }
}

export const booking = new Booking();