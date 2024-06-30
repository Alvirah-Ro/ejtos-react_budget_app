import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('$');

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <div>
            <label htmlFor="currency">Currency: </label>
            <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
            <p>Selected Currency: {selectedCurrency}</p>
        </div>
    );
};

export default CurrencyDropdown;
