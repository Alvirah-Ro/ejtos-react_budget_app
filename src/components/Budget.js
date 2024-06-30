import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { getTotalExpenses } from './ExpenseTotal'; // Import the function to get total expenses

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [alertMessage, setAlertMessage] = useState('');

    const handleBudgetChange = (event) => {
        const updatedBudget = Number(event.target.value);
        setNewBudget(updatedBudget);

        const totalExpenses = getTotalExpenses(expenses);
        if (updatedBudget < totalExpenses) {
            setAlertMessage('Warning: You cannot reduce the budget lower than the spending');
        } else {
            setAlertMessage('');
        }
    };

    const alertType = newBudget < getTotalExpenses(expenses) ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Budget: £{newBudget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
            />
            {alertMessage && <div className="alert-message">{alertMessage}</div>}
        </div>
    );
};

export default Budget;