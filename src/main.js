import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Provider } from "./components/ui/provider";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Provider, { children: _jsx(App, {}) }) }));
