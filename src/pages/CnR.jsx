import { createContext } from "react";
import Header from "../components/Header.jsx";
import Picker from "./Picker/Picker.jsx";
import Landing from "./Landing/Landing.jsx";
import PreviewIndex from "./Previews/PreviewIndex.jsx";
import BootstrapIndex from "./Bootstrap/BootstrapIndex.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer.jsx";
import HeaderSidebar from "../components/HeaderSidebar.jsx";
import UpcomingFeatures from "../pages/UpcomingFeatures/UpcomingFeatures.jsx"

const paletteContext = createContext();

function CnR() {
    const [sidebar, setSidebar] = useState(false);

    const storedData = sessionStorage.getItem("defaultData");

    const [palette, setPalette] = useState(JSON.parse(storedData));

    return (
        <paletteContext.Provider value={[palette, setPalette]}>
            {sidebar ? (
                <HeaderSidebar sidebar={sidebar} setSidebar={setSidebar} />
            ) : null}
            <Header setSidebar={setSidebar} />
            <RouterProvider router={router} />
            <Footer />
        </paletteContext.Provider>
    );
}
export { paletteContext };

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "Picker",
        element: <Picker />,
    },
    {
        path: "Preview",
        element: <PreviewIndex />,
    },
    {
        path: "Bootstrap",
        element: <BootstrapIndex />,
    },
    {
        path: "UpcomingFeatures",
        element: <UpcomingFeatures />,
    },
]);

export default CnR;
