import { useState } from "react";
import ButtonDynamicColor from "../components/ButtonDynamicColor";

function Landing() {
    const [demoColors, setDemoColors] = useState({
        lightShades: "FFFFFF",
        lightAccent: "828282",
        mainBrand: "2D2D2D",
        darkAccent: "EDEDED",
        darkShades: "2D2D2D",
    });

    function convertStyle(code) {
        return {
            color: "#" + code,
        };
    }

    return (
        <>
            <section className="flex flex-row items-center justify-center gap-3 flex-grow-0 m-16">
                <div className=" h-80 bg-red-500 w-[20vw]"> placeholder haha </div>
                <div className="flex flex-col items-start gap-5 w-[20vw]">
                    <h1
                        className="Title font-bold text-5xl"
                        style={convertStyle(demoColors.darkShades)}
                    >
                        A Free Color Palette Preview Tool for Developers
                    </h1>
                    <p
                        className="subtext"
                        style={convertStyle(demoColors.lightAccent)}
                    >
                        Generate thousands of beautiful palettes through{" "}
                        <a href="http://colormind.io/" className="underline">
                            Colormind
                        </a>{" "}
                        and preview them with our beautiful templates
                    </p>
                    <div className="flex flex-col gap-3">
                        <ButtonDynamicColor
                            text="Use Your Own Palette"
                            color={demoColors.mainBrand}
                        ></ButtonDynamicColor>
                        <ButtonDynamicColor
                            text="Generate Palettes"
                            color={demoColors.mainBrand}
                        ></ButtonDynamicColor>
                    </div>
                </div>
            </section>
            <section className="highLights"></section>
        </>
    );
}

export default Landing;
