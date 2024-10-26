import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
            <App />
);
