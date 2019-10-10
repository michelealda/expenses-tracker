import React from "react";

export default function Expense(props) {
  const { month, value } = props;
  const style = {
    color: value > 0 ? "black" : "red"
  };

  return (
    <tr>
      <td>{month}</td>
      <td style={style}>${value}</td>
    </tr>
  );
}
