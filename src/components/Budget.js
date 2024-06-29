import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal, { getTotalExpenses }  from './ExpenseTotal';



const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const totalExpenses = getTotalExpenses();
    const alertType = newBudget > totalExpenses ? 'alert-danger' : 'alert-success';
    const alertMessage = newBudget > totalExpenses ? 'Warning: You cannot reduce the budget lower than the spending' : '';
    
    return(
        <div className={`alert ${alertType}`}>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            {alertMessage}
        </div>
    );
};
export default Budget;