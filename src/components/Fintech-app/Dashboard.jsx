import React, { useState } from "react";
import Logos from "../assets/images/icon-scissors.svg";
import { useBank } from "./Bankcontext";

// import "./Dashboard.css";

export default function Dashboard({goTo, goToAirtime, goToTransfer, goToTransactions, onLogout}) {
    const { currentUser, logout } = useBank();
  const [hideBalance, setHideBalance] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
 
  if (!currentUser) return null;

  return (
    <>
    {showSidebar && (
        <Sidebar
          user={currentUser}
          close={() => setShowSidebar(false)}
          onLogout={onLogout}
          goTo={goTo}

        />
      )}
    <div className="dashboard">
      {/* TOP BAR */}
      <header className="dash-header">
        <span className="menu" onClick={() => setShowSidebar(true)} style={{cursor:"pointer"}}>☰</span>
        <h3>Overview</h3>
      {/* <button onClick={() => {
    logout();      // clear user
    onLogout();    // go back to welcome page
  }}>Logout</button> */}
        <img
          src={Logos}
          alt="logo"
          style={{ backgroundColor: "white", borderRadius: "50%" }}
        />
      </header>

      {/* BALANCE CARD */}
      <section className="balance-card">
        <p>TOTAL BALANCE</p>
        <h1>{hideBalance ? "₦ ****" : `₦ ${currentUser.balance.toLocaleString()}`}</h1>
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
        <p>{currentUser.accountNumber} -  ACTIVE</p>
        <p>{currentUser.fullName}</p>

        {/* <p className="acct-number">2215775836 - ACTIVE</p> */}


        <div className="ledger">
          <span>{hideBalance ? "₦ ****" : `₦ ${currentUser.balance.toLocaleString()}`}</span>
          <small>Ledger Balance:  ₦ {currentUser.balance.toLocaleString()}</small>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="actions">
        <Action icon="📱" label="QR Payments" onClick={() => goTo("qr")} />
        <Action icon="🎈" label="Travel & Leisure" onClick={() => goTo("travel")} />
        <Action icon="📺" label="Cable TV" onClick={() => goTo("cable")}/>
        <Action icon="💳" label="Cards" onClick={() => goTo("cards")} />

        <Action icon="🆔" label="My BVN" onClick={() => goTo("bvn")} />
        <Action icon="🔁" label="Scheduled Payments" onClick={() => goTo("scheduled")} />
        <Action icon="⚙️" label="Customize eaZylinks" onClick={() => goTo("eazylinks")}/>
        <Action icon="🛠️" label="Settings" onClick={() => goTo("settings")} />
      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
  <NavItem label="Overview" active />
  <NavItem label="Airtime" onClick={goToAirtime} />
  <NavItem label="Transfer" onClick={goToTransfer} />
  <NavItem label="Transactions" onClick={goToTransactions} />
      </nav>
    </div>
    </>
  );
}
function Sidebar({ user, close, onLogout, goTo }) {
  return (
    <>
      <div className="sidebar-overlay" onClick={close}></div>

      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>{user.fullName}</h3>
          <span className="close" onClick={close}>✕</span>
        </div>

        <ul className="sidebar-menu">
          <li onClick={() => { goTo("dashboard"); close(); }}>🏠 Overview </li>
          <li onClick={() => { goTo("transfer"); close(); }}>🔁 Transfer </li>
          <li onClick={() => { goTo("airtime"); close(); }}>📱 Airtime Recharge</li>
          <li>📦 Data Bundles</li>
          <li onClick={() => { goTo("bills"); close(); }}>🧾 Bills Payment</li>
          <li onClick={() => { goTo("qr"); close(); }}>🔳 QR Payments</li>
          <li onClick={() => { goTo("cards"); close(); }}>💳 Cards</li>
          <li onClick={() => { goTo("settings"); close(); }}>⚙️ Settings</li>
        </ul>

        <div className="sidebar-footer" onClick={onLogout} >
          ⏻ Sign Out
        </div>
      </aside>
    </>
  );
}

// function Action({ icon, label }) {
//   return (
//     <div className="action">
//       <div className="icon">{icon}</div>
//       <span>{label}</span>
//     </div>
//   );
// }
function Action({ icon, label, onClick }) {
  return (
    <div className="action" onClick={onClick}>
      <div className="icon">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
// function PageLayout({ title, goBack, children }) {
//   return (
//     <div className="page">
//       <header className="page-header">
//         <span onClick={goBack}>←</span>
//         <h3>{title}</h3>
//       </header>

//       <div className="page-content">
//         {children}
//       </div>
//     </div>
//   );
// }

function NavItem({ label, active, onClick }) {
  return (
    <div
      className={`nav-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
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
