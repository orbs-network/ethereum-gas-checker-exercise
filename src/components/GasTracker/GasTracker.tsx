import React, { useState, useEffect } from "react";

import { getGasData } from "@src/services/etherscan/gastracker";

type Data = Awaited<ReturnType<typeof getGasData>>;

export const GasTracker: React.FC = () => {
	const [data, setData] = useState<Data>();

	useEffect(() => {
		getGasData().then((newData) => newData && setData(newData));
	}, []);

	return <pre>{data && JSON.stringify(data, null, 2)}</pre>;
};
