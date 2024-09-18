import { paletteContext } from "../../../CnR";
import { useContext } from "react";
import { convertStyleDiv } from "../../Convert";

function ColorArt() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div
            className="hidden md:grid md:grid-rows-4 md:grid-cols-3 h-64 xl:h-72 w-80 md:w-96 xl:w-[31rem] rounded-2xl transition-all ease-in-out overflow-clip gap-4">
            <div className="item row-span-2 col-span-1 rounded-md" style={convertStyleDiv(palette.lightAccent)}></div>
            <div className="item row-span-2 col-span-2 rounded-md" style={convertStyleDiv(palette.mainBrand)}></div>
            <div className="item row-span-3 col-span-2 rounded-md" style={convertStyleDiv(palette.darkAccent)}></div>
            <div className="item row-span-3 col-span-1 rounded-md" style={convertStyleDiv(palette.darkShades)}></div>
        </div>
    );
}

export default ColorArt