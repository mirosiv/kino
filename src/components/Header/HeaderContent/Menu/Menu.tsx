import { FC } from "react";
import menu from "../Menu/menu.module.css";
import { Link } from "react-router-dom";

const Menu: FC = () => {
  return (
    <ul className={menu.head_ul}>
      <Link to={"/about"} className={menu.head_li}>
        <li>О приложении</li>
      </Link>
      <Link to={"/contacts"} className={menu.head_li}>
        <li>Github</li>
      </Link>
    </ul>
  );
};

export default Menu;
