import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
        <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={10}
      toastOptions={{
        duration: 3000,

        style: {
          background: "#181818",
          color: "#fff",
          border: "1px solid #2a2a2a",
          borderRadius: "16px",
          padding: "16px",
          fontSize: "15px",
          maxWidth: "420px",
        },

        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}

      containerStyle={{
        top: 20,
        right: 20,
        left: 20,
      }}
    />
    </BrowserRouter>
  </React.StrictMode>
);