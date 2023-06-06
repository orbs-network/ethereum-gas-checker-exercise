import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

import { ResponseData } from "./types";

const ETHERSCAN_BASE_URL = "https://api.etherscan.io/api";
const ETHERSCAN_API_KEY = "YourApiKeyToken"; // rate-limited 1req/5sec
const ETHERSCAN_API_COOLOFF = 5 * 1000; // ms

const awaitTimeout = (delay: number) =>
	new Promise((resolve) => setTimeout(resolve, delay));

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
		config: AxiosRequestConfig
	): Promise<T | void> {
		const retryLimit = 2;
		let retryCount = 0;

		const req = async (): Promise<T | void> =>
			this._instance
				.get<T>(url, config)
				.then((res) => res.data)
				.then(this.validateData)
				.catch(async (err) => {
					if (retryCount > retryLimit) this.throwError(err);
					retryCount++;
					return awaitTimeout(ETHERSCAN_API_COOLOFF).then(req);
				});

		return req();
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
