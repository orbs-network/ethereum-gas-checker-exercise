import React from "react";

import type { GasData, PriceData } from "@src/services/etherscan";
import { getGasData, getPriceData } from "@src/services/etherscan";
import { useAsyncData } from "@src/hooks/useAsyncData";

export const GasTracker: React.FC = () => {
	const gasData = useAsyncData<GasData>(getGasData);
	const priceData = useAsyncData<PriceData>(getPriceData);

	const data = { gasData, priceData };

	return <pre>{data && JSON.stringify(data, null, 2)}</pre>;
};
