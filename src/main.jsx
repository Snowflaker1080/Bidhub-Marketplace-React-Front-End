import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./state/AuthContext.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/bidhub/marketplace">
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
