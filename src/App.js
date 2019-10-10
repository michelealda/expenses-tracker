import React, { useState } from "react";
import * as R from "ramda";

const Expense = props => {
  const { month, value } = props;
  return (
    <div style={{ display: "block" }}>
      ${value} {month}
    </div>
  );
};

const InputExpense = props => {
  const { value, onUpdate, onClick } = props;

  return (
    <>
      <input value={value} onChange={onUpdate} />
      <button onClick={onClick}>Add</button>
    </>
  );
};

function App() {
  const [expenses, setExpenses] = useState([]);
  const [money, setMoney] = useState(0);

  const updateExpenseValue = e => {
    const value = e.target.value;
    if (isNaN(value)) return;
    setMoney(value);
  };
  const addToList = () => {
    setExpenses(R.append({ month: "Feb", money }, expenses));
  };

  const mapIndexed = R.addIndex(R.map);

  return (
    <>
      <InputExpense
        value={money}
        onUpdate={updateExpenseValue}
        onClick={addToList}
      />
      {mapIndexed(
        (e, i) => (
          <Expense key={i} month={e.month} value={e.money} />
        ),
        expenses
      )}
    </>
  );
}

export default App;
