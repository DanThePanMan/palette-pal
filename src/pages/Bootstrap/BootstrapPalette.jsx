import { convertStyleDiv } from "../../pages/Previews/Convert";
import { convertStyleText } from "../../pages/Previews/Convert";
import { paletteContext } from "../CnR";
import { useContext } from "react";

function BootstrapPalette() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="grid grid-cols-3 gap-6 w-[100%] md:w-[46rem]">
            <div
                className="rounded-lg p-4 md:p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.mainBrand)}
            >
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Primary</p>
            </div>
            <div
                className="rounded-lg p-4 md:p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.lightAccent)}
            >
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Secondary</p>
            </div>
            <div className="rounded-lg p-4 md:p-6 transition-all ease-in-out bg-green-600">
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Success</p>
            </div>
            <div className="rounded-lg p-4 md:p-6 transition-all ease-in-out bg-red-600">
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Danger</p>
            </div>
            <div className="rounded-lg p-4 md:p-6 transition-all ease-in-out bg-yellow-500">
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Warning</p>
            </div>
            <div
                className="rounded-lg p-4 md:p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.darkAccent)}
            >
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Info</p>
            </div>
            <div
                className="rounded-lg p-4 md:p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.lightShades)}
            >
                <p className="text-xs md:text-lg" style={convertStyleText(palette.darkShades)}>Light</p>
            </div>
            <div
                className="rounded-lg p-4 md:p-6 transition-all ease-in-out"
                style={convertStyleDiv(palette.darkShades)}
            >
                <p className="text-xs md:text-lg" style={convertStyleText(palette.lightShades)}>Dark</p>
            </div>
        </div>
    );
}
export default BootstrapPalette;
