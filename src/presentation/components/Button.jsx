export default function Button({ customClassName, title = "" }) {
  return <button className={customClassName}>{title}</button>;
}
