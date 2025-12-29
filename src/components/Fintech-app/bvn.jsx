import PageLayout from "./PageLayout";
import { useState } from "react";

export default function BVN({ goBack }) {
  const [showBVN, setShowBVN] = useState(false);

  return (
    <PageLayout title="My BVN" goBack={goBack}>
      
      {/* BVN CARD */}
      <div className="bvn-card">
        <div className="bvn-header">
          <span className="bvn-icon">🆔</span>
          <div>
            <h3>Bank Verification Number</h3>
            <p>Your BVN is securely linked to your account</p>
          </div>
        </div>

        <div className="bvn-number">
          {showBVN ? "221 458 903 17" : "••• ••• ••• ••"}
        </div>

        <button
          className="bvn-toggle"
          onClick={() => setShowBVN(!showBVN)}
        >
          {showBVN ? "Hide BVN" : "Show BVN"}
        </button>
      </div>

      {/* INFO */}
      <div className="bvn-info">
        <span>🔒</span>
        <p>
          Your BVN is confidential. Do not share it with anyone to
          prevent fraud and identity theft.
        </p>
      </div>

    </PageLayout>
  );
}

























// import PageLayout from "./PageLayout"
// export default function BVN({ goBack }) {
//   return (
//     <PageLayout title="My BVN" goBack={goBack}>
//       <p>Your BVN</p>
//       <h2>***********</h2>
//     </PageLayout>
//   );
// }
