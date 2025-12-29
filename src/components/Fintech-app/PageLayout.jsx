export default function PageLayout({ title, goBack, children }) {
  return (
    <div className="page" style={{backgroundColor:"white"}}>
      <header className="page-header">
        <span onClick={goBack}>←</span>
        <h3>{title}</h3>
      </header>

      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
