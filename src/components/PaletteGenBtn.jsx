import { useState } from "react";

function PaletteGenbtn(props){
    const [palette, setPalette] = useState()
    
    async function generateHandler(params) {

        


        try {
            const response = await fetch("http://colormind.io/api/", params);
            if (!response.ok) {
                throw new Error("Could not get response from server");
            }
            const data = await response.json();
            setPalette(data);
        } catch (error) {
            console.log("error"); //make this show a modal
        }
    }
    return(
        <button onClick={() => {generateHandler(props.params)}}>Generate New</button>
    )
}


export default PaletteGenbtn