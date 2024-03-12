import { Link } from "react-router-dom";
import LogoIcon from "@assets/logo.svg";
export const Logo = () => {
  return (
    <Link to="/">
      <img className="mx-auto" src={LogoIcon} alt="logo" />
    </Link>
  );
};
