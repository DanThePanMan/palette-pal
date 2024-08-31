import React from "react";
import ReactDOM from "react-dom/client";
import CnR from "./pages/CnR";
import "./index.css";
import colors from "./assets/Colors.json";

import "@fontsource-variable/inter"; // Defaults to wght axis



if (sessionStorage.getItem("defaultData") === null) {
    sessionStorage.setItem("defaultData", JSON.stringify(colors));
    console.log("set default");
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CnR />
    </React.StrictMode>
);
