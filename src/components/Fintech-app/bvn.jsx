import PageLayout from "./PageLayout"
export default function BVN({ goBack }) {
  return (
    <PageLayout title="My BVN" goBack={goBack}>
      <p>Your BVN</p>
      <h2>***********</h2>
    </PageLayout>
  );
}
