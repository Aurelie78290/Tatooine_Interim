import type React from "react";
import { useState, useEffect } from "react";
import DataContext, { DataContextState } from "../contexts/DataContext";

type DataProviderProps = {
	children: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
	const [data, setData] = useState<JSON | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://miadil.github.io/starwars-api/api",
				);
				if (!response.ok) {
					throw new Error(`Erreur HTTP: ${response.status}`);
				}
				const jsonData = await response.json();
				setData(jsonData);
			} catch (e) {
				setError(e as Error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	const value: DataContextState = {
		data,
		isLoading,
		error,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
