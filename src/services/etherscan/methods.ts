import type { GasPriceData, EthRateData } from "@src/services/etherscan";
import { EtherscanServiceInstance } from "./service";

export const fetchGasPrice = async (): Promise<GasPriceData | void> => {
	const params = {
		module: "gastracker",
		action: "gasoracle",
	};
	return EtherscanServiceInstance.getRequest("", { params });
};

export const fetchRate = async (): Promise<EthRateData | void> => {
	const params = {
		module: "stats",
		action: "ethprice",
	};
	return EtherscanServiceInstance.getRequest("", { params });
};
