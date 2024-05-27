import axios from "axios";
import TokenService from "./shared/TokenService";
import { REACT_API_URL } from "../urlConfig";

class AuthService {
  baseUrl=  REACT_API_URL;

  async login(username: string, password: string) {
    const payload = { username, password };

    try {
      const resp: any = await axios.post(`${this.baseUrl}/login`, payload);
      const newToken = resp.data.data;
      TokenService.setToken(newToken);
      return newToken;
    } catch (error) {
      console.error("Something went wrong while log in", error);
      throw error;
    }
  }

  logout() {
    TokenService.deleteToken();  
    return true;
  }

  isAuthenticated() {
    const token = TokenService.getToken();
    return !!token;
  }
}

export default AuthService;
