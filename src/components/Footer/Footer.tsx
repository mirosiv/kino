import { FC } from "react";
import footer from '../Footer/footer.module.css'

const Footer: FC = () => {

    let date = new Date()

    return(
        <footer>
            <p className={footer.footer}>
                {date.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;