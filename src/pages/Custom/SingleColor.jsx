import { useContext, useState } from "react";
import { convertStyleDiv } from "../Previews/Convert";
import { paletteContext } from "../CnR";

function SingleColor(props) {
    const [palette, setPalette] = useContext(paletteContext);
    const [color, setColor] = useState("#ffffff");

    function hexToRgb(hex) {
        hex = hex.replace(/^#/, "");
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return [r, g, b];
    }

    return (
        <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-[#828282]">{props.color}:</p>
            <div
                id={0}
                className="w-80 h-12 sm:w-80 sm:h-20 md:w-24 md:h-80 xl:w-[150px] xl:h-[430px] transition-all ease-in-out rounded-lg hover:opacity-55 border border-s-gray-200"
                style={convertStyleDiv(palette[props.color])}
            >
                <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                        let tempPalette = palette;
                        tempPalette[props.color] = hexToRgb(color);
                        setPalette(tempPalette);
                        sessionStorage.setItem(
                            "defaultData",
                            JSON.stringify(palette)
                        );
                    }}
                    className="opacity-0 w-[300px] h-[430px] md:w-[150px] md:h-[430px]"
                />
            </div>
        </div>
    );
}
export default SingleColor;
