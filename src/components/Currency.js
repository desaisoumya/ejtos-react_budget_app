import React, { useState } from 'react';
 
const Currency = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£'); // Default currency

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };
    const customStyles = {
        option: (base, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...base,
          backgroundColor: isFocused ? "red" : "blue",
        };
      }
    };

    return (
        <div className="alert alert-secondary">
            <label className='currencyDropdown'>Currency</label> 
            <select styles={customStyles} className='currencyDropdown' id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option className='currencyDropdownOption' value="$">$ Dollar</option>
                <option className='currencyDropdownOption' value="£">£ Pound</option>
                <option className='currencyDropdownOption' value="€">€ Euro</option>
                <option className='currencyDropdownOption' value="₹">₹ Rupee</option> 
            </select>
        </div>
    ) 
};
export default Currency;