import React, { useState } from "react";
import * as R from "ramda";

import MonthlyTable from "./MonthlyTable";
import InputExpense from "./InputExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const initialSaldo = 1000;
  const [money, setMoney] = useState(0);

  const updateExpenseValue = e => {
    const value = e.target.value;
    if (isNaN(value)) return;
    setMoney(value);
  };
  const addToList = multiplier => {
    const realValue = money * multiplier;
    if (realValue === 0) return;
    setExpenses(R.append({ month: Date.now(), money: realValue }, expenses));
  };

  return (
    <>
      <InputExpense
        value={money}
        onUpdate={updateExpenseValue}
        addOutgoing={addToList}
        addIncoming={addToList}
      />
      <MonthlyTable list={expenses} limitTo={5} />
      <hr />
      <b>{initialSaldo + R.sum(R.map(e => e.money, expenses))}</b>
    </>
  );
}

export default App;
