import { paletteContext } from "./CnR";
import { useContext } from "react";

function classNameConverter(rgbArray){
    let modifiedString = "bg-[rgb(45,144,144)] w-16 h-16"
    console.log(modifiedString)
    return modifiedString;
}


function Palette(){
    const [palette, setPalette] = useContext(paletteContext);

    return(
        <div className="w-[750px] h-[430px] bg-green-400 flex flex-row">
            <div className={classNameConverter(palette.darkShades)}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Palette