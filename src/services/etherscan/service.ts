import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

export const ETHERSCAN_BASE_URL = "https://api.etherscan.io/api";
export const ETHERSCAN_API_KEY = "YourApiKeyToken"; // rate-limited 1req/5sec

export class EtherscanService {
	protected readonly _instance: AxiosInstance;

	public constructor() {
		this._instance = axios.create({
			baseURL: ETHERSCAN_BASE_URL,
			params: {
				apikey: ETHERSCAN_API_KEY,
			},
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
	}

	public async getRequest<T>(
		url: string,
		params: AxiosRequestConfig
	): Promise<T | void> {
		return this._instance
			.get<T>(url, params)
			.then((res) => res.data)
			.catch((err) => console.error(err));
	}
}

export const EtherscanServiceInstance = new EtherscanService();
