import PageLayout from "./PageLayout"
export default function CableTV({ goBack }) {
  return (
    <PageLayout title="Cable TV" goBack={goBack}>
      <select>
        <option>DStv</option>
        <option>GOtv</option>
        <option>StarTimes</option>
      </select>

      <input placeholder="Smartcard Number" />
      <button className="primary">Proceed</button>
    </PageLayout>
  );
}
