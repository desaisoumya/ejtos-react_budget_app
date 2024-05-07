
import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget=()=>{
    const {budget}=useContext(AppContext);
    const {expenses}=useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange=(event) => {
        if (event.target.value < expenses) {
                alert("You cannot reduce the budget value lower than the spending")
                return;
            }
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            Budget: $<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}
export default Budget;