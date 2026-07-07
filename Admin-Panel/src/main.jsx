import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={12}
  containerStyle={{
    top: 20,
    right: 20,
    left: 20, // Prevents clipping on small screens
  }}
  toastOptions={{
    duration: 3000,

    style: {
      background: "#181818",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "16px",
      maxWidth: "420px",
      width: "100%",
      boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
      fontSize: "15px",
    },

    success: {
      iconTheme: {
        primary: "#22c55e",
        secondary: "#ffffff",
      },
    },

    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    },
  }}
/>
    </BrowserRouter>
  </React.StrictMode>
);