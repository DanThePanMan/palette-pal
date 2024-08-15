import { useContext } from "react";
import { paletteContext } from "../CnR";
import ButtonNoColor from "../../components/ButtonNoColor";

function PaletteGenbtn(props) {
    const [palette, setPalette] = useContext(paletteContext);

    async function generateHandler(req) {
        props.codes("Copy Codes");

        try {
            const response = await fetch('../../api/Proxy', req);
            if (!response.ok) {
                throw new Error("Could not get response from server");
            }
            const data = await response.json();
            const temp = data.result;
            setPalette({
                lightShades: temp[0],
                lightAccent: temp[1],
                mainBrand: temp[2],
                darkAccent: temp[3],
                darkShades: temp[4],
            });
        } catch (error) {
            console.log("error"); //make this show a modal
        }
    }

    return (
        <>
            <ButtonNoColor
                onClick={() => {
                    generateHandler(props.params);
                }}
                text="Generate"
            ></ButtonNoColor>
        </>
    );
}

export default PaletteGenbtn;
