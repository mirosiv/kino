import { Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import layout from '../Layout/layout.module.css'

export const Layout = () => {

  return (
    <div className={layout.main_layout}>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div >
  );
};

