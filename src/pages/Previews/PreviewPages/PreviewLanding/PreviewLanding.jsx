import SloganSection from "./SloganSection";
import Features from "./Features";
import Signup from "./Signup";
import PricePlanning from "./PricePlanning";
import { paletteContext } from "../../../CnR";
import { useContext } from "react";

function convert(code) {
    return (
        `rgb(${code[0]}, ${code[1]}, ${code[2]})`
    );
}

function PreviewLanding() {
    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div className="overflow-x-hidden flex flex-col flex-grow w-screen">
            <SloganSection />
            <Features />
            <Signup/>
            <PricePlanning/>
            <div
                className="h-20 w-[100%] mb-4 transition-all ease-in-out"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${convert(palette.lightShades)}, white)`,
                }}></div>
        </div>
    );
}

export default PreviewLanding;
