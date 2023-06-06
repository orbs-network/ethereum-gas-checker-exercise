import React from "react";

import { getGasData } from "@src/services/etherscan/gastracker";
import { getPriceData } from "@src/services/etherscan/ethprice";
import { useAsyncData } from "@src/hooks/useAsyncData";

type GasData = Awaited<ReturnType<typeof getGasData>>;
type PriceData = Awaited<ReturnType<typeof getPriceData>>;

export const GasTracker: React.FC = () => {
	const gasData = useAsyncData<GasData>(getGasData);
	const priceData = useAsyncData<PriceData>(getPriceData);

	const data = { gasData, priceData };

	return <pre>{data && JSON.stringify(data, null, 2)}</pre>;
};
