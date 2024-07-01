import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Define the getTotalExpenses function
export const getTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
};

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = getTotalExpenses(expenses);

    return (
        <div className="alert alert-info">
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;