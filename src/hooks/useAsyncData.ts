import { useState, useEffect } from "react";

export function useAsyncData<D>(method: () => Promise<D>): D {
	const [data, setData] = useState<D>();

	useEffect(() => {
		method().then((newData) => newData && setData(newData));
	}, []);

	return data;
}
