export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        borderRadius: props.rounded ? "50%" : "0",
      }}
    >
      {props.title}
    </button>
  );
}
