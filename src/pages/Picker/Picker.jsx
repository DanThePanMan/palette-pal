import PaletteGenbtn from "./PaletteGenBtn";
import Palette from "./Palette";
import { useState } from "react";
import { paletteContext } from "../CnR";
import { useContext } from "react";
import ButtonNoColor from "../../components/ButtonNoColor";

function Picker() {
    const [palette, setPalette] = useContext(paletteContext);

    console.log("this is from the picker component");
    console.table(palette)
   

    const [getParam, setParam] = useState({
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: [[243, 244, 243], "N", "N", "N", "N"],
        }),
    });

    const [allCodes, setAllCodes] = useState("Copy Codes")

    async function getAllCodeshandler(){
        setAllCodes("Code Copied");
        const copiedText = JSON.stringify(palette);
        await navigator.clipboard.writeText(copiedText);
    }

    return (
        <main className="flex flex-col justify-center items-center w-[100%] md:m-24 md:mt-8 m-10 h-[60vh] gap-10 md:gap-24 md:h-[calc(100vh-24rem)]">
            <h1 className="font-bold text-xl md:text-5xl ">
                Palette Generator
            </h1>
            <Palette/>
            <div className="flex flex-row gap-6">
                <PaletteGenbtn params={getParam} codes={setAllCodes}></PaletteGenbtn>
                <ButtonNoColor onClick = {() => getAllCodeshandler()} text={allCodes}></ButtonNoColor>
                <a href="preview"><ButtonNoColor text="Preview"></ButtonNoColor></a>
            </div>
        </main>
    );
}

export default Picker;
