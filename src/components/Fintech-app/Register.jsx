import React, { useState } from "react";
import Logo from "../assets/images/icon-scissors.svg";
import { useBank } from "./Bankcontext";

export default function Register({ onSuccess, onBack }) {
  const { register } = useBank();

  const [fullName, setFullName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("Zenith Bank");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!fullName || !accountNumber || !password || !confirm) {
      setError("All fields are required");
      return;
    }

    if (accountNumber.length !== 10) {
      setError("Account number must be 10 digits");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const result = register({
      fullName,
      accountNumber,
      password,
    });

    if (result?.error) {
      setError(result.error);
      return;
    }

    onSuccess(); // go to login
  };

  return (
    <div className="form-page">
      <header className="form-header">
        <span onClick={onBack} style={{cursor:"pointer"}}>←</span>
        <img src={Logo} alt="" style={{ backgroundColor: "white", borderRadius: "50%" }} />
      </header>

      <div className="form-body">
        <h3>Open an Account</h3>
        {error && <p className="error">{error}</p>}

        <label>Full Name</label>
        <input value={fullName} onChange={e => setFullName(e.target.value)} />

        {/* <label>Bank</label>
        <select value={bank} onChange={e => setBank(e.target.value)}>
          <option>Zenith Bank</option>
          <option>GTBank</option>
          <option>Access Bank</option>
          <option>UBA</option>
          <option>First Bank</option>
        </select> */}

        <label>Account Number</label>
        <input value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

        <label>Confirm Password</label>
        <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />

        <button onClick={submit}>REGISTER</button>
      </div>
    </div>
  );
}

































// import React, { useState } from "react";
// import Logo from "../assets/images/icon-scissors.svg"; // use ANY banking-style image


// export default function Register({ onSuccess, onBack }) {
//   const [fullname, setFullname] = useState("");
//   const [account, setAccount] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState("");

//   const submit = () => {
//     if (!fullname || !account || !password || !confirm) {
//       setError("All fields are required");
//       return;
//     }

//     if (account.length !== 10) {
//       setError("Account number must be 10 digits");
//       return;
//     }

//     if (password.length < 4) {
//       setError("Password must be at least 4 characters");
//       return;
//     }

//     if (password !== confirm) {
//       setError("Passwords do not match");
//       return;
//     }

//     setError("");
//     onSuccess(); // go to login
//   };
//   return (
//     <div className="form-page">
//       {/* HEADER */}
//       <header className="form-header">
//         <span onClick={onBack} style={{ cursor: "pointer" }}>←</span>
//         <img src={Logo} alt="Bank Logo" style={{ backgroundColor: "white", borderRadius: "50%" }}/>
//       </header>
//       {/* BODY */}
//       <div className="form-body">
//         <h3 style={{ marginBottom: "20px" }}> Open an Account </h3>
//         {error && <p className="error">{error}</p>}
//         <label>Full Name</label>
//         <input
//           placeholder="Surname Firstname"
//           value={fullname}
//           onChange={(e) => setFullname(e.target.value)}
//         />

//         <label>Account Number</label>
//         <input 
//           placeholder="10-digit Account Number"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Create Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <label>Confirm Password</label>
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirm}
//           onChange={(e) => setConfirm(e.target.value)}
//         />

//         <button onClick={submit}>REGISTER</button>

//         <p className="forgot" onClick={onBack} style={{ cursor: "pointer" }}>
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// }

