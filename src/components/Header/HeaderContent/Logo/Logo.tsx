import { FC } from "react";
import logo from "../Logo/logo.module.css";
import pic from "../../../Assets/Pic.png";
import { Link} from "react-router-dom";
import MainPage from "../../../MainPage/MainPage";

const Logo: FC = () => {

  return (
    <Link to={"/"}>
      <img src={pic} className={logo.pic} />
    </Link>
  );
};

export default Logo;
