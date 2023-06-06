import axios from "axios";

type GasData = {
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

const ETHERSCAN_API_KEY = "YourApiKeyToken"; // rate-limited 1req/5sec

const endpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_API_KEY}`;

export const getGasData = () =>
	axios
		.get<GasData>(endpoint)
		.then((res) => res.data)
		.catch((err) => console.error(err));
