import type { AxiosInstance } from "axios";
import axios from "axios";

import { ETHERSCAN_API_KEY, ETHERSCAN_BASE_URL } from "./config";

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

	public async getRequest<T>(url: string): Promise<T | void> {
		return this._instance
			.get<T>(url)
			.then((res) => res.data)
			.catch((err) => console.error(err));
	}
}

export const EtherscanServiceInstance = new EtherscanService();
