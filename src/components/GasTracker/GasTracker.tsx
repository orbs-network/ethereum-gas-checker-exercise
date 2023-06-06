import React from "react";

import type { GasData, PriceData } from "@src/services/etherscan";
import { getGasData, getPriceData } from "@src/services/etherscan";
import { useAsyncData } from "@src/hooks/useAsyncData";

export const GasTracker: React.FC = () => {
	const [gasData, gasLoading, gasError] = useAsyncData<GasData>(getGasData);

	const [priceData, priceLoading, priceError] =
		useAsyncData<PriceData>(getPriceData);

	const data = {
		gas: { gasLoading, gasError, gasData },
		price: { priceLoading, priceError, priceData },
	};

	return <pre>{data && JSON.stringify(data, null, 2)}</pre>;
};
