import PageLayout from "./PageLayout"

export default function Settings({ goBack }) {
  return (
    <PageLayout title="Settings" goBack={goBack}>
      <button>Change PIN</button>
      <button>Security</button>
      <button>Logout</button>
    </PageLayout>
  );
}
