import React, { useState } from "react";
import Login from "./components/Fintech-app/Login";
import LoginForm from "./components/Fintech-app/LoginForm";
import Dashboard from "./components/Fintech-app/Dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("welcome");

  return (
    <>
      {page === "welcome" && <Login onLogin={() => setPage("login")} />}

      {page === "login" && <LoginForm onSuccess={() => setPage("dashboard")} />}

      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import FintechApp from "./components/Fintech-app/Fintech"
// // import Auth from "./components/Fintech-app/Fintech";
// // import Dashboard from "./components/Fintech-app/Dashboard";

// // import "./App.css";

// export default function App() {

//   return (
//     <div className="jumia-app">
//       <FintechApp />
//     </div>
//   );
// }
