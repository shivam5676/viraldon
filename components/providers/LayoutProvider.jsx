import Footer from "./_components/Footer";
import Navigation from "./_components/navigation";

export default function LayoutProvider({ children }) {
  return (
    <div className="main-app">
      <div className="navbar">
        <Navigation />
      </div>
      <div className="main-body">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
