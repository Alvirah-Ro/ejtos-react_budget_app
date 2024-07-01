import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div className="alert alert-info">
            <label htmlFor="currency">Currency: </label>
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
            <p>Selected Currency: {currency}</p>
        </div>
    );
};

export default CurrencyDropdown;

