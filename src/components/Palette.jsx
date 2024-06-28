import { paletteContext } from "./CnR";
import { useContext } from "react";


function convertStyle(colorArray){
    return({
        backgroundColor:`rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
    })
}


function Palette(){
    const [palette, setPalette] = useContext(paletteContext);

    return(
        <div className="w-[750px] h-[430px] bg-green-400 flex flex-row rounded-3xl overflow-clip border borde-[828282]">
            <div className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.lightShades)}></div>
            <div className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.lightAccent)}></div>
            <div className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.mainBrand)}></div>
            <div className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.darkAccent)}></div>
            <div className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.darkShades)}></div>
        </div>
    )
}

export default Palette