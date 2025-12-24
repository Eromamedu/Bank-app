import { useState, useEffect } from "react";
import { useBank } from "./Bankcontext";
import { resolveBankAccount } from "./Fakebankapi";

export default function Transfer({ onBack }) {
  const { debit, currentUser } = useBank();
  const [bank, setBank] = useState("First Bank");
  const [account, setAccount] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  // 🔍 VERIFY ACCOUNT (FAKE API)
  useEffect(() => {
    if (account.length === 10) {
      setLoading(true);
      setAccountName("");
      setError("");

      resolveBankAccount(bank, account)
        .then(name => {
          setAccountName(name);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    } else {
      setAccountName("");
    }
  }, [account, bank]);
  
const sendMoney = () => {
  const amt = Number(amount);

  if (!accountName) {
    setError("Please verify account");
    return;
  }

  if (!amt || amt > currentUser.balance) {
    setError("Invalid or insufficient amount");
    return;
  }
  debit(amt, `Transfer to ${accountName} (${bank})`);
  setSuccess(true); // 👈 SHOW SUCCESS FIRST

};
  // const sendMoney = () => {
  //   const amt = Number(amount);

  //   if (!accountName) {
  //     setError("Please verify account");
  //     return;
  //   }

  //   if (!amt || amt > currentUser.balance) {
  //     setError("Invalid or insufficient amount");
  //     return;
  //   }

  //   debit(amt, `Transfer to ${accountName} (${bank})`);
  //   // onBack();
  //   setSuccess(true);
  //   console.log("SUCCESS SET");


  // };
if (success) {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h2>Transfer Successful</h2>

        <p className="success-amount">
          You have sent <strong>₦{Number(amount).toLocaleString()}</strong>
        </p>

        <p className="success-recipient">
          To <strong>{accountName}</strong> ({bank})
        </p>

        <button className="btn-done" onClick={onBack}>
          Done
        </button>
      </div>
    </div>
  );
}

  return (
    <div className="form-page">
      <header className="form-header">
        <span onClick={onBack}>←</span>
        <h3>Transfer</h3>
      </header>

      <div className="form-body">
        {error && <div className="error">{error}</div>}

        <label>Bank</label>
        <select value={bank} onChange={e => setBank(e.target.value)}>
          <option>Zenith Bank</option>
          <option>GTBank</option>
          <option>Access Bank</option>
          <option>UBA</option>
          <option>First Bank</option>
          <option>Opay</option>
        </select>

        <label>Recipient Account Number</label>
        <input
          placeholder="10-digit account"
          value={account}
          onChange={e => setAccount(e.target.value)}
        />

        {loading && <p>Verifying account...</p>}

        {accountName && (
          <p style={{ color: "green", fontWeight: "600" }}>
            {accountName}
          </p>
        )}

        <label>Amount</label>
        <input
          type="number"
          placeholder="₦ Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <label>Narration</label>
        <input
          placeholder="Optional"
          value={narration}
          onChange={e => setNarration(e.target.value)}
        />

        <button onClick={sendMoney} disabled={!accountName}>
          SEND MONEY
        </button>
      </div>
    </div>
  );
}




























// import { useState } from "react";
// import { useBank } from "./Bankcontext";

// export default function Transfer({ onBack }) {
//   const { balance, debit } = useBank();
//   const [bank, setBank] = useState("First Bank");
//   const [account, setAccount] = useState("");
//   const [amount, setAmount] = useState("");
//   const [narration, setNarration] = useState("");
//   const [error, setError] = useState("");

//   const sendMoney = () => {
//     const amt = Number(amount);

//     if (!account || !amt) {
//       setError("All fields are required");
//       return;
//     }

//     if (amt > balance) {
//       setError("Insufficient balance");
//       return;
//     }

//     debit(amt, `Transfer to ${account} (${narration})`);
//     onBack();
//   };

//   return (
//     <div className="form-page">
//       <header className="form-header">
//         <span onClick={onBack}>←</span>
//         <h3>Transfer</h3>
//       </header>

//       <div className="form-body">
//         {error && <div className="error">{error}</div>}
//         <label>Bank</label>
//         <select value={bank} onChange={e => setBank(e.target.value)}>
//           <option>Zenith Bank</option>
//           <option>GTBank</option>
//           <option>Access Bank</option>
//           <option>UBA</option>
//           <option>First Bank</option>
//           <option>Guaranty Trust Bank</option>
//         </select>
//         <label>Recipient Account Number</label>
//         <input
//           placeholder="10-digit account"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />

//         <label>Amount</label>
//         <input
//           type="number"
//           placeholder="₦ Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />

//         <label>Narration</label>
//         <input
//           placeholder="Optional"
//           value={narration}
//           onChange={(e) => setNarration(e.target.value)}
//         />

//         <button onClick={sendMoney}>SEND MONEY</button>
//       </div>
//     </div>
//   );
// }
