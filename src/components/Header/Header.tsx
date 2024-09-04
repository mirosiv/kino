import { FC} from "react";
import Logo from "./HeaderContent/Logo/Logo";
import Search from "./HeaderContent/Search/Search";
import Menu from "./HeaderContent/Menu/Menu";
import header from "./header.module.css"

const Header:FC = ()  => {

    return(
        <header className={header.inp_div}>
            <Logo />
            <Search />
            <Menu />
        </header>
    )
}

export default Header;