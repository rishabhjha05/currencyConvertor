import { useEffect, useState } from 'react';

const useCurrency = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${currency}`,
        );
        const data = await response.json();
        setData(data.rates);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };
    fetchCurrencyData();
  }, [currency]);
  return data;
};
export default useCurrency;
