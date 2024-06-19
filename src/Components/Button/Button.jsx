import "./Button.css";

export default function Button({
  children,
  type = "button",
  onClick,
  text = "Button",
  style,
}) {
  return (
    <button type={type} className="button" onClick={onClick} style={style}>
      {text} {children}
    </button>
  );
}
