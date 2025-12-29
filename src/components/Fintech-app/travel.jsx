import { useState } from "react";
import PageLayout from "./PageLayout";
import { useBank } from "./Bankcontext";

export default function Travel({ goBack }) {
  const { debit } = useBank();

  const [service, setService] = useState(null);
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [success, setSuccess] = useState(false);

  const services = {
    flight: "Flight Booking",
    hotel: "Hotel Reservation",
    leisure: "Leisure & Events",
    visa: "Visa & Travel Assistance",
  };

  const handlePay = () => {
    if (!amount || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    debit(Number(amount), `${services[service]} payment`);
    setSuccess(true);
  };

  return (
    <PageLayout title="Travel & Leisure" goBack={goBack}>
      
      {/* HERO */}
      {!service && !success && (
        <div className="travel-hero">
          <h3>Plan Your Trips Seamlessly</h3>
          <p>
            Book flights, reserve hotels and pay for leisure services directly
            from your account.
          </p>
        </div>
      )}

      {/* SERVICES */}
      {!service && !success && (
        <div className="travel-list">
          <TravelItem
            icon="✈️"
            title="Flight Booking"
            text="Search and pay for local & international flights"
            onClick={() => setService("flight")}
          />

          <TravelItem
            icon="🏨"
            title="Hotel Reservation"
            text="Book hotels and short stays worldwide"
            onClick={() => setService("hotel")}
          />

          <TravelItem
            icon="🎟️"
            title="Leisure & Events"
            text="Pay for events, tours and relaxation packages"
            onClick={() => setService("leisure")}
          />

          <TravelItem
            icon="🛂"
            title="Visa & Travel Assistance"
            text="Access visa support and travel help services"
            onClick={() => setService("visa")}
          />
        </div>
      )}

      {/* BOOKING FORM */}
      {service && !success && (
        <div className="qr-card">
          <h3>{services[service]}</h3>

          <input
            placeholder="Enter details (destination, hotel name, package)"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button className="qr-btn primary" onClick={handlePay}>
            Pay ₦{amount || "0"}
          </button>

          <button
            className="qr-btn outline"
            onClick={() => setService(null)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="qr-card primary">
          <div className="qr-icon">✅</div>
          <h3>Payment Successful</h3>
          <p>
            Your {services[service]} request has been processed successfully.
          </p>

          <button
            className="qr-btn primary"
            onClick={goBack}
          >
            Done
          </button>
        </div>
      )}

      {/* INFO */}
      {!success && (
        <div className="travel-info">
          <span>🔒</span>
          <p>
            Payments are processed securely through trusted travel partners.
          </p>
        </div>
      )}

    </PageLayout>
  );
}

/* Reusable Item */
function TravelItem({ icon, title, text, onClick }) {
  return (
    <div className="travel-item" onClick={onClick}>
      <span className="travel-icon">{icon}</span>
      <div className="travel-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <span className="chevron">›</span>
    </div>
  );
}

// import PageLayout from "./PageLayout";

// export default function Travel({ goBack }) {
//   return (
//     <PageLayout title="Travel & Leisure" goBack={goBack}>
      
//       {/* HERO */}
//       <div className="travel-hero">
//         <h3>Plan Your Trips Seamlessly</h3>
//         <p>
//           Book flights, reserve hotels and pay for leisure services directly
//           from your account.
//         </p>
//       </div>

//       {/* SERVICES */}
//       <div className="travel-list">

//         <div className="travel-item">
//           <span className="travel-icon">✈️</span>
//           <div className="travel-text">
//             <h4>Flight Booking</h4>
//             <p>Search and pay for local & international flights</p>
//           </div>
//           <span className="chevron">›</span>
//         </div>

//         <div className="travel-item">
//           <span className="travel-icon">🏨</span>
//           <div className="travel-text">
//             <h4>Hotel Reservation</h4>
//             <p>Book hotels and short stays worldwide</p>
//           </div>
//           <span className="chevron">›</span>
//         </div>

//         <div className="travel-item">
//           <span className="travel-icon">🎟️</span>
//           <div className="travel-text">
//             <h4>Leisure & Events</h4>
//             <p>Pay for events, tours and relaxation packages</p>
//           </div>
//           <span className="chevron">›</span>
//         </div>

//         <div className="travel-item">
//           <span className="travel-icon">🛂</span>
//           <div className="travel-text">
//             <h4>Visa & Travel Assistance</h4>
//             <p>Access visa support and travel help services</p>
//           </div>
//           <span className="chevron">›</span>
//         </div>

//       </div>

//       {/* INFO */}
//       <div className="travel-info">
//         <span>🔒</span>
//         <p>
//           Payments are processed securely through trusted travel partners.
//         </p>
//       </div>

//     </PageLayout>
//   );
// }





















// // import PageLayout from "./PageLayout"
// // export default function Travel({ goBack }) {
// //   return (
// //     <PageLayout title="Travel & Leisure" goBack={goBack}>
// //       <button className="primary">Book Flight</button>
// //       <button className="secondary">Hotel Reservation</button>
// //     </PageLayout>
// //   );
// // }
