import { useContext } from "react";
import { paletteContext } from "./CnR";

function PaletteGenbtn(props) {
    const [palette, setPalette] = useContext(paletteContext);

    async function generateHandler(req) {
        try {
            const response = await fetch("http://colormind.io/api/", req);
            if (!response.ok) {
                throw new Error("Could not get response from server");
            }
            const data = await response.json();
            const temp = data.result;
            setPalette({
                "light shades": temp[0],
                "light accent": temp[1],
                "main brand": temp[2],
                "dark accent": temp[3],
                "dark shades": temp[4],
            });
        } catch (error) {
            console.log("error"); //make this show a modal
        }
    }

    return (
        <>
            <button
                onClick={() => {
                    generateHandler(props.params);
                }}
            >
                Generate New
            </button>
            <div>{JSON.stringify(palette)}</div>
        </>
    );
}

export default PaletteGenbtn;
