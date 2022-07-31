import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../views/App";
import Prueba from "../views/Prueba";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
