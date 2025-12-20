import React, { useState } from "react";

import Login from "./components/Fintech-app/Login";
import LoginForm from "./components/Fintech-app/LoginForm";
import Register from "./components/Fintech-app/Register";
import Dashboard from "./components/Fintech-app/Dashboard";
import Airtime from "./components/Fintech-app/Airtime";
import Transfer from "./components/Fintech-app/Transfer";
import Transactions from "./components/Fintech-app/Transactions";

import { BankProvider } from "./components/Fintech-app/Bankcontext";

import "./App.css";

function App() {
  const [page, setPage] = useState("welcome");

  return (
    <BankProvider>
      {/* WELCOME */}
      {page === "welcome" && (
        <Login
          onLogin={() => setPage("login")}
          onRegister={() => setPage("register")}
        />
      )}

      {/* LOGIN */}
      {page === "login" && (
        <LoginForm
          onSuccess={() => setPage("dashboard")}
          onBack={() => setPage("welcome")}
        />
      )}

      {/* REGISTER */}
      {page === "register" && (
        <Register
          onSuccess={() => setPage("login")}
          onBack={() => setPage("welcome")}
        />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Dashboard
          goToAirtime={() => setPage("airtime")}
          goToTransfer={() => setPage("transfer")}
          goToTransactions={() => setPage("transactions")}
          onLogout={() => setPage("welcome")}
        />
      )}

      {/* AIRTlME */}
      {page === "airtime" && (
        <Airtime onBack={() => setPage("dashboard")} />
      )}

      {/* TRANSFER */}
      {page === "transfer" && (
        <Transfer onBack={() => setPage("dashboard")} />
      )}

      {/* TRANSACTIONS */}
      {page === "transactions" && (
        <Transactions onBack={() => setPage("dashboard")} />
      )}
    </BankProvider>
  );
}

export default App;



























// import React, { useState } from "react";

// import Login from "./components/Fintech-app/Login";
// import LoginForm from "./components/Fintech-app/LoginForm";
// import Register from "./components/Fintech-app/Register";
// import Dashboard from "./components/Fintech-app/Dashboard";

// import { BankProvider } from "./components/Fintech-app/Bankcontext";

// import "./App.css";

// function App() {
//   const [page, setPage] = useState("welcome");

//   return (
//     <BankProvider>
//       {/* WELCOME PAGE */}
//       {page === "welcome" && (
//         <Login
//           onLogin={() => setPage("login")}
//           onRegister={() => setPage("register")}
//         />
//       )}

//       {/* LOGIN FORM */}
//       {page === "login" && (
//         <LoginForm
//           onSuccess={() => setPage("dashboard")}
//           onBack={() => setPage("welcome")}
//         />
//       )}

//       {/* REGISTER PAGE */}
//       {page === "register" && (
//         <Register
//           onSuccess={() => setPage("login")}
//           onBack={() => setPage("welcome")}
//         />
//       )}

//       {/* DASHBOARD */}
//       {page === "dashboard" && (
//         <Dashboard onLogout={() => setPage("welcome")} />
//       )}
//     </BankProvider>
//   );
// }

// export default App;

















// import React, { useState } from "react";
// import Login from "./components/Fintech-app/Login";
// import LoginForm from "./components/Fintech-app/LoginForm";
// import Dashboard from "./components/Fintech-app/Dashboard";
// import Register from "./components/Fintech-app/Register";
// import {BankProvider} from "./components/Fintech-app/Bankcontext";
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("welcome");

//   return (
//     <>
//       {page === "welcome" && <Login onLogin={() => setPage("login")} />}

//       {page === "login" && <LoginForm onSuccess={() => setPage("dashboard")} />}

//       {page === "dashboard" && <Dashboard />}
//     </>
//   );
// }

// export default App;

// // import React, { useState, useEffect } from "react";
// // import FintechApp from "./components/Fintech-app/Fintech"
// // // import Auth from "./components/Fintech-app/Fintech";
// // // import Dashboard from "./components/Fintech-app/Dashboard";

// // // import "./App.css";

// // export default function App() {

// //   return (
// //     <div className="jumia-app">
// //       <FintechApp />
// //     </div>
// //   );
// // }
