import PageLayout from "./PageLayout";

export default function EazyLinks({ goBack }) {
  return (
    <PageLayout title="Customize eaZylinks" goBack={goBack}>

      {/* INTRO CARD */}
      <div className="eazy-card">
        <h3>Personalize Your Dashboard</h3>
        <p>
          Choose the shortcuts you want to see on your dashboard
          for faster access to frequently used services.
        </p>
      </div>

      {/* SHORTCUT LIST */}
      <div className="eazy-list">

        <div className="eazy-item">
          <span>📱</span>
          <p>Airtime & Data</p>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="eazy-item">
          <span>💸</span>
          <p>Transfers</p>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="eazy-item">
          <span>📺</span>
          <p>Cable TV</p>
          <input type="checkbox" />
        </div>

        <div className="eazy-item">
          <span>✈️</span>
          <p>Travel & Leisure</p>
          <input type="checkbox" />
        </div>

        <div className="eazy-item">
          <span>💳</span>
          <p>Cards</p>
          <input type="checkbox" />
        </div>

        <div className="eazy-item">
          <span>📅</span>
          <p>Scheduled Payments</p>
          <input type="checkbox" />
        </div>

      </div>

      {/* SAVE BUTTON */}
      <button className="eazy-save">
        Save Changes
      </button>

      {/* INFO */}
      <div className="eazy-info">
        ℹ️ Changes will reflect immediately on your dashboard.
      </div>

    </PageLayout>
  );
}






















// import PageLayout from "./PageLayout"
// export default function EazyLinks({ goBack }) {
//   return (
//     <PageLayout title="Customize eaZylinks" goBack={goBack}>
//       <p>Rearrange dashboard shortcuts</p>
//     </PageLayout>
//   );
// }
