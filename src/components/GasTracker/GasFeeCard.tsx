import React from "react";

type Props = {
	label: string;
	priceGwei: string | number;
	getUsd: (gwei: string | number) => number;
	usdRateLoading: boolean;
};

export const GasFeeCard: React.FC<Props> = ({
	label,
	priceGwei,
	getUsd,
	usdRateLoading,
}) => {
	const priceUsd = getUsd(priceGwei);

	return (
		<pre>
			{JSON.stringify({ label, priceGwei, priceUsd, usdRateLoading }, null, 2)}
		</pre>
	);
};
