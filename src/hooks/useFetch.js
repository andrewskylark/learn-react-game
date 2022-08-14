import {useEffect, useState } from 'react';

const useFetch = (url) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);

        const getFetch = async () => {
            try {
                const result = await fetch(url).then(res => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                });

                setData(result);
                console.log(result);
                setError('');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        getFetch();
    }, [])

    return [data, isLoading, error];
}

export default useFetch;