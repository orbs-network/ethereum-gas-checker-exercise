import { useState, useEffect } from "react";

export function useAsyncData<D>(
	method: () => Promise<D | void>
): [data: D, loading: boolean, error: string | null] {
	const [data, setData] = useState<D>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		method()
			.then((newData) => {
				newData && setData(newData);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
			});
	}, [method]);

	return [data, loading, error];
}
