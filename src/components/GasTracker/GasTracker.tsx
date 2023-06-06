import React, { useCallback } from "react";

import type { GasPriceData, EthRateData } from "@src/services/etherscan";
import { fetchGasPrice, fetchRate } from "@src/services/etherscan";
import { useAsyncData } from "@src/hooks/useAsyncData";
import { convertGweiToEth } from "@src/utils/currency";
import { Stack } from "@src/components/Stack";
import { Button } from "@src/components/Button";

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
	const gasPriceMeta = useAsyncData<GasPriceData>(fetchGasPrice);
	const ethRateMeta = useAsyncData<EthRateData>(fetchRate);

	const [gasPriceData, gasLoading, gasError, gasRefresh] = gasPriceMeta;
	const [ethRateData, priceLoading, priceError, priceRefresh] = ethRateMeta;

	const convertGweiToUsd = useCallback(
		(gwei: number | string) => {
			if (!ethRateData) return null;
			const ethUsdRate = Number(ethRateData.result.ethusd);
			const eth = convertGweiToEth(Number(gwei));
			return eth * ethUsdRate;
		},
		[ethRateData]
	);

	const refresh = () => {
		gasRefresh();
		priceRefresh();
	};

	const { SafeGasPrice, ProposeGasPrice, FastGasPrice } =	gasPriceData?.result ?? {}; // prettier-ignore
	const { ethusd_timestamp: timestamp } = ethRateData?.result ?? {};

	const dateString = timestamp && formatDate(new Date(Number(timestamp)));

	const cardProps = { usdRateLoading: priceLoading, getUsd: convertGweiToUsd };

	return (
		<Stack as="section" className="GasTracker" gap={1.5}>
			<Stack as="header" className="GasTracker__header" gap={1}>
				<div className="GasTracker__status">
					{gasError || priceError
						? copy["error"]
						: gasLoading
						? copy["loadingDat"]
						: priceLoading
						? copy["loadingRate"]
						: dateString}
				</div>
				<Button onClick={refresh}>Refresh</Button>
			</Stack>

			<Stack className="GasTracker__cards" gap={1}>
				<GasFeeCard label="low" priceGwei={SafeGasPrice} {...cardProps} />
				<GasFeeCard label="medium" priceGwei={ProposeGasPrice} {...cardProps} />
				<GasFeeCard label="high" priceGwei={FastGasPrice} {...cardProps} />
			</Stack>
		</Stack>
	);
};
