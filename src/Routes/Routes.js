import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Usuario from "../Pages/Usuario/index.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" caseSensitive={false} element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
