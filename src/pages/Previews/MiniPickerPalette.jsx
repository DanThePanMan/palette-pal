import { paletteContext } from "../CnR";
import { useContext } from "react";
import { useState } from "react";


function convertStyle(colorArray){
    return({
        backgroundColor:`rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
    })
}
function MiniPickerPalette(){

    const [copyMessageState, setCopyMessageState] = useState(false)

    const [palette, setPalette] = useContext(paletteContext);


    return(
        <>
        <div className=" w-[300px] h-10 flex flex-row rounded-xl overflow-clip border-2 borde-[828282] relative">
            <div id = {0} className="w-[300px] h-10 transition-all ease-in-out" style={convertStyle(palette.lightShades)}></div>
            <div id = {1} className="w-[300px] h-10 transition-all ease-in-out" style={convertStyle(palette.lightAccent)}></div>
            <div id = {2} className="w-[300px] h-10 transition-all ease-in-out" style={convertStyle(palette.mainBrand)}></div>
            <div id = {3} className="w-[300px] h-10 transition-all ease-in-out" style={convertStyle(palette.darkAccent)}></div>
            <div id = {4} className="w-[300px] h-10 transition-all ease-in-out" style={convertStyle(palette.darkShades)}></div>
        </div>
        {copyMessageState ? <CopyNotif copyMessageState={setCopyMessageState}/> : null}
        </>
    )
}

export default MiniPickerPalette