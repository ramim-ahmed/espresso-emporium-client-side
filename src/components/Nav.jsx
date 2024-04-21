import navBackgroundImage from "../assets/nav-bg.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav
      style={{ backgroundImage: `url(${navBackgroundImage})` }}
      className="h-20 object-cover object-center flex justify-center items-center"
    >
      <div>
        <Link to="/">
          <img src={logo} className="w-72" alt="" />
        </Link>
      </div>
    </nav>
  );
}
