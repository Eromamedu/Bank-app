import { useState } from "react";
import PageLayout from "./PageLayout";

export default function Cards({ goBack }) {
  const [frozen, setFrozen] = useState(false);

  return (
    <PageLayout title="Cards" goBack={goBack}>

      {/* CARD PREVIEW */}
      <div className="bank-card">
        <p className="card-type">Debit Card</p>
        <h3 className="card-number">**** **** **** 4521</h3>
        <div className="card-footer">
          <span>VALID THRU</span>
          <strong>08/28</strong>
        </div>
      </div>

      {/* CARD STATUS */}
      <div className="card-status">
        <span>Status</span>
        <strong className={frozen ? "danger" : "success"}>
          {frozen ? "Frozen" : "Active"}
        </strong>
      </div>

      {/* QUICK ACTION */}
      <button
        className={frozen ? "secondary" : "danger-btn"}
        onClick={() => setFrozen(!frozen)}
      >
        {frozen ? "Unfreeze Card" : "Freeze Card"}
      </button>

      {/* MANAGEMENT */}
      <div className="card-actions">

        <div className="card-action">
          <span>🔐</span>
          <p>Change Card PIN</p>
        </div>

        <div className="card-action">
          <span>💳</span>
          <p>Card Spending Limits</p>
        </div>

        <div className="card-action">
          <span>📦</span>
          <p>Request Replacement</p>
        </div>

        <div className="card-action danger">
          <span>⛔</span>
          <p>Block Card</p>
        </div>

      </div>

    </PageLayout>
  );
}



















// import PageLayout from "./PageLayout"
// export default function Cards({ goBack }) {
//   return (
//     <PageLayout title="Cards" goBack={goBack}>
//       <button className="primary">Freeze Card</button>
//       <button className="secondary">Request New Card</button>
//     </PageLayout>
//   );
// }
