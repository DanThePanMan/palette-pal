import { useContext, useState, useCallback } from "react"; 
import { convertStyleDiv } from "../Previews/Convert";
import { paletteContext } from "../CnR"; 

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const context = this;
        const later = () => {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function SingleColor(props) {
    const [palette, setPalette] = useContext(paletteContext);
    const [color, setColor] = useState("#ffffff");

    const debouncedSave = useCallback(
        debounce((newPalette) => {
            setPalette(newPalette);
            sessionStorage.setItem(
                "defaultData",
                JSON.stringify(newPalette)
            );
        }, 300),
        [setPalette]
    );

    const handleChange = (e) => {
        const newHexColor = e.target.value;
        setColor(newHexColor);
        const tempPalette = { ...palette }; 
        tempPalette[props.color] = hexToRgb(newHexColor);
        debouncedSave(tempPalette);
};

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
                    onChange={handleChange} 
                    className="opacity-0 w-80 h-12 sm:w-80 sm:h-20 md:w-24 md:h-80 xl:w-[150px] xl:h-[430px]"
                />
            </div>
        </div>
    );
}
export default SingleColor;
