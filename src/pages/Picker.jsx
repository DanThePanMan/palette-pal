import PaletteGenbtn from "../components/PaletteGenBtn";
import Palette from "../components/Palette";
import { useState } from "react";

function Picker() {
    const [getParam, setParam] = useState({
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: [[243,244,243], "N", "N", "N", "N"],
        }),
    })


    return (
        <main className="flex flex-col justify-center items-center w-[100%] m-24 gap-24 h-[calc(100vh-24rem)]">
            <h1 className="font-bold text-5xl">Palette Generator</h1>
            <Palette getaParam = {getParam} setParam = {setParam}></Palette>
            <PaletteGenbtn params={getParam}></PaletteGenbtn>
        </main>
    );
}

export default Picker;
