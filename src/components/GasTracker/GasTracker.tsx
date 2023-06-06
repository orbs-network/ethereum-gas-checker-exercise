import React, { useCallback } from "react";

import type { GasData, PriceData } from "@src/services/etherscan";
import { getGasData, getPriceData } from "@src/services/etherscan";
import { useAsyncData } from "@src/hooks/useAsyncData";
import { convertGweiToEth } from "@src/utils/currency";
import { Stack } from "@src/components/Stack";

import "./GasTracker.scss";
import { GasFeeCard } from "./GasFeeCard";

export const GasTracker: React.FC = () => {
	const [gasData, gasLoading, gasError] = useAsyncData<GasData>(getGasData);
	const [priceData, priceLoading, priceError] = useAsyncData<PriceData>(getPriceData); // prettier-ignore

	const convertGweiToUsd = useCallback(
		(gwei: number | string) => {
			if (!priceData) return null;
			const ethUsdRate = Number(priceData.result.ethusd);
			const eth = convertGweiToEth(Number(gwei));
			return eth * ethUsdRate;
		},
		[priceData]
	);

	const { SafeGasPrice, ProposeGasPrice, FastGasPrice } = gasData?.result ?? {};

	const statusProps = { gasLoading, gasError, priceLoading, priceError };

	const cardProps = { getUsd: convertGweiToUsd, usdRateLoading: priceLoading };

	return (
		<Stack className="GasTracker" gap={2}>
			<p className="GasTracker__status">
				{JSON.stringify(statusProps, null, 2)}
			</p>

			<Stack className="GasTracker__cards" gap={1}>
				<GasFeeCard label="low" priceGwei={SafeGasPrice} {...cardProps} />
				<GasFeeCard label="medium" priceGwei={ProposeGasPrice} {...cardProps} />
				<GasFeeCard label="high" priceGwei={FastGasPrice} {...cardProps} />
			</Stack>
		</Stack>
	);
};
