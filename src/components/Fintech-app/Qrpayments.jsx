import PageLayout from "./PageLayout";
import { useBank } from "./Bankcontext";

export default function QRPayment({ goBack }) {
  const { currentUser } = useBank();

  return (
    <PageLayout title="QR Payments" goBack={goBack}>
      
      {/* SCAN QR */}
      <div className="qr-card primary">
        <div className="qr-icon">📷</div>
        <h3>Scan QR Code</h3>
        <p>Pay merchants and individuals instantly by scanning a QR code</p>

        <button className="qr-btn primary">
          Scan QR Code
        </button>
      </div>

      {/* MY QR */}
      <div className="qr-card">
        <div className="qr-icon">🔳</div>
        <h3>My QR Code</h3>
        <p>
          Receive money easily. Share your QR code with anyone to get paid.
        </p>

        <div className="my-qr-box">
          <div className="fake-qr">QR</div>
          <small>{currentUser.accountNumber}</small>
        </div>

        <div className="qr-actions">
          <button className="qr-btn outline">Share QR</button>
          <button className="qr-btn outline">Download</button>
        </div>
      </div>

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

