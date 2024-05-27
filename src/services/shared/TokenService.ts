import { REACT_API_URL } from "../../urlConfig";
import AuthService from "../AuthService";
import { jwtDecode } from "jwt-decode";

// const authService = new AuthService();

class TokenService {
  static baseUrl = REACT_API_URL;


  static getToken() {
    const token = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("ucm_token="));
    return token ? token.split("=")[1] : null;
  }

  static setToken(token: string) {
    const expirationDate = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes in milliseconds
    const formattedExpirationDate = expirationDate.toUTCString();
    document.cookie = `ucm_token=${token}; expires=${formattedExpirationDate}; path=/;`;
  }

  static deleteToken() {
    document.cookie = "ucm_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  static decodeToken() {
    const token = TokenService.getToken();
    if (!token) return;
    try {
      const decoded: any = jwtDecode(token);
      if (decoded) {
        return decoded;
      } else {
        console.error("Failed to decode token");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  // static async refreshToken() {
  //   const username = "vikas@ucmo.com";
  //   const password = "Hello";
  //   try {
  //     const resp = await authService.login(username, password);
  //     const newToken = resp.access_token;
  //     this.setToken(newToken);
  //     return newToken;
  //   } catch (error) {
  //     console.error("Error refreshing token:", error);
  //     throw error;
  //   }
  // }
}

export default TokenService;
