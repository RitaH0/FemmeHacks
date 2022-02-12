import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import './ExpensePage.css';

const ExpensePage = () =>{
    const [expense, setExpense] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
        let temp = 0;
        for(let i=0; i<expense.length;i++){
            temp += parseInt(expense[0].amount);
        }

        setTotalExpense(temp);

    }, [expense]);

    return(
        <div className = 'container'>
           <Header totalExpense={totalExpense} />
           <ExpenseForm expense={expense} setExpense={setExpense}/>
           <ExpenseList expense={expense} setExpense={setExpense}/>
           
        </div>
    )
}

export default ExpensePage;