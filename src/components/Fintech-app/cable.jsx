import { useState } from "react";
import PageLayout from "./PageLayout";

export default function CableTV({ goBack }) {
  const [provider, setProvider] = useState("dstv");

  return (
    <PageLayout title="Cable TV" goBack={goBack}>
      
      {/* PROVIDER */}
      <div className="cable-section">
        <label className="field-label">Service Provider</label>

        <div className="provider-grid">
          <div
            className={`provider-card ${provider === "dstv" ? "active" : ""}`}
            onClick={() => setProvider("dstv")}
          >
            <span>📺</span>
            <p>DStv</p>
          </div>

          <div
            className={`provider-card ${provider === "gotv" ? "active" : ""}`}
            onClick={() => setProvider("gotv")}
          >
            <span>📡</span>
            <p>GOtv</p>
          </div>

          <div
            className={`provider-card ${provider === "startimes" ? "active" : ""}`}
            onClick={() => setProvider("startimes")}
          >
            <span>⭐</span>
            <p>StarTimes</p>
          </div>
        </div>
      </div>

      {/* SMARTCARD */}
      <div className="cable-section">
        <label className="field-label">Smartcard / IUC Number</label>
        <input
          placeholder="Enter smartcard number"
        />
        <small className="hint">
          Enter the number on your decoder card
        </small>
      </div>

      {/* PACKAGE */}
      <div className="cable-section">
        <label className="field-label">Bouquet</label>
        <select>
          <option>Select package</option>
          <option>Premium</option>
          <option>Compact Plus</option>
          <option>Compact</option>
          <option>Confam</option>
        </select>
      </div>

      {/* SUMMARY */}
      <div className="summary-card">
        <div>
          <span>Amount</span>
          <strong>₦ 25,000</strong>
        </div>
        <div>
          <span>Service Charge</span>
          <strong>₦ 0</strong>
        </div>
      </div>

      {/* CTA */}
      <button className="primary" style={{backgroundColor:"#c60000"}}>Proceed</button>

    </PageLayout>
  );
}

// import PageLayout from "./PageLayout"
// export default function CableTV({ goBack }) {
//   return (
//     <PageLayout title="Cable TV" goBack={goBack}>
//       <select>
//         <option>DStv</option>
//         <option>GOtv</option>
//         <option>StarTimes</option>
//       </select>

//       <input placeholder="Smartcard Number" />
//       <button className="primary">Proceed</button>
//     </PageLayout>
//   );
// }
