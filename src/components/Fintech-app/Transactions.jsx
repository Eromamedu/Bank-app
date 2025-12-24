import { useBank } from "./Bankcontext";

export default function Transactions({ onBack }) {
  const { currentUser } = useBank();
  if (!currentUser) return null;

  const transactions = currentUser.transactions || [];


  return (
    <div className="form-page">
      <header className="form-header">
        <span onClick={onBack}>←</span>
        <h3>Transactions</h3>
      </header>

      <div className="form-body">
        {transactions.length === 0 && (
          <p style={{ textAlign: "center", color: "#777" }}>
            No transactions yet
          </p>
        )}

        {transactions.map((tx, i) => (
          <div
            key={i}
            className={`tx-row ${tx.type === "Debit" ? "debit" : "credit"}`}
          >
            <div>
              <strong>{tx.description}</strong>
              <small>
                {new Date(tx.date).toLocaleDateString()}
              </small>
            </div>
            <span>
              {tx.type === "Debit" ? "-" : "+"}₦
              {tx.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}






























// import React, { useState } from "react";


// export default function TransferModal({ balance, setBalance, setTransactions, close }) {
//   const [amount, setAmount] = useState("");

//   const send = () => {
//     const value = Number(amount);
//     if (!value || value > balance) return alert("Invalid amount");

//     setBalance(balance - value);
//     setTransactions((t) => [
//       { type: "Debit", amount: value, date: new Date() },
//       ...t,
//     ]);
//     close();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-box">
//         <h3>Send Money</h3>
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button onClick={send}>Send</button>
//         <button className="cancel" onClick={close}>
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }