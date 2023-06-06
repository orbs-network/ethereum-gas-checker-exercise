export type ResponseData = {
	status: string;
	message: string;
	result: Record<string, unknown>;
};

export type GasPriceData = {
	status: string;
	message: string;
	result: {
		LastBlock: string;
		SafeGasPrice: string;
		ProposeGasPrice: string;
		FastGasPrice: string;
		suggestBaseFee: string;
		gasUsedRatio: string;
	};
};

export type EthRateData = {
	status: string;
	message: string;
	result: {
		ethbtc: string;
		ethbtc_timestamp: string;
		ethusd: string;
		ethusd_timestamp: string;
	};
};
