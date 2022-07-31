import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import esES from "antd/lib/locale/es_ES";
import moment from "moment";
import "moment/locale/es";
import Rutas from "./routes/Rutas";

moment.locale("es");

const root = document.getElementById("root");

root &&
  ReactDOM.createRoot(root).render(
    <ConfigProvider locale={esES} >
      <Rutas />
    </ConfigProvider>
  );
