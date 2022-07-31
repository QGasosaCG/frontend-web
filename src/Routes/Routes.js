import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Usuario from "../Pages/Usuario/index.js";
import Login from "../Pages/Login/index.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" caseSensitive={false} element={<Usuario />} />
        <Route path="/login" caseSensitive={false} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
