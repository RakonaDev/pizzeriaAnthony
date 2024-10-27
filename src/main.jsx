import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext.jsx";

createRoot(document.getElementById("root")).render(
  <CarritoProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </CarritoProvider>
);
