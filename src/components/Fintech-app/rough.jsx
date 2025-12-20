// register.jsx
export default function Register({ go }) {
  return (
    <div className="auth">
      <h2>Open Account</h2>

      <input placeholder="Full Name" />
      <input placeholder="Account Number" />
      <input placeholder="Password" type="password" />

      <button onClick={() => go("login")}>REGISTER</button>
      <p onClick={() => go("login")}>Already have an account?</p>
    </div>
  );
}
// dashboard.jsx
import { useContext } from "react";
import { BankContext } from "../context/BankContext";

export default function Dashboard({ go }) {
  const { balance, user } = useContext(BankContext);

  return (
    <div className="dashboard">
      <h3>Overview</h3>

      <div className="balance-card">
        <p>Total Balance</p>
        <h1>₦ {balance.toFixed(2)}</h1>
      </div>

      <div className="grid">
        <button onClick={() => go("airtime")}>Airtime</button>
        <button onClick={() => go("transfer")}>Transfer</button>
        <button onClick={() => go("transactions")}>History</button>
        <button onClick={() => go("welcome")}>Logout</button>
      </div>
    </div>
  );
}
// airtime.jsx
import { useContext, useState } from "react";
import { BankContext } from "../context/BankContext";

export default function Airtime({ go }) {
  const { buyAirtime } = useContext(BankContext);
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const submit = () => {
    if (buyAirtime(Number(amount), phone)) {
      alert("Airtime Successful");
      go("dashboard");
    } else {
      alert("Insufficient Balance");
    }
  };

  return (
    <div className="page">
      <h3>Buy Airtime</h3>
      <input placeholder="Phone Number" onChange={e => setPhone(e.target.value)} />
      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <button onClick={submit}>BUY</button>
    </div>
  );
}
// transfer.jsx
import { useContext, useState } from "react";
import { BankContext } from "../context/BankContext";

export default function Transfer({ go }) {
  const { transferMoney } = useContext(BankContext);
  const [amount, setAmount] = useState("");
  const [acct, setAcct] = useState("");

  const send = () => {
    if (transferMoney(Number(amount), acct)) {
      alert("Transfer Successful");
      go("dashboard");
    } else {
      alert("Insufficient Balance");
    }
  };

  return (
    <div className="page">
      <h3>Transfer</h3>
      <input placeholder="Account Number" onChange={e => setAcct(e.target.value)} />
      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <button onClick={send}>SEND</button>
    </div>
  );
}
// transactions.jsx
import { useContext } from "react";
import { BankContext } from "../context/BankContext";

export default function Transactions({ go }) {
  const { transactions } = useContext(BankContext);

  return (
    <div className="page">
      <h3>Transaction History</h3>

      {transactions.length === 0 && <p>No transactions yet</p>}

      {transactions.map(t => (
        <div key={t.id} className="txn">
          <strong>{t.type}</strong>
          <p>{t.description}</p>
          <small>{t.date}</small>
          <span>₦ {t.amount}</span>
        </div>
      ))}

      <button onClick={() => go("dashboard")}>Back</button>
    </div>
  );
}
