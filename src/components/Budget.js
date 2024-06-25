
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, remaining, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    let lowerLimit = newBudget - remaining;

    useEffect(() => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })
        console.log("Budget:", newBudget, typeof(newBudget))
        upperBudgetLimit()
        lowerBudgetLimit()
    }, [newBudget, lowerLimit])

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
            setNewBudget(event.target.value);
    }

    function upperBudgetLimit () {
        if (newBudget > 20000) {
            setNewBudget(20000);
            alert("Your budget cannot exceed 20000.")
        }
    }

    function lowerBudgetLimit() {
        if (newBudget < lowerLimit || newBudget === '') {
            setNewBudget(totalExpenses + 10);
            alert("You cannot reduce the budget value lower than the spending.")
        }
    }


    return (
        <div className='alert alert-secondary w-100'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;