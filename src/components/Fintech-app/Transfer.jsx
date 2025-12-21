import { useState } from "react";
import { useBank } from "./Bankcontext";

export default function Transfer({ onBack }) {
  const { balance, debit } = useBank();

  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [error, setError] = useState("");

  const sendMoney = () => {
    const amt = Number(amount);

    if (!account || !amt) {
      setError("All fields are required");
      return;
    }

    if (amt > balance) {
      setError("Insufficient balance");
      return;
    }

    debit(amt, `Transfer to ${account} (${narration})`);
    onBack();
  };

  return (
    <div className="form-page">
      <header className="form-header">
        <span onClick={onBack}>←</span>
        <h3>Transfer</h3>
      </header>

      <div className="form-body">
        {error && <div className="error">{error}</div>}

        <label>Recipient Account Number</label>
        <input
          placeholder="10-digit account"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          placeholder="₦ Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Narration</label>
        <input
          placeholder="Optional"
          value={narration}
          onChange={(e) => setNarration(e.target.value)}
        />

        <button onClick={sendMoney}>SEND MONEY</button>
      </div>
    </div>
  );
}
