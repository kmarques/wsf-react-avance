export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgcolor,
        color: props.color,
        borderRadius: props.rounded ? "50%" : "0",
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
