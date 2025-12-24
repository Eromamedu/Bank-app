// fakeBankApi.js
// This simulates a real bank account verification API

export const fakeAccounts = [
  {
    bank: "GTBank",
    accountNumber: "0123456789",
    name: "ADEBAYO TUNDE"
  },
  {
    bank: "Access Bank",
    accountNumber: "1112223334",
    name: "CHINEDU OKAFOR"
  },
  {
    bank: "UBA",
    accountNumber: "0987654321",
    name: "AISHA MUSA"
  },
  {
    bank: "Zenith Bank",
    accountNumber: "2223334445",
    name: "EMEKA NWANKWO"
  },
  {
    bank: "First Bank",
    accountNumber: "3334445556",
    name: "BLESSING JOHNSON"
  }, 
    {
    bank: "Opay",
    accountNumber: "8139333832",
    name: "AMEDU BELIEVE ABRAHAM"
  },
  {
    bank: "Opay",
    accountNumber: "9012722105",
    name: "AMEDU DONATUS KERRY"
  }
];

// Fake async resolver (feels like a real API)
export function resolveBankAccount(bank, accountNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const match = fakeAccounts.find(
        acc =>
          acc.bank === bank &&
          acc.accountNumber === accountNumber
      );

      if (match) {
        resolve(match.name);
      } else {
        reject("Account not found");
      }
    }, 1200); // delay makes it feel real
  });
}
