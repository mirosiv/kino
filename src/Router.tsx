import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import FilmPage from "./components/FilmCard/FilmCard";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path={"/about"} element={<Layout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path={"/contacts"} element={<Layout />}>
          <Route index element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
