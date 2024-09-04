import { FC } from "react";
import contactsPage from "./contactsPage.module.css"


const ContactsPage:FC = () => {

    return(
        <div className={contactsPage.firstDiv}>
            <a href="https://github.com/mirosiv">Github account</a>
        </div>
    )
}

export default ContactsPage;