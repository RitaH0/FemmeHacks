import React, {useRef} from 'react';
import '../pages/ExpensePage.css';

function ExpenseForm({expense, setExpense}) {
    const desc = useRef(null);
    const date = useRef(null);
    const amount = useRef(null);


    const AddExpense = e => {
        e.preventDefault();
        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setExpense([...expense, {
            "desc": desc.current.value,
            "amount": amount.current.value,
            "date": newD.getTime()
        }])

        desc.current.value='';
        amount.current.value=null;
        date.current.value=null;

    }
    return (
        <form className = "expense-form" onSubmit = {AddExpense}>
            <div className="form-inner">
                <input className = "expenseInput" type="date" name="date" id="date" placeholder="Paid date" ref={date}/>
                <input className = "expenseInput" type="text" name="desc" id="desc" placeholder="Expense Description..." ref={desc}/>
                <input className = "expenseInput" type="number" name="amount" id="amount" placeholder="Amount" ref={amount}/>
                <input className = "expenseInput" type="submit" value="Add Expense"/>

                

            </div>
        </form>
    )
}

export default ExpenseForm;