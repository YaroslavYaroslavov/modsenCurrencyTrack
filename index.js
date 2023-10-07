import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./src/components/App/index.jsx";
import ErrorBoundary from "./src/components/ErrorBoundary/index.jsx";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
