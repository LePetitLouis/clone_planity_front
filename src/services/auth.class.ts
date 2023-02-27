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

    // Verify password
    async verifyPassword(password: string) {
        return await httpCommon.post("/verify-password", { password });
    }

    // Update password
    async updatePassword(password: string) {
        return await httpCommon.patch("/update-password", { password });
    }

    // Update profile
    async updateProfile(firstName: string, lastName: string, phone: string, email: string) {
        return await httpCommon.patch("/update-profile", { firstName, lastName, phone, email });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Auth();
