export default function Button({
  customClassName,
  title = "",
  onClick,
  label,
}) {
  return (
    <button className={customClassName} onClick={onClick} aria-label={label}>
      {title}
    </button>
  );
}
