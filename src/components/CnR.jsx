import { createContext } from "react";
import Header from "./Header.jsx";
import Picker from "../pages/Picker.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";

const paletteContext = createContext();

function CnR() {
    const [palette, setPalette] = useState({
        "light shades": [255, 255, 255],
        "light accent": [130, 130, 130],
        "main brand": [45, 45, 45],
        "dark accent": [237, 237, 237],
        "dark shades": [45, 45, 45],
    });

    return (
        <paletteContext.Provider value={[palette, setPalette]}>
            <Header />
            <RouterProvider router={router} />
        </paletteContext.Provider>
    );
    
}
export{paletteContext};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Picker />,
    },
    // {
    //   path: "profile",
    //   element: <Profile />,
    // },
]);

export default CnR;