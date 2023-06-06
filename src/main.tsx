import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import "./styles/reset.scss";
import "./styles/theme.scss";

const rootElement = document.getElementById("app");
const app = <App />;

createRoot(rootElement).render(app);
