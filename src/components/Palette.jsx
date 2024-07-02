import { paletteContext } from "./CnR";
import { useContext } from "react";
import { useState } from "react";
import CopyNotif from "./CopyNotif";


function convertStyle(colorArray){
    return({
        backgroundColor:`rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
    })
}

async function copyHandler(setStateVar, colorArray){
    const copiedText = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    await navigator.clipboard.writeText(copiedText);
    setStateVar(true);
    
}


function Palette(){

    const [copyMessageState, setCopyMessageState] = useState(false)

    const [palette, setPalette] = useContext(paletteContext);


    return(
        <>
        <div className=" w-[300px] h-[430px] md:w-[750px] md:h-[430px] bg-green-400 flex flex-col md:flex-row rounded-3xl overflow-clip border borde-[828282] relative">
            <div onClick={() => copyHandler(setCopyMessageState, palette.lightShades)} className="w-[150px] h-[430px] hover:bg-black/40 absolute transition-all ease-in-out opacity-0 hover:opacity-100 text-sm flex items-center justify-center text-white">rgb({palette.lightShades[0]}, {palette.lightShades[1]}, {palette.lightShades[2]})</div>
            <div onClick={() => copyHandler(setCopyMessageState, palette.lightAccent)} className="w-[150px] h-[430px] hover:bg-black/40 absolute translate-x-[149px] transition-all ease-in-out opacity-0 hover:opacity-100 text-sm flex items-center justify-center text-white">rgb({palette.lightAccent[0]}, {palette.lightAccent[1]}, {palette.lightAccent[2]})</div>
            <div onClick={() => copyHandler(setCopyMessageState, palette.mainBrand)} className="w-[150px] h-[430px] hover:bg-black/40 absolute translate-x-[299px] transition-all ease-in-out opacity-0 hover:opacity-100 text-sm flex items-center justify-center text-white">rgb({palette.mainBrand[0]}, {palette.mainBrand[1]}, {palette.mainBrand[2]})</div>
            <div onClick={() => copyHandler(setCopyMessageState, palette.darkAccent)} className="w-[150px] h-[430px] hover:bg-black/40 absolute translate-x-[448px] transition-all ease-in-out opacity-0 hover:opacity-100 text-sm flex items-center justify-center text-white">rgb({palette.darkAccent[0]}, {palette.darkAccent[1]}, {palette.darkAccent[2]})</div>
            <div onClick={() => copyHandler(setCopyMessageState, palette.darkShades)} className="w-[150px] h-[430px] hover:bg-black/40 absolute translate-x-[598px] transition-all ease-in-out opacity-0 hover:opacity-100 text-sm flex items-center justify-center text-white">rgb({palette.darkShades[0]}, {palette.darkShades[1]}, {palette.darkShades[2]})</div>
            <div id = {0} className="w-[300px] h-[430px] md:w-[150px] md:h-[430px] transition-all ease-in-out" style={convertStyle(palette.lightShades)}></div>
            <div id = {1} className="w-[300px] h-[430px] md:w-[150px] md:h-[430px] transition-all ease-in-out" style={convertStyle(palette.lightAccent)}></div>
            <div id = {2} className="w-[300px] h-[430px] md:w-[150px] md:h-[430px] transition-all ease-in-out" style={convertStyle(palette.mainBrand)}></div>
            <div id = {3} className="w-[300px] h-[430px] md:w-[150px] md:h-[430px] transition-all ease-in-out" style={convertStyle(palette.darkAccent)}></div>
            <div id = {4} className="w-[300px] h-[430px] md:w-[150px] md:h-[430px] transition-all ease-in-out" style={convertStyle(palette.darkShades)}></div>
        </div>
        {copyMessageState ? <CopyNotif copyMessageState={setCopyMessageState}/> : null}
        </>
    )
}

export default Palette