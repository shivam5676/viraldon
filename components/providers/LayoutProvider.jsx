import Navigation from "../navigation/navigation";

export default function LayoutProvider({ children }) {
  return (
    <div className="main-app">
      <div className="navbar">
        <Navigation />
      </div>
      <div className="main-body">{children}</div>
    </div>
  );
}
