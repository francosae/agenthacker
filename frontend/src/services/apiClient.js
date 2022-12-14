import axios from "axios";

class ApiClient {
	constructor(remoteHostUrl) {
		this.remoteHostUrl = remoteHostUrl;
		this.token = null;
		this.tokenName = "token";
	}

	setToken(token) {
		this.token = token;
		localStorage.setItem(this.tokenName, token);
	}

	async request({ endpoint, method = `GET`, data = {} }) {
		const url = `${this.remoteHostUrl}${endpoint}`;

		const headers = {
			"Content-Type": "application/json",
			Authorization: this.token ? `Bearer ${this.token}` : "",
		};

		try {
			const res = await axios({ url, method, data, headers });
			return { data: res.data, error: null };
		} catch (error) {
			console.error("err:");
			console.error({ errorResponse: error.response });
			const message = error?.response?.data?.error?.message;
			return { data: null, error: message || String(error) };
		}
	}

	async fetchUserFromToken() {
		return await this.request({ endpoint: `/auth/me`, method: `GET` });
	}

	async registerUser(credentials) {
		return await this.request({
			endpoint: `/auth/register`,
			method: `POST`,
			data: credentials,
		});
	}

	async loginUser(credentials) {
		return await this.request({
			endpoint: `/auth/login`,
			method: `POST`,
			data: credentials,
		});
	}

    async fetchUsers(){
        return await this.request({
            endpoint: `/user`,
            method: `GET`,
        })
    }

    async fetchUser(endpoint){
        return await this.request({
            endpoint: endpoint,
            method: `GET`,
        })
    }
    async updatePoints(endpoint){
        return await this.request({
            endpoint: endpoint,
            method: `POST`
        })
    }

	async logoutUser() {
		localStorage.removeItem(this.tokenName);
	}

}

const API = new ApiClient("http://localhost:3001");
export default API;