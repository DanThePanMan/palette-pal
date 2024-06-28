import { paletteContext } from "./CnR";
import { useContext } from "react";


function Palette(){
    const [palette, setPalette] = useContext(paletteContext);

    return(
        <div className="w-[750px] h-[430px] bg-green-400">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Palette