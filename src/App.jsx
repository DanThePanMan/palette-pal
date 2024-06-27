import { useState } from "react";

import "./App.css";
import PaletteGenbtn from "./components/PaletteGenBtn";

function App() {
    const data = {
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
        }),
    };



    return (
        <>
            <PaletteGenbtn params={data}></PaletteGenbtn>
        </>
    );
}

export default App;
