import React, { useState } from "react";
import Logo from "../assets/images/icon-scissors.svg";
import { useBank } from "./Bankcontext";

export default function LoginForm({ onSuccess, onBack }) {
  const { login } = useBank();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // const [bank, setBank] = useState("Zenith Bank");
  const [error, setError] = useState("");

  const submit = () => {
    const result = login(account, password);

    if (result?.error) {
      setError(result.error);
      return;
    }
    onSuccess();
  };

  return (
    <div className="form-page">
      <header className="form-header">
        <span onClick={onBack} style={{cursor:"pointer"}}>←</span>
        <img src={Logo} alt="" style={{ backgroundColor: "white", borderRadius: "50%" }}/>
      </header>

      <div className="form-body">
        {error && <p className="error">{error}</p>}

        {/* <label>Bank</label>
        <select value={bank} onChange={e => setBank(e.target.value)}>
          <option>Zenith Bank</option>
          <option>GTBank</option>
          <option>Access Bank</option>
          <option>UBA</option>
          <option>First Bank</option>
        </select> */}

        <label>Account Number</label>
        <input value={account} onChange={e => setAccount(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <div className="remember">
        <input type="checkbox" style={{marginTop:"20px"}}/>
          <span style={{whiteSpace:"nowrap"}}>Remember login</span>
       </div>

        <button onClick={submit}>SIGN IN</button>
                 <p className="forgot">Forgot Password?</p>
       <p className="internet">
          Continue in <span>Internet Banking</span>
        </p>
      </div>
    </div>
  );
}




// import React, { useState } from "react";
// import Logo from "../assets/images/icon-scissors.svg"; // use ANY banking-style image

// // import "./LoginForm.css";

// export default function LoginForm({ onSuccess }) {
//   const [account, setAccount] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = () => {
//     if (account && password) {
//       onSuccess();
//     }
//   };

//   return (
//     <div className="form-page">
//       <header className="form-header">
//         <span>←</span>
//         <img src={Logo} alt=""  style={{ backgroundColor: "white", borderRadius: "50%" }}
//  />
//       </header>

//       <div className="form-body">
//         <label>Account Number</label>
//         <input
//           placeholder="Account Number"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <div className="remember">
//           <input type="checkbox" style={{marginTop:"20px"}}/>
//           <span style={{whiteSpace:"nowrap"}}>Remember login</span>
//         </div>

//         <button onClick={submit}>SIGN IN</button>

//         <p className="forgot">Forgot Password?</p>
//         <p className="internet">
//           Continue in <span>Internet Banking</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// // import React from "react";
// // export default function TransactionList({ transactions }) {
// //   return (
// //     <div className="transactions">
// //       <h3>Transactions</h3>
// //       {transactions.length === 0 && <p>No transactions yet</p>}
// //       {transactions.map((t, i) => (
// //         <div key={i} className={`tx ${t.type.toLowerCase()}`}>
// //           <span>{t.type}</span>
// //           <strong>₦{t.amount.toLocaleString()}</strong>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
