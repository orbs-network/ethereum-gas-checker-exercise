import React from "react";

import { Stack } from "@src/components/Stack";
import { GasTracker } from "@src/components/GasTracker";

import "./App.scss";

export const App: React.FC = () => {
	return (
		<Stack className="App" gap={2}>
			<header className="App__header">
				<h1 className="App__title">Etherium Gas Tracker</h1>
			</header>

			<main className="App__main">
				<GasTracker />
			</main>

			<footer>
				<p>by Sebastian Rosloniec</p>
			</footer>
		</Stack>
	);
};
