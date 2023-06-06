export type GasData = {
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

export type PriceData = {
	status: string;
	message: string;
	result: {
		ethbtc: string;
		ethbtc_timestamp: string;
		ethusd: string;
		ethusd_timestamp: string;
	};
};
