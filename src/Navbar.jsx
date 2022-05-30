import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar-section">
        <Left />
        <Middle />
        <Right />
      </div>
    </>
  );
}
