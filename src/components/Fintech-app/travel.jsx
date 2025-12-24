import PageLayout from "./PageLayout"
export default function Travel({ goBack }) {
  return (
    <PageLayout title="Travel & Leisure" goBack={goBack}>
      <button className="primary">Book Flight</button>
      <button className="secondary">Hotel Reservation</button>
    </PageLayout>
  );
}
