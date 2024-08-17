import { paletteContext } from "../CnR";
import { useState, useContext } from "react";

function CodeSnippet() {
    const [palette, setPalette] = useContext(paletteContext);
    const [copyText, setCopyText] = useState("Copy")

    async function CopyHandler(){
        setCopyText("Copied!")
        const copiedText = `$theme-colors: (\n
            "secondary":  ${`rgb(${palette.lightAccent[0]}, ${palette.lightAccent[1]}, ${palette.lightAccent[2]})`},\n
            "success":    #16a34a,\n
            "info":       ${`rgb(${palette.darkAccent[0]}, ${palette.darkAccent[1]}, ${palette.darkAccent[2]})`},\n
            "warning":    #eab308,\n
            "danger":     #dc2626,\n
            "light":      ${`rgb(${palette.lightShades[0]}, ${palette.lightShades[1]}, ${palette.lightShades[2]})`},\n
            "dark":       ${`rgb(${palette.darkShades[0]}, ${palette.darkShades[1]}, ${palette.darkShades[2]})`}\n
        );`;
        await navigator.clipboard.writeText(copiedText);
        setTimeout(() => {
            setCopyText("Copy");
        }, 1000);
        
    }
    const [snippet, setSnippet] = useState(
        
    );

    return (
        <div className="bg-[#b6b6b6] w-96 h-96 rounded-lg p-8 flex flex-col justify-between">
            <div>
                <p>$theme-colors: (</p>
                <p> &emsp; "secondary": {`rgb(${palette.lightAccent[0]}, ${palette.lightAccent[1]}, ${palette.lightAccent[2]})`},</p>
                <p> &emsp; "success": #16a34a,</p>
                <p> &emsp; "info": {`rgb(${palette.darkAccent[0]}, ${palette.darkAccent[1]}, ${palette.darkAccent[2]})`},</p>
                <p> &emsp; "warning": #eab308,</p>
                <p> &emsp; "danger": #dc2626,</p>
                <p> &emsp; "light": {`rgb(${palette.lightShades[0]}, ${palette.lightShades[1]}, ${palette.lightShades[2]})`},</p>
                <p> &emsp; "dark": {`rgb(${palette.darkShades[0]}, ${palette.darkShades[1]}, ${palette.darkShades[2]})`},</p>
                <p>);`</p>
            </div>
            <button className="w-auto bg-white p-2 rounded-lg hover:opacity-50 transition-all ease-in-out"onClick={ () => {CopyHandler()}}>{copyText}</button>
        </div>
    );
}
export default CodeSnippet;

//
