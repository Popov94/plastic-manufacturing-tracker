    // src/components/DataFetcher.tsx
    import React, { useEffect, useState } from 'react';

    interface Data {
    // Define the structure of your data here, for example:
    id: number;
    name: string;
    }

    const DataFetcher: React.FC = () => {
    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result: Data[] = await response.json();
                setData(result);
            } catch (error) {
                setError('Failed to fetch data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
        <h1>Data Fetcher Component</h1>
        <pre>{data ? JSON.stringify(data, null, 2) : 'No data available'}</pre>
        </div>
    );
    };

    export default DataFetcher;