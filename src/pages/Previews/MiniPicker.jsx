import MiniPickerPalette from "./MiniPickerPalette";
import { useState } from "react";
import { paletteContext } from "../CnR";
import { useContext } from "react";
import PaletteGenbtn from "../Picker/PaletteGenBtn";


function MiniPicker() {
    const [palette, setPalette] = useContext(paletteContext);

    const [getParam, setParam] = useState({
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: [[243, 244, 243], "N", "N", "N", "N"],
        }),
    });


    


    return (
        <div className="bg-[#2D2D2D] w-[100%] h-14 flex flex-row justify-center items-center gap-4">
            <p className="text-white font-medium text-lg">Currently Previewing:</p>
            <MiniPickerPalette></MiniPickerPalette>
            <PaletteGenbtn params={getParam}></PaletteGenbtn>
        </div>
    );
}

export default MiniPicker;
