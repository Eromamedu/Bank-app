import React, { useState } from "react";
import { useBank } from "./components/Fintech-app/Bankcontext";
import Login from "./components/Fintech-app/Login";
import LoginForm from "./components/Fintech-app/LoginForm";
import Register from "./components/Fintech-app/Register";
import Dashboard from "./components/Fintech-app/Dashboard";
import Airtime from "./components/Fintech-app/Airtime";
import Transfer from "./components/Fintech-app/Transfer";
import Transactions from "./components/Fintech-app/Transactions";
import QRPayment from "./components/Fintech-app/Qrpayments"
import CableTV from "./components/Fintech-app/cable"
import Travel from "./components/Fintech-app/travel"
import Cards from "./components/Fintech-app/cards"
import BVN from "./components/Fintech-app/bvn"
import Scheduled from "./components/Fintech-app/sched-pay"
import EazyLinks from "./components/Fintech-app/customize"
import Settings from "./components/Fintech-app/settings"


import { BankProvider } from "./components/Fintech-app/Bankcontext";

import "./App.css";
function App() {
  const { currentUser } = useBank();
  // const [page, setPage] = useState("welcome");
  const [page, setPage] = useState("dashboard");
  const goTo = (name) => setPage(name);


  // ✅ AUTO REDIRECT AFTER REFRESH
  // React.useEffect(() => {
  //   if (currentUser) {
  //     setPage("dashboard");
  //   }
  // }, [currentUser]);
  React.useEffect(() => {
  if (currentUser && page === "welcome") {
    setPage("dashboard");
  }
}, [currentUser]);


  return (
    <>
      {page === "welcome" && (
        <Login
          onLogin={() => setPage("login")}
          onRegister={() => setPage("register")}
        />
      )}

      {page === "login" && (
        <LoginForm
          onSuccess={() => setPage("dashboard")}
          onBack={() => setPage("welcome")}
        />
      )}

      {page === "register" && (
        <Register
          onSuccess={() => setPage("dashboard")}
          onBack={() => setPage("welcome")}
        />
      )}

      {page === "dashboard" && (
        <Dashboard 
        goTo={goTo}
          goToAirtime={() => setPage("airtime")}
          goToTransfer={() => setPage("transfer")}
          goToTransactions={() => setPage("transactions")}
          onLogout={() => setPage("welcome")}
        />
      )}

      {page === "airtime" && (
        <Airtime onBack={() => setPage("dashboard")} />
      )}

      {page === "transfer" && (
        <Transfer onBack={() => setPage("dashboard")} />
      )}

      {page === "transactions" && (
        <Transactions onBack={() => setPage("dashboard")} />
      )}

      {/* {page === "dashboard" && (
  <Dashboard goTo={goTo} onLogout={logout} />
)} */}

{page === "qr" && <QRPayment goBack={() => goTo("dashboard")} />}
{page === "cable" && <CableTV goBack={() => goTo("dashboard")} />}
{page === "travel" && <Travel goBack={() => goTo("dashboard")} />}
{page === "cards" && <Cards goBack={() => goTo("dashboard")} />}
{page === "bvn" && <BVN goBack={() => goTo("dashboard")} />}
{page === "scheduled" && <Scheduled goBack={() => goTo("dashboard")} />}
{page === "eazylinks" && <EazyLinks goBack={() => goTo("dashboard")} />}
{page === "settings" && <Settings goBack={() => goTo("dashboard")} />}

    </>
  );
}
export default App;









// function App() {
//   const [page, setPage] = useState("welcome");

//   return (
//     <BankProvider>
//       {/* WELCOME */}
//       {page === "welcome" && (
//         <Login
//           onLogin={() => setPage("login")}
//           onRegister={() => setPage("register")}
//         />
//       )}

//       {/* LOGIN */}
//       {page === "login" && (
//         <LoginForm
//           onSuccess={() => setPage("dashboard")}
//           onBack={() => setPage("welcome")}
//         />
//       )}

//       {/* REGISTER */}
//       {page === "register" && (
//         <Register
//           onSuccess={() => setPage("login")}
//           onBack={() => setPage("welcome")}
//         />
//       )}

//       {/* DASHBOARD */}
//       {page === "dashboard" && (
//         <Dashboard
//           goToAirtime={() => setPage("airtime")}
//           goToTransfer={() => setPage("transfer")}
//           goToTransactions={() => setPage("transactions")}
//           onLogout={() => setPage("welcome")}
//         />
//       )}

//       {/* AIRTlME */}
//       {page === "airtime" && (
//         <Airtime onBack={() => setPage("dashboard")} />
//       )}

//       {/* TRANSFER */}
//       {page === "transfer" && (
//         <Transfer onBack={() => setPage("dashboard")} />
//       )}

//       {/* TRANSACTIONS */}
//       {page === "transactions" && (
//         <Transactions onBack={() => setPage("dashboard")} />
//       )}
//     </BankProvider>
//   );
// }

// export default App;



























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
