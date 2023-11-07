import "./ActionPanelStyle.css";
export function ActionPanel({ children, handleChange, name }) {
  return (
    <div className="actionPanel" onClick={() => handleChange(name)}>
      {children}
    </div>
  );
}
