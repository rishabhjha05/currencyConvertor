import { useEffect, useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import InputBox from './components/InputBox';
import Button from './components/Button';
import useCurrency from './hooks/useCurrency';
import Toast from './components/Toast';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const data = useCurrency(fromCurrency);
  const rate = data[toCurrency] ? data[toCurrency] : null;
  console.log(rate);
  const currencies = [
    { label: 'USD - US Dollar', value: 'USD' },
    { label: 'INR - Indian Rupee', value: 'INR' },
    { label: 'EUR - Euro', value: 'EUR' },
    { label: 'GBP - British Pound', value: 'GBP' },
    { label: 'JPY - Japanese Yen', value: 'JPY' },
    { label: 'AUD - Australian Dollar', value: 'AUD' },
    { label: 'CAD - Canadian Dollar', value: 'CAD' },
    { label: 'CHF - Swiss Franc', value: 'CHF' },
    { label: 'CNY - Chinese Yuan', value: 'CNY' },
    { label: 'SGD - Singapore Dollar', value: 'SGD' },
    { label: 'AED - UAE Dirham', value: 'AED' },
  ];

  function swapHandler() {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  function showToast() {
    const toast = document.querySelector('.toast');
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);
  }
  return (
    <>
      <div className="container">
        <InputBox
          label="From"
          setAmount={setAmount}
          amount={amount}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          currencyOptions={currencies}
        />
        <InputBox
          label="To"
          amount={rate ? (amount * rate).toFixed(2) : ''}
          currency={toCurrency}
          setCurrency={setToCurrency}
          currencyOptions={currencies}
          feildDisabled={true}
        />
        {console.log('Rate:', rate)}
        <Button
          label={`Convert ${fromCurrency} to ${toCurrency}`}
          onClick={showToast}
        />
        <Button label="Swap" onClick={swapHandler} id="swap-button" />
      </div>
      <Toast
        message={`${amount} ${fromCurrency} converts to ${rate ? (amount * rate).toFixed(2) : ''} ${toCurrency}`}
        type="info"
      />
    </>
  );
}

export default App;
