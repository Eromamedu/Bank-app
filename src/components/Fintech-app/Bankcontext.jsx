import { createContext, useState } from "react";

export const BankContext = createContext();

export function BankProvider({ children }) {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(56985.38);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (type, amount, description) => {
    setTransactions((prev) => [
      {
        id: Date.now(),
        type,
        amount,
        description,
        date: new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  const buyAirtime = (amount, phone) => {
    if (amount > balance) return false;
    setBalance((b) => b - amount);
    addTransaction("Airtime", amount, `Airtime for ${phone}`);
    return true;
  };

  const transferMoney = (amount, account) => {
    if (amount > balance) return false;
    setBalance((b) => b - amount);
    addTransaction("Transfer", amount, `Transfer to ${account}`);
    return true;
  };

  return (
    <BankContext.Provider
      value={{
        user,
        setUser,
        balance,
        transactions,
        buyAirtime,
        transferMoney,
      }}
    >
      {children}
    </BankContext.Provider>
  );
}
