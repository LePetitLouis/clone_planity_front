import httpCommon from "./http-common";

class Auth {
    // Login
    async login(email: string, password: string) {
        return await httpCommon.post("/login", { email, password });
    }

    // Logout
    async logout() {
        return await httpCommon.post("/logout");
    }

    // Register
    async register(firstName: string, lastName: string, phone: string, email: string, password: string) {
        return await httpCommon.post("/register", { firstName, lastName, phone, email, password });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Auth();
