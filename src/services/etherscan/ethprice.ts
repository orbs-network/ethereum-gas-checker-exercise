import axios from "axios";

type PriceData = {
	status: string;
	message: string;
	result: {
		ethbtc: string;
		ethbtc_timestamp: string;
		ethusd: string;
		ethusd_timestamp: string;
	};
};

export const ETHERSCAN_API_KEY = "YourApiKeyToken"; // rate-limited 1req/5sec

const endpoint = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${ETHERSCAN_API_KEY}`;

export const getPriceData = () =>
	axios
		.get<PriceData>(endpoint)
		.then((res) => res.data)
		.catch((err) => console.error(err));
