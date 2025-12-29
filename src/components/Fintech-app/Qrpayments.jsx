import { useState } from "react";
import PageLayout from "./PageLayout";
import { useBank } from "./Bankcontext";

export default function QRPayment({ goBack }) {
  const { currentUser, debit } = useBank();

  const [scanning, setScanning] = useState(false);
  const [amount, setAmount] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Simulated scanned QR data
  const scannedData = {
    name: "John Doe",
    account: "0123456789",
    bank: "Zenith Bank",
  };

  const handleConfirmPayment = () => {
    if (!amount || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    debit(Number(amount), `QR Payment to ${scannedData.name}`);
    setConfirmed(true);
  };

  return (
    <PageLayout title="QR Payments" goBack={goBack}>
      
      {/* SCAN QR */}
      {!scanning && !confirmed && (
        <div className="qr-card primary">
          <div className="qr-icon">📷</div>
          <h3>Scan QR Code</h3>
          <p>Pay merchants and individuals instantly by scanning a QR code</p>

          <button
            className="qr-btn primary"
            onClick={() => setScanning(true)}
          >
            Scan QR Code
          </button>
        </div>
      )}

      {/* SCANNED RESULT */}
      {scanning && !confirmed && (
        <div className="qr-card">
          <h3>Confirm Payment</h3>

          <div className="qr-info">
            <p><strong>Recipient:</strong> {scannedData.name}</p>
            <p><strong>Bank:</strong> {scannedData.bank}</p>
            <p><strong>Account:</strong> {scannedData.account}</p>
          </div>

          <input
            placeholder="Enter amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="qr-btn primary"
            onClick={handleConfirmPayment}
          >
            Pay ₦{amount || "0"}
          </button>

          <button
            className="qr-btn outline"
            onClick={() => setScanning(false)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* SUCCESS */}
      {confirmed && (
        <div className="qr-card primary">
          <div className="qr-icon">✅</div>
          <h3>Payment Successful</h3>
          <p>
            ₦{amount} sent to {scannedData.name}
          </p>

          <button
            className="qr-btn primary"
            onClick={goBack}
          >
            Done
          </button>
        </div>
      )}

      {/* MY QR */}
      {!scanning && !confirmed && (
        <div className="qr-card">
          <div className="qr-icon">🔳</div>
          <h3>My QR Code</h3>
          <p>Receive money easily. Share your QR code to get paid.</p>

          <div className="my-qr-box">
            <div className="fake-qr">QR</div>
            <small>{currentUser.accountNumber}</small>
          </div>

          <div className="qr-actions">
            <button
              className="qr-btn outline"
              onClick={() =>
                alert("QR shared (simulated)")
              }
            >
              Share QR
            </button>

            <button
              className="qr-btn outline"
              onClick={() =>
                alert("QR downloaded (simulated)")
              }
            >
              Download
            </button>
          </div>
        </div>
      )}

      {/* INFO */}
      <div className="qr-info">
        <span>🔒</span>
        <p>
          Always confirm payment details before completing a QR transaction.
        </p>
      </div>

    </PageLayout>
  );
}




// import PageLayout from "./PageLayout";
// import { useBank } from "./Bankcontext";

// export default function QRPayment({ goBack }) {
//   const { currentUser } = useBank();

//   return (
//     <PageLayout title="QR Payments" goBack={goBack}>
      
//       {/* SCAN QR */}
//       <div className="qr-card primary">
//         <div className="qr-icon">📷</div>
//         <h3>Scan QR Code</h3>
//         <p>Pay merchants and individuals instantly by scanning a QR code</p>

//         <button className="qr-btn primary">
//           Scan QR Code
//         </button>
//       </div>

//       {/* MY QR */}
//       <div className="qr-card">
//         <div className="qr-icon">🔳</div>
//         <h3>My QR Code</h3>
//         <p>
//           Receive money easily. Share your QR code with anyone to get paid.
//         </p>

//         <div className="my-qr-box">
//           <div className="fake-qr">QR</div>
//           <small>{currentUser.accountNumber}</small>
//         </div>

//         <div className="qr-actions">
//           <button className="qr-btn outline">Share QR</button>
//           <button className="qr-btn outline">Download</button>
//         </div>
//       </div>

//       {/* INFO */}
//       <div className="qr-info">
//         <span>🔒</span>
//         <p>
//           Always confirm payment details before completing a QR transaction.
//         </p>
//       </div>

//     </PageLayout>
//   );
// }

