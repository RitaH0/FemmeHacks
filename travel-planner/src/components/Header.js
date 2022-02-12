import React from 'react';
import '../pages/ExpensePage.css';

function Header({ totalExpense }) {
    return (
        <header>
            
            <h1>Record your expenses here!</h1>
            <div className = "total-expense">${totalExpense}</div>
            <a href='/PlannerPage'>
                <button className = 'returnButton'>back</button>
                </a>
        </header>
    )
}

export default Header;