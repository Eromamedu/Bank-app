import PageLayout from "./PageLayout";

export default function Settings({ goBack }) {
  return (
    <PageLayout title="Settings" goBack={goBack}>

      {/* PROFILE */}
      <div className="settings-card">
        <h4>Profile</h4>

        <div className="settings-item">
          <span>👤</span>
          <p>Update Personal Information</p>
        </div>

        <div className="settings-item">
          <span>📞</span>
          <p>Change Phone Number</p>
        </div>
        <div className="settings-item">
          <span>📧</span>
          <p>Email Preferences</p>
        </div>
      </div>

      {/* SECURITY */}
      <div className="settings-card">
        <h4>Security</h4>

        <div className="settings-item">
          <span>🔐</span>
          <p>Change Transaction PIN</p>
        </div>

        <div className="settings-item">
          <span>🛡️</span>
          <p>Login & Device Management</p>
        </div>

        <div className="settings-item">
          <span>🔔</span>
          <p>Security Alerts</p>
        </div>
      </div>

      {/* PREFERENCES */}
      <div className="settings-card">
        <h4>Preferences</h4>

        <div className="settings-item">
          <span>🌗</span>
          <p>Theme & Display</p>
        </div>

        <div className="settings-item">
          <span>🌍</span>
          <p>Language</p>
        </div>

        <div className="settings-item">
          <span>🔔</span>
          <p>Notification Settings</p>
        </div>
      </div>

      {/* SUPPORT */}
      <div className="settings-card">
        <h4>Support</h4>

        <div className="settings-item">
          <span>❓</span>
          <p>Help & FAQs</p>
        </div>

        <div className="settings-item">
          <span>📄</span>
          <p>Terms & Privacy Policy</p>
        </div>

        <div className="settings-item">
          <span>📍</span>
          <p>Find Branch / ATM</p>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="settings-logout">
        Log Out
      </button>

    </PageLayout>
  );
}





















// import PageLayout from "./PageLayout"
// export default function Settings({ goBack }) {
//   return (
//     <PageLayout title="Settings" goBack={goBack}>
//       <button>Change PIN</button>
//       <button>Security</button>
//       <button>Logout</button>
//     </PageLayout>
//   );
// }
