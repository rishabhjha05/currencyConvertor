const InputBox = ({
  label,
  amount,
  setAmount,
  currency,
  setCurrency,
  currencyOptions,
  feildDisabled,
}) => {
  return (
    <div className="InputBox">
      <div className="detail">
        <label>
          {label}: {currency}
        </label>
        <input
        disabled={feildDisabled}
          type="number"
          value={amount}
          min="0"
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className="currencies">
        <select
          value={currency}
          id="currency-selector"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputBox;
