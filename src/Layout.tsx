import React from "react";
import SortingArrayPage from "./components/SortingArrayPage";
import HomePage from "./components/HomePage";
import PrimaChecker from "./components/CariPrima";
import CrudKtp from "./components/CrudDataKtp";
import { Route, Routes } from "react-router-dom";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sorting-page" element={<SortingArrayPage />} />
      <Route path="/cari-prima" element={<PrimaChecker />} />
      <Route path="/crud-ktp" element={<CrudKtp />} />
    </Routes>
  );
};

export default Layout;
