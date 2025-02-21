export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      {/* for is a keyword in Rectso htmlFor is used below */}
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
