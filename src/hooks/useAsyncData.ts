import { useState, useEffect, useCallback } from "react";

export function useAsyncData<D>(
	method: () => Promise<D | void>
): [data: D, loading: boolean, error: string | null, refresh: () => void] {
	const [data, setData] = useState<D>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = useCallback(() => {
		setLoading(true);
		setError(null);
		method()
			.then((newData) => newData && setData(newData))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [method]);

	useEffect(fetchData, [fetchData]);

	return [data, loading, error, fetchData];
}
