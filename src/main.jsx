import React from "react";
import ReactDOM from "react-dom/client";
import CnR from "./pages/CnR";
import "./index.css";
import colors from "./assets/Colors.json";

import "@fontsource-variable/inter"; // Defaults to wght axis

export const metadata= {
    title: "Palette Pal",
    description: "Palette Preview Website for Developers",
    verification: {
        google: "hqFWAE_WkJ72t_igZExyr70EomLrstuM1Q9SHD7d5cI",
    },
};


if (sessionStorage.getItem("defaultData") === null) {
    sessionStorage.setItem("defaultData", JSON.stringify(colors));
    console.log("set default");
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CnR />
    </React.StrictMode>
);
