import { convertStyleDiv } from "../../pages/Previews/Convert";
import { convertStyleText } from "../../pages/Previews/Convert";
import { paletteContext } from "../CnR";
import { useContext } from "react";

function BootstrapPalette() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="grid grid-cols-3 gap-6 w-[46rem]">
            <div
                className="rounded-lg p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.mainBrand)}
            >
                <p style={convertStyleText(palette.lightShades)}>Primary</p>
            </div>
            <div
                className="rounded-lg p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.lightAccent)}
            >
                <p style={convertStyleText(palette.lightShades)}>Secondary</p>
            </div>
            <div className="rounded-lg p-6 transition-all ease-in-out bg-green-600">
                <p style={convertStyleText(palette.lightShades)}>Success</p>
            </div>
            <div className="rounded-lg p-6 transition-all ease-in-out bg-red-600">
                <p style={convertStyleText(palette.lightShades)}>Danger</p>
            </div>
            <div className="rounded-lg p-6 transition-all ease-in-out bg-yellow-500">
                <p style={convertStyleText(palette.lightShades)}>Warning</p>
            </div>
            <div
                className="rounded-lg p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.darkAccent)}
            >
                <p style={convertStyleText(palette.lightShades)}>Info</p>
            </div>
            <div
                className="rounded-lg p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.lightShades)}
            >
                <p style={convertStyleText(palette.darkShades)}>Light</p>
            </div>
            <div
                className="rounded-lg p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.darkShades)}
            >
                <p style={convertStyleText(palette.lightShades)}>Dark</p>
            </div>
        </div>
    );
}
export default BootstrapPalette;
