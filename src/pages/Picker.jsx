import PaletteGenbtn from "../components/PaletteGenBtn";
import Palette from "../components/Palette";
import { useState } from "react";
import ButtonNoColor from "../components/ButtonNoColor";

function Picker() {
    const [getParam, setParam] = useState({
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: [[243, 244, 243], "N", "N", "N", "N"],
        }),
    });

    return (
        <main className="flex flex-col justify-center items-center w-[100%] md:m-24 md:mt-8 m-10 h-[60vh] gap-10 md:gap-24 md:h-[calc(100vh-24rem)]">
            <h1 className="font-bold text-xl md:text-5xl ">
                Palette Generator
            </h1>
            <Palette getaParam={getParam} setParam={setParam}></Palette>
            <div className="flex flex-row gap-6">
                <PaletteGenbtn params={getParam}></PaletteGenbtn>
                <ButtonNoColor text="Preview"></ButtonNoColor>
            </div>
        </main>
    );
}

export default Picker;
