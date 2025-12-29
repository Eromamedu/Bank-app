import PageLayout from "./PageLayout";

export default function Scheduled({ goBack }) {
  return (
    <PageLayout title="Scheduled Payments" goBack={goBack}>

      {/* EMPTY STATE */}
      <div className="scheduled-empty">
        <div className="scheduled-icon">⏱️</div>
        <h3>No Scheduled Payments</h3>
        <p>
          You currently have no scheduled payments.
          Set up a payment to be processed automatically
          at a future date.
        </p>

        <button className="scheduled-btn">
          + Create Scheduled Payment
        </button>
      </div>

      {/* INFO */}
      <div className="scheduled-info">
        <span>ℹ️</span>
        <span>
          Scheduled payments help you pay bills, subscriptions
          and transfers automatically without missing deadlines.
        </span>
      </div>

    </PageLayout>
  );
}





























// import PageLayout from "./PageLayout"
// export default function Scheduled({ goBack }) {
//   return (
//     <PageLayout title="Scheduled Payments" goBack={goBack}>
//       <p>No scheduled payments</p>
//       <button className="primary">Create New</button>
//     </PageLayout>
//   );
// }
