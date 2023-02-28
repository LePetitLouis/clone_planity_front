import { axios } from "./axios.class";

interface IDataUser {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
    token: string;
}

class Auth {
    private refreshToken: string|null = null;
    private accessToken: string|null = null;

    public async login(email: string, password: string) {
        try {
            const { data} =  await axios.post("/auth/login", { email, password });
            return this.processToken(data);
        } catch {
            return false;
        }
    }

    public async register(firstName: string, lastName: string, phone: string, email: string, password: string, role: string) {
        const { data } = await axios.post("/auth/register", { firstName, lastName, phone, email, password, role });
        return this.processToken(data);
    }

    public setRefreshToken(refreshToken: string) {
        this.refreshToken = refreshToken;
    }

    public setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
        axios.setAuthorization(accessToken);
    }

    // Set token
    private processToken (data: IDataUser) {
        axios.setAuthorization(data.token);
        // this.setRefreshToken(data.refreshToken);
        this.setAccessToken(data.token);
        return data;
    }
}

export const auth = new Auth()
