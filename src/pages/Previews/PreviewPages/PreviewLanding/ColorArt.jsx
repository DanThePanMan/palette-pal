import { paletteContext } from "../../../CnR";
import { useContext } from "react";

function ColorArt() {
    const [palette, setPalette] = useContext(paletteContext);

    function convertStyle(code) {
        return {
            backgroundColor: `${code}`,
        };
    }

    return (
        <div
            className="hidden md:flex h-64 xl:h-72 w-80 md:w-96 xl:w-[31rem] rounded-2xl border border-neutral-400 transition-all ease-in-out overflow-clip"
            style={convertStyle(palette.lightShades)}>
            
        </div>
    );
}

export default ColorArt