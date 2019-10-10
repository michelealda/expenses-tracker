import React from "react";
import * as R from "ramda";
import Expense from "./Expense";

export default function MonthlyTable(props) {
  const { list, limitTo } = props;
  const mapIndexed = R.addIndex(R.map);
  return (
    <table>
      <tbody>
        {mapIndexed(
          (e, i) => (
            <Expense key={i} month={e.month} value={e.money} />
          ),
          R.takeLast(limitTo, list)
        )}
      </tbody>
    </table>
  );
}
