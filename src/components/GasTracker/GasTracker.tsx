import React, { useCallback } from "react";

import type { GasData, PriceData } from "@src/services/etherscan";
import { getGasData, getPriceData } from "@src/services/etherscan";
import { useAsyncData } from "@src/hooks/useAsyncData";
import { convertGweiToEth } from "@src/utils/currency";
import { Stack } from "@src/components/Stack";

import "./GasTracker.scss";
import { GasFeeCard } from "./GasFeeCard";

const formatDate = (date: Date) =>
	date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();

const copy = {
	error: "An error has occured",
	loadingDat: "Loading data...",
	loadingRate: "Loadig USD rate...",
};

export const GasTracker: React.FC = () => {
	const [gasData, gasLoading, gasError] = useAsyncData<GasData>(getGasData);
	const [priceData, priceLoading, priceError] = useAsyncData<PriceData>(getPriceData); // prettier-ignore

	const convertGweiToUsd = useCallback(
		(gwei: number | string) => {
			console.log({ gasData, priceData });
			if (!priceData) return null;
			const ethUsdRate = Number(priceData.result.ethusd);
			const eth = convertGweiToEth(Number(gwei));
			return eth * ethUsdRate;
		},
		[priceData]
	);

	const { SafeGasPrice, ProposeGasPrice, FastGasPrice } = gasData?.result ?? {};
	const { ethusd_timestamp: timestamp } = priceData?.result ?? {};

	const dateString = timestamp && formatDate(new Date(Number(timestamp)));

	const cardProps = { usdRateLoading: priceLoading, getUsd: convertGweiToUsd };

	return (
		<Stack className="GasTracker" gap={2}>
			<div className="GasTracker__status">
				{gasError || priceError
					? copy["error"]
					: gasLoading
					? copy["loadingDat"]
					: priceLoading
					? copy["loadingRate"]
					: dateString}
			</div>

			<Stack className="GasTracker__cards" gap={1}>
				<GasFeeCard label="low" priceGwei={SafeGasPrice} {...cardProps} />
				<GasFeeCard label="medium" priceGwei={ProposeGasPrice} {...cardProps} />
				<GasFeeCard label="high" priceGwei={FastGasPrice} {...cardProps} />
			</Stack>
		</Stack>
	);
};
