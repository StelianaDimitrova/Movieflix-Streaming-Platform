import NavBar from "../components/NavBar";

import Home from "../pages/Home.jsx";
import TVShows from "../pages/TVShows";
import Movies from "../pages/Movies";
import { Route, Routes } from "react-router-dom";
import SocialAccounts from "../components/SocialAccounts.jsx";

import classes from "./MainLayout.module.css";
export default function MainLayout() {
  return (
    <>
      <header className={classes.header}>
        <NavBar />
      </header>
      <main className={classes.mainSection}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <footer>
        <SocialAccounts />
      </footer>
    </>
  );
}
