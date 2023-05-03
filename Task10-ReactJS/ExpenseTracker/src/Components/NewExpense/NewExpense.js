import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isaddexpense, setIsAddExpense] = useState(false);

  const SaveExpenseDataHandler = (AddExpenseData) => {
    const expensedata = {
      id: Math.random().toString(),
      ...AddExpenseData,
    };
    props.onAddExpense(expensedata);
    setIsAddExpense(false);
  };
  const ShowAddExpenseHandler = () => {
    setIsAddExpense(true);
  };
  const HideAddExpenseHandler = () => {
    setIsAddExpense(false);
  };

  return (
    <div className="new-expense">
      {isaddexpense === false && (
        <button onClick={ShowAddExpenseHandler}>Add Expense</button>
      )}
      {isaddexpense === true && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={HideAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
