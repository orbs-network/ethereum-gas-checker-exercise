import React, { useState, useEffect } from "react";

import { getGasData } from "@src/services/etherscan/gastracker";
import { getPriceData } from "@src/services/etherscan/ethprice";

type GasData = Awaited<ReturnType<typeof getGasData>>;
type PriceData = Awaited<ReturnType<typeof getPriceData>>;

export const GasTracker: React.FC = () => {
	const [gasData, setGasData] = useState<GasData>();
	const [priceData, setPriceData] = useState<PriceData>();

	useEffect(() => {
		getGasData().then((newData) => newData && setGasData(newData));
		getPriceData().then((newData) => newData && setPriceData(newData));
	}, []);

	const data = { gasData, priceData };

	return <pre>{data && JSON.stringify(data, null, 2)}</pre>;
};
