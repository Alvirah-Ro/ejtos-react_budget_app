import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const alertType = newBudget > ExpenseTotal ? 'alert-danger' : 'alert-success';
    const alertMessage = newBudget > ExpenseTotal ? 'Warning: You cannot reduce the budget lower than the spending' : '';

    return (
        <div className={`alert ${alertType}`}>
            <span>Budget: {currency}{budget}</span>
            <div className="input-group" style={{ marginTop: '1rem' }}>
                <div className="input-group-prepend">
                    <span className="input-group-text">{currency}</span>
                </div>
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    className="form-control"
                    onChange={handleBudgetChange}
                />
            </div>
            {alertMessage && <div className="alert-message">{alertMessage}</div>}
        </div>
    );
};

export default Budget;
