import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [entereddate, setEnteredDate] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  // // Another method using single state

  //   const [inputvlaues, setinputvalues] = useState({
  //     enteredtitle: "",
  //     entereddate: "",
  //     enteredamount: "",
  //   });

  //     const TitleChangeHandler = (event) => {
  //     setinputvalues((prevstate)=>{
  //         return {...prevstate,enteredtitle: event.target.value}
  //     })
  //   };
  //   const DateChangeHandler = (event) => {
  //     setinputvalues((prevstate)=>{
  //         return {...prevstate,entereddate: event.target.value}
  //     })
  //   };
  //   const AmountChangeHandler = (event) => {
  //     setinputvalues((prevstate)=>{
  //         return {...prevstate,enteredamount: event.target.value}
  //     })
  //   };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: +enteredamount,
      date: new Date(entereddate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entereddate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
