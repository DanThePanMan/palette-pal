import { paletteContext } from "./CnR";
import { useContext } from "react";


function convertStyle(colorArray){
    return({
        backgroundColor:`rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
    })
}

function Palette(props){

    const [palette, setPalette] = useContext(paletteContext);


    return(
        <div className="w-[750px] h-[430px] bg-green-400 flex flex-row rounded-3xl overflow-clip border borde-[828282] relative">
            <div id = {0} className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.lightShades)}></div>
            <div id = {1} className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.lightAccent)}></div>
            <div id = {2} className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.mainBrand)}></div>
            <div id = {3} className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.darkAccent)}></div>
            <div id = {4} className="w-[150px] h-[430px] transition-all ease-in-out" style={convertStyle(palette.darkShades)}></div>
        </div>
    )
}

export default Palette