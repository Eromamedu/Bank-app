import React, { createContext, useContext, useState, useEffect } from "react";

const BankContext = createContext();

export function BankProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  /* LOAD FROM LOCAL STORAGE */
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("bankUsers")) || [];
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || null;

    setUsers(savedUsers);
    setCurrentUser(loggedUser);
  }, []);

  /* SAVE TO STORAGE */
  useEffect(() => {
    localStorage.setItem("bankUsers", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(currentUser));
  }, [users, currentUser]);

  /* REGISTER */
  const register = (data) => {
    const exists = users.find(
      (u) => u.accountNumber === data.accountNumber
    );

    if (exists) return { error: "Account already exists" };

    const newUser = {
      ...data,
      balance: 20000,
      transactions: [],
    };

    setUsers([...users, newUser]);
    return { success: true };
  };

  /* LOGIN */
  const login = (accountNumber, password, bank) => {
    const user = users.find(
      (u) =>
        u.accountNumber === accountNumber &&
        u.password === password &&
        u.bank === bank
    );

    if (!user) return { error: "Invalid login details" };

    setCurrentUser(user);
    return { success: true };
  };

  /* LOGOUT */
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("loggedUser");
  };

  /* DEBIT */
  const debit = (amount, description) => {
    if (!currentUser || amount > currentUser.balance) return;

    const updatedUser = {
      ...currentUser,
      balance: currentUser.balance - amount,
      transactions: [
        {
          type: "Debit",
          amount,
          description,
          date: new Date().toLocaleString(),
        },
        ...currentUser.transactions,
      ],
    };

    updateUser(updatedUser);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((u) =>
        u.accountNumber === updatedUser.accountNumber ? updatedUser : u
      )
    );
    setCurrentUser(updatedUser);
  };

  return (
    <BankContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
        debit,
      }}
    >
      {children}
    </BankContext.Provider>
  );
}

export const useBank = () => useContext(BankContext);

















// import { createContext, useContext, useState } from "react";

// const BankContext = createContext();

// export function BankProvider({ children }) {
//   const [balance, setBalance] = useState(16985.38);
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (tx) => {
//     setTransactions((prev) => [tx, ...prev]);
//   };

//   const debit = (amount, description) => {
//     setBalance((b) => b - amount);
//     addTransaction({
//       type: "Debit",
//       amount,
//       description,
//       date: new Date(),
//     });
//   };

//   const credit = (amount, description) => {
//     setBalance((b) => b + amount);
//     addTransaction({
//       type: "Credit",
//       amount,
//       description,
//       date: new Date(),
//     });
//   };

//   return (
//     <BankContext.Provider
//       value={{ balance, transactions, debit, credit }}
//     >
//       {children}
//     </BankContext.Provider>
//   );
// }

// export const useBank = () => useContext(BankContext);













// import { createContext, useState } from "react";

// export const BankContext = createContext();

// export function BankProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [balance, setBalance] = useState(56985.38);
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (type, amount, description) => {
//     setTransactions((prev) => [
//       {
//         id: Date.now(),
//         type,
//         amount,
//         description,
//         date: new Date().toLocaleString(),
//       },
//       ...prev,
//     ]);
//   };

//   const buyAirtime = (amount, phone) => {
//     if (amount > balance) return false;
//     setBalance((b) => b - amount);
//     addTransaction("Airtime", amount, `Airtime for ${phone}`);
//     return true;
//   };

//   const transferMoney = (amount, account) => {
//     if (amount > balance) return false;
//     setBalance((b) => b - amount);
//     addTransaction("Transfer", amount, `Transfer to ${account}`);
//     return true;
//   };

//   return (
//     <BankContext.Provider
//       value={{
//         user,
//         setUser,
//         balance,
//         transactions,
//         buyAirtime,
//         transferMoney,
//       }}
//     >
//       {children}
//     </BankContext.Provider>
//   );
// }
