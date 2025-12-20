import React from "react";
// import "./Login.css";
import bg from "../assets/images/icon-scissors.svg"; 
import Logo from "../assets/images/icon-scissors.svg";

export default function Login({ onLogin, onRegister }) {
  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-overlay">
        <div className="login-header">
          <img
            src={Logo}
            alt="Bank Logo"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          />
        </div>

        <div className="login-text">
          <h1>Eazy Banking</h1>
          <p>Experience a whole new world of banking, simplified.</p>
        </div>

        <button className="btn-primary" onClick={onLogin}>
          Log In
        </button>

        <button className="btn-outline" onClick={onRegister}>Register</button>

        <div className="login-links">
          <span>Internet Banking</span>
          <span>Open Account</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// // import "./App.css";

// export default function App() {
//   const [screen, setScreen] = useState("welcome"); // welcome | login | dashboard | airtime | transfer | bills
//   const [user, setUser] = useState(null);

//   const handleLogin = (account, password) => {
//     if (account.length === 10 && password.length >= 4) {
//       setUser({
//         name: "Believe Amedu",
//         account: account,
//         balance: 56985.38,
//       });
//       setScreen("dashboard");
//     } else {
//       alert("Invalid login details");
//     }
//   };

//   const updateBalance = (amount) => {
//     setUser((u) => ({ ...u, balance: u.balance - amount }));
//   };

//   return (
//     <div className="app">
//       {screen === "welcome" && <Welcome onLogin={() => setScreen("login")} />}
//       {screen === "login" && (
//         <Login onBack={() => setScreen("welcome")} onSubmit={handleLogin} />
//       )}
//       {screen === "dashboard" && user && (
//         <Dashboard user={user} onNavigate={setScreen} />
//       )}
//       {screen === "airtime" && (
//         <Airtime
//           onBack={() => setScreen("dashboard")}
//           onPay={(amt) => {
//             updateBalance(amt);
//             setScreen("dashboard");
//           }}
//         />
//       )}
//       {screen === "transfer" && (
//         <Transfer
//           onBack={() => setScreen("dashboard")}
//           onSend={(amt) => {
//             updateBalance(amt);
//             setScreen("dashboard");
//           }}
//         />
//       )}
//       {screen === "bills" && (
//         <Bills
//           onBack={() => setScreen("dashboard")}
//           onPay={(amt) => {
//             updateBalance(amt);
//             setScreen("dashboard");
//           }}
//         />
//       )}
//     </div>
//   );
// }

// function Welcome({ onLogin }) {
//   return (
//     <div className="welcome">
//       <h1>Eazy Banking</h1>
//       <p>Experience a new world of banking</p>
//       <button className="primary" onClick={onLogin}>
//         Log In
//       </button>
//       <button className="secondary">Register</button>
//     </div>
//   );
// }

// function Login({ onBack, onSubmit }) {
//   const [account, setAccount] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="login">
//       <button className="back" onClick={onBack}>
//         ←
//       </button>
//       <h2>Welcome</h2>
//       <input
//         placeholder="Account Number"
//         value={account}
//         onChange={(e) => setAccount(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="primary" onClick={() => onSubmit(account, password)}>
//         Sign In
//       </button>
//     </div>
//   );
// }

// function Dashboard({ user, onNavigate }) {
//   const [hide, setHide] = useState(false);

//   return (
//     <div className="dashboard">
//       <div className="balance-card">
//         <span>Total Balance</span>
//         <h1>{hide ? "••••••" : `₦ ${user.balance.toLocaleString()}`}</h1>
//         <label>
//           <input type="checkbox" onChange={() => setHide(!hide)} /> Hide balance
//         </label>
//       </div>

//       <div className="quick-actions">
//         <Action label="Overview" onClick={() => onNavigate("dashboard")} />
//         <Action label="Airtime" onClick={() => onNavigate("airtime")} />
//         <Action label="Transfer" onClick={() => onNavigate("transfer")} />
//         <Action label="Bills" onClick={() => onNavigate("bills")} />
//       </div>
//     </div>
//   );
// }

// function Action({ label, onClick }) {
//   return (
//     <button className="action" onClick={onClick}>
//       {label}
//     </button>
//   );
// }

// function Airtime({ onBack, onPay }) {
//   const [amount, setAmount] = useState("");
//   return (
//     <div className="form">
//       <button onClick={onBack}>← Back</button>
//       <h2>Buy Airtime</h2>
//       <input
//         placeholder="Amount"
//         onChange={(e) => setAmount(+e.target.value)}
//       />
//       <button className="primary" onClick={() => onPay(amount)}>
//         Pay
//       </button>
//     </div>
//   );
// }

// function Transfer({ onBack, onSend }) {
//   const [amount, setAmount] = useState("");
//   return (
//     <div className="form">
//       <button onClick={onBack}>← Back</button>
//       <h2>Transfer</h2>
//       <input
//         placeholder="Amount"
//         onChange={(e) => setAmount(+e.target.value)}
//       />
//       <button className="primary" onClick={() => onSend(amount)}>
//         Send
//       </button>
//     </div>
//   );
// }

// function Bills({ onBack, onPay }) {
//   const [amount, setAmount] = useState("");
//   return (
//     <div className="form">
//       <button onClick={onBack}>← Back</button>
//       <h2>Pay Bills</h2>
//       <input
//         placeholder="Amount"
//         onChange={(e) => setAmount(+e.target.value)}
//       />
//       <button className="primary" onClick={() => onPay(amount)}>
//         Pay
//       </button>
//     </div>
//   );
// }

// // import React, { useEffect, useState } from "react";
// // export default function App() {
// //   const [balance, setBalance] = useState(() => {
// //     const saved = localStorage.getItem("balance");
// //     return saved ? Number(saved) : 250000;
// //   });

// //   const [transactions, setTransactions] = useState(() => {
// //     const saved = localStorage.getItem("transactions");
// //     return saved ? JSON.parse(saved) : [];
// //   });

// //   const [amount, setAmount] = useState("");
// //   const [type, setType] = useState("transfer");

// //   useEffect(() => {
// //     localStorage.setItem("balance", balance);
// //     localStorage.setItem("transactions", JSON.stringify(transactions));
// //   }, [balance, transactions]);

// //   const handleTransaction = () => {
// //     const value = Number(amount);
// //     if (!value || value <= 0) return alert("Enter valid amount");

// //     if (type === "transfer" && value > balance) {
// //       return alert("Insufficient balance");
// //     }

// //     const newBalance = type === "transfer" ? balance - value : balance + value;
// //     setBalance(newBalance);

// //     setTransactions([
// //       {
// //         id: Date.now(),
// //         type,
// //         amount: value,
// //         date: new Date().toLocaleString(),
// //       },
// //       ...transactions,
// //     ]);

// //     setAmount("");
// //   };

// //   return (
// //     <div className="zenith-app">
// //       <header className="zenith-header">
// //         <h1>Zenith Mobile</h1>
// //         <span className="subtitle">Secure Banking</span>
// //       </header>

// //       <section className="balance-section">
// //         <p>Account Balance</p>
// //         <h2>₦{balance.toLocaleString()}</h2>
// //       </section>

// //       <section className="quick-actions">
// //         <button onClick={() => setType("transfer")}>Transfer</button>
// //         <button onClick={() => setType("deposit")}>Add Money</button>
// //         <button disabled>Pay Bills</button>
// //       </section>

// //       <section className="transaction-box">
// //         <h3>{type === "transfer" ? "Money Transfer" : "Add Funds"}</h3>
// //         <input
// //           type="number"
// //           placeholder="Enter amount"
// //           value={amount}
// //           onChange={(e) => setAmount(e.target.value)}
// //         />
// //         <button className="primary-btn" onClick={handleTransaction}>
// //           {type === "transfer" ? "Transfer" : "Add Money"}
// //         </button>
// //       </section>

// //       <section className="transactions">
// //         <h3>Recent Transactions</h3>
// //         {transactions.length === 0 && <p>No transactions yet</p>}

// //         {transactions.map((tx) => (
// //           <div key={tx.id} className={`tx ${tx.type}`}>
// //             <div>
// //               <strong>{tx.type === "transfer" ? "Debit" : "Credit"}</strong>
// //               <span>{tx.date}</span>
// //             </div>
// //             <span>₦{tx.amount.toLocaleString()}</span>
// //           </div>
// //         ))}
// //       </section>
// //     </div>
// //   );
// // }

// // // import React, { useState } from "react";

// // // export default function Auth({ onLogin }) {
// // //   const [name, setName] = useState("");

// // //   const submit = () => {
// // //     if (name.trim()) onLogin({ name });
// // //   };

// // //   return (
// // //     <div className="auth">
// // //       <h1>FinPay</h1>
// // //       <p>Secure Digital Wallet</p>
// // //       <input
// // //         placeholder="Enter your name"
// // //         value={name}
// // //         onChange={(e) => setName(e.target.value)}
// // //       />
// // //       <button onClick={submit}>Enter Wallet</button>
// // //     </div>
// // //   );
// // // }
