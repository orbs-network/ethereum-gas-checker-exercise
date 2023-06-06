import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

import { ResponseData } from "./types";

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

	public async getRequest<T extends ResponseData>(
		url: string,
		params: AxiosRequestConfig
	): Promise<T | void> {
		return this._instance
			.get<T>(url, params)
			.then((res) => res.data)
			.then(this.validateData)
			.catch(this.throwError);
	}

	protected throwError(err: Error): void {
		throw err;
	}

	protected validateData<T extends ResponseData>(data: T): T | void {
		const { status, message } = data;
		if (status === "0") throw message;
		return data;
	}
}

export const EtherscanServiceInstance = new EtherscanService();
