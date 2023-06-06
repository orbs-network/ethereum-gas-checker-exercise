import React from "react";
import { createRoot } from "react-dom/client";
import { Application } from "./components/Application";

const rootElement = document.getElementById("app");
const app = <Application />;

createRoot(rootElement).render(app);
