import { createContext } from "react";
import Header from "./Header.jsx";
import Picker from "../pages/Picker.jsx";
import Landing from "../pages/Landing.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer.jsx";

const paletteContext = createContext();

function CnR() {
    const [palette, setPalette] = useState({
        "lightShades": [255, 255, 255],
        "lightAccent": [130, 130, 130],
        "mainBrand": [45, 45, 45],
        "darkAccent": [237, 237, 237],
        "darkShades": [45, 45, 45],
    });

    return (
        <paletteContext.Provider value={[palette, setPalette]}>
            <Header />
            <RouterProvider router={router} />
            <Footer/>
        </paletteContext.Provider>
    );
    
}
export{paletteContext};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
      path: "picker",
      element: <Picker />,
    },
]);

export default CnR;