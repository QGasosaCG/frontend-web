import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Pages/Login/index.js";
import Usuario from "../Pages/Usuario/index.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/home" caseSensitive={false} element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
