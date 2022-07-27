import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Usuario from "../Pages/Usuario/index.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" caseSensitive={false} element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
