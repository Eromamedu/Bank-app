import PageLayout from "./PageLayout";

export default function Travel({ goBack }) {
  return (
    <PageLayout title="Travel & Leisure" goBack={goBack}>
      
      {/* HERO */}
      <div className="travel-hero">
        <h3>Plan Your Trips Seamlessly</h3>
        <p>
          Book flights, reserve hotels and pay for leisure services directly
          from your account.
        </p>
      </div>

      {/* SERVICES */}
      <div className="travel-list">

        <div className="travel-item">
          <span className="travel-icon">✈️</span>
          <div className="travel-text">
            <h4>Flight Booking</h4>
            <p>Search and pay for local & international flights</p>
          </div>
          <span className="chevron">›</span>
        </div>

        <div className="travel-item">
          <span className="travel-icon">🏨</span>
          <div className="travel-text">
            <h4>Hotel Reservation</h4>
            <p>Book hotels and short stays worldwide</p>
          </div>
          <span className="chevron">›</span>
        </div>

        <div className="travel-item">
          <span className="travel-icon">🎟️</span>
          <div className="travel-text">
            <h4>Leisure & Events</h4>
            <p>Pay for events, tours and relaxation packages</p>
          </div>
          <span className="chevron">›</span>
        </div>

        <div className="travel-item">
          <span className="travel-icon">🛂</span>
          <div className="travel-text">
            <h4>Visa & Travel Assistance</h4>
            <p>Access visa support and travel help services</p>
          </div>
          <span className="chevron">›</span>
        </div>

      </div>

      {/* INFO */}
      <div className="travel-info">
        <span>🔒</span>
        <p>
          Payments are processed securely through trusted travel partners.
        </p>
      </div>

    </PageLayout>
  );
}





















// import PageLayout from "./PageLayout"
// export default function Travel({ goBack }) {
//   return (
//     <PageLayout title="Travel & Leisure" goBack={goBack}>
//       <button className="primary">Book Flight</button>
//       <button className="secondary">Hotel Reservation</button>
//     </PageLayout>
//   );
// }
