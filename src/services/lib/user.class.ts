import { axios } from "./axios.class";

class User {

    public async verifyPassword(password: string) {
        try {
            const { data } = await axios.post("/user/verify-password", { password });
            return data;
        } catch {
            return false;
        }
    }

    public async updatePassword(password: string) {
        try {
            const { data } = await axios.patch("/user/update-password", { password });
            return data;
        } catch {
            return false;
        }
    }

    public async updateProfile(firstName: string, lastName: string, phone: string, email: string) {
        const { data } = await axios.patch("/user/update-profile", { firstName, lastName, phone, email });
        return data;
    }
}

export const user = new User()
