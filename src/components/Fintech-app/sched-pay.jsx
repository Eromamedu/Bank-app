import PageLayout from "./PageLayout"
export default function Scheduled({ goBack }) {
  return (
    <PageLayout title="Scheduled Payments" goBack={goBack}>
      <p>No scheduled payments</p>
      <button className="primary">Create New</button>
    </PageLayout>
  );
}
