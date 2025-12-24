import PageLayout from "./PageLayout"
export default function Cards({ goBack }) {
  return (
    <PageLayout title="Cards" goBack={goBack}>
      <button className="primary">Freeze Card</button>
      <button className="secondary">Request New Card</button>
    </PageLayout>
  );
}
