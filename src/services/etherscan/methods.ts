import type { GasData, PriceData } from "@src/services/etherscan";
import { EtherscanServiceInstance } from "./service";

export const getGasData = async (): Promise<GasData | void> => {
	const params = {
		module: "gastracker",
		action: "gasoracle",
	};
	return EtherscanServiceInstance.getRequest("", { params });
};

export const getPriceData = async (): Promise<PriceData | void> => {
	const params = {
		module: "stats",
		action: "ethprice",
	};
	return EtherscanServiceInstance.getRequest("", { params });
};
