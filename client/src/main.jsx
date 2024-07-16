import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./_libs/routes/index.jsx";
import TanstackProvider from "./_libs/services/providers/TanstackProvider.jsx";
import { ReduxStoreProvider } from "./_libs/services/providers/ReduxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxStoreProvider>
      <TanstackProvider>
        <RouterProvider router={router} />
      </TanstackProvider>
    </ReduxStoreProvider>
  </React.StrictMode>
);
