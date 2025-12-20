import React, { useState } from "react";
import Logo from "../assets/images/icon-scissors.svg"
// import "./Dashboard.css";

export default function Dashboard() {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <div className="dashboard">
      {/* TOP BAR */}
      <header className="dash-header">
        <span className="menu">☰</span>
        <h3>Overview</h3>
        <img
          src={Logo}
          alt="logo"
          style={{ backgroundColor: "white", borderRadius: "50%" }}
        />
      </header>

      {/* BALANCE CARD */}
      <section className="balance-card">
        <p>TOTAL BALANCE</p>
        <h1>{hideBalance ? "₦ ****" : "₦ 16,985.38"}</h1>

        <div className="toggle">
          <span>Hide balance</span>
          <input
            type="checkbox"
            onChange={() => setHideBalance(!hideBalance)}
          />
        </div>
      </section>

      {/* ACCOUNT INFO */}
      <section className="account-info">
        <p className="acct-number">2215775836 - ACTIVE</p>
        <p className="acct-name">BELIEVE ABRAHAM AMEDU</p>

        <div className="ledger">
          <span>{hideBalance ? "₦ ****" : "₦ 16,985.38"}</span>
          <small>Ledger Balance: ₦ 17,035.38</small>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="actions">
        <Action icon="📱" label="QR Payments" />
        <Action icon="🎈" label="Travel & Leisure" />
        <Action icon="📺" label="Cable TV" />
        <Action icon="💳" label="Cards" />

        <Action icon="🆔" label="My BVN" />
        <Action icon="🔁" label="Scheduled Payments" />
        <Action icon="⚙️" label="Customize eaZylinks" />
        <Action icon="🛠️" label="Settings" />
      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        <NavItem label="Overview" active />
        <NavItem label="Airtime" />
        <NavItem label="Transfer" />
        <NavItem label="Bills" />
      </nav>
    </div>
  );
}

function Action({ icon, label }) {
  return (
    <div className="action">
      <div className="icon">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

function NavItem({ label, active }) {
  return (
    <div className={`nav-item ${active ? "active" : ""}`}>
      <span>{label}</span>
    </div>
  );
}

// import React, { useState } from "react";
// import TransactionList from "./LoginForm";
// import TransferModal from "./Transfermod";

// export default function Dashboard({
// user,
// balance,
// setBalance,
// transactions,
// setTransactions,
// }) {
//   const [showTransfer, setShowTransfer] = useState(false);

//   return (
//     <div className="dashboard">
//       <header>
//         <h2>Welcome, {user.name}</h2>
//         <span className="balance">₦{balance.toLocaleString()}</span>
//       </header>

//       <div className="actions">
//         <button onClick={() => setShowTransfer(true)}>Send Money</button>
//         <button
//           className="add"
//           onClick={() => {
//             setBalance((b) => b + 10000);
//             setTransactions((t) => [
//               { type: "Credit", amount: 10000, date: new Date() },
//               ...t,
//             ]);
//           }}
//         >
//           Add Money
//         </button>
//       </div>

//       <TransactionList transactions={transactions} />

//       {showTransfer && (
//         <TransferModal
//           balance={balance}
//           setBalance={setBalance}
//           setTransactions={setTransactions}
//           close={() => setShowTransfer(false)}
//         />
//       )}
//     </div>
//   );
// }
