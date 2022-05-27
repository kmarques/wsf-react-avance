import ThemedButton from "../lib/ThemedButton";

export default function NavLink({ title, href }) {
  return (
    <a href={href} target="_blank">
      <ThemedButton inverted={true} title={title} />
    </a>
  );
}
