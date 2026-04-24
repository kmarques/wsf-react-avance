import TP3Admin from "./TP3_Admin";
import TP3Visitor from "./TP3_Visitor";

export default function TP3({ user, theme }) {
  return (
    <div>
      <h1>TP3</h1>
      {user && <TP3Admin />}
      {!user && <TP3Visitor />}
    </div>
  );
}
