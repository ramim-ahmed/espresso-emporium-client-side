import navBackgroundImage from "../assets/nav-bg.png";
import logo from "../assets/logo.png";
export default function Nav() {
  return (
    <nav
      style={{ backgroundImage: `url(${navBackgroundImage})` }}
      className="h-20 object-cover object-center flex justify-center items-center"
    >
      <div>
        <img src={logo} className="w-72" alt="" />
      </div>
    </nav>
  );
}
