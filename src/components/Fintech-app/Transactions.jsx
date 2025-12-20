import React, { useState } from "react";


export default function TransferModal({ balance, setBalance, setTransactions, close }) {
  const [amount, setAmount] = useState("");

  const send = () => {
    const value = Number(amount);
    if (!value || value > balance) return alert("Invalid amount");

    setBalance(balance - value);
    setTransactions((t) => [
      { type: "Debit", amount: value, date: new Date() },
      ...t,
    ]);
    close();
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Send Money</h3>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={send}>Send</button>
        <button className="cancel" onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  );
}