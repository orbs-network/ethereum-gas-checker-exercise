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
			.then((newData) => newData && setData(newData))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [method]);

	return [data, loading, error];
}
