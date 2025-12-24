import { useState } from "react";
import { useBank } from "./Bankcontext";

export default function Airtime({ onBack }) {
  const { balance, debit } = useBank();

  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("MTN");
  const [error, setError] = useState("");

  const buyAirtime = () => {
    const amt = Number (amount);

    if (!phone || !amt) {
      setError("All fields required");
      return;
    }

    if (amt > balance) {
      setError("Insufficient balance");
      return;
    }

    debit(amt, `${network} Airtime to ${phone}`);
    onBack();
  };

  return (
    <div className="form-page">
      <header className="form-header">
        <span onClick={onBack}>←</span>
        <h3>Airtime</h3>
      </header>

      <div className="form-body">
        {error && <div className="error">{error}</div>}

        <label>Network</label>
        <select
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
        >
          <option>MTN</option>
          <option>Airtel</option>
          <option>Glo</option>
          <option>9mobile</option>
        </select>

        <label>Phone Number</label>
        <input
          placeholder="080XXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          placeholder="₦ Amount"
          value= {amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={buyAirtime}>BUY AIRTIME</button>
      </div>
    </div>
  );
}
