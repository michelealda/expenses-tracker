import React from "react";

export default function InputExpense(props) {
  const { value, onUpdate, addOutgoing, addIncoming } = props;

  return (
    <>
      <input value={value} onChange={onUpdate} />
      <hr />
      <button onClick={() => addOutgoing(-1)}>Outgoing</button>
      <button onClick={() => addIncoming(1)}>Incoming</button>
    </>
  );
}
