import { useState } from "react";
import ButtonDynamicColor from "../../components/ButtonDynamicColor";
import LandingDemo from "./LandingDemo";
import PaletteDemoButton from "./PaletteDemoButton";
import ClickToPreview from "../../components/ClickToPreview";

function Landing() {
    const [demoColors, setDemoColors] = useState({
        lightShades: "#FFFFFF",
        lightAccent: "#828282",
        mainBrand: "#2D2D2D",
        darkAccent: "#2D2D2D",
        darkShades: "#2D2D2D",
    });

    function convertStyle(code) {
        return {
            color: `${code}`,
        };
    }

    function convertStyleDiv(code) {
        return {
            backgroundColor: `${code}`,
        };
    }

    const paletteChangehandler = (colors) => {
        setDemoColors({
            lightShades: colors.lightShades,
            lightAccent: colors.lightAccent,
            mainBrand: colors.mainBrand,
            darkAccent: colors.darkAccent,
            darkShades: colors.darkShades,
        });
    };

    return (
        <>
            <div
                className="h-12 md:h-32 w-[100%] md:mt-4 md:pb-4 transition-all ease-in-out"
                style={{
                    backgroundImage: `linear-gradient(to top, ${demoColors.lightShades}, white)`,
                }}></div>
            <div
                className="w-[100%]"
                style={convertStyleDiv(demoColors.lightShades)}>
                <section className="flex flex-col md:flex-row items-center justify-center flex-grow-0 m-20 mt-12 gap-4 md:gap-12 xl:gap-20">
                    <ClickToPreview></ClickToPreview>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <LandingDemo colors={demoColors} />
                        <div className="flex flex-row justify-between gap-1 md:gap-2 xl:gap-5">
                            <PaletteDemoButton
                                colors={{
                                    lightShades: "#FFFFFF",
                                    lightAccent: "#828282",
                                    mainBrand: "#2D2D2D",
                                    darkAccent: "#2D2D2D",
                                    darkShades: "#2D2D2D",
                                }}
                                stateManager={paletteChangehandler}
                            />
                            <PaletteDemoButton
                                colors={{
                                    lightShades: "#F4F7F7",
                                    lightAccent: "#919D9F",
                                    mainBrand: "#8BA9B9",
                                    darkAccent: "#7A8C9B",
                                    darkShades: "#3A4B63",
                                }}
                                stateManager={paletteChangehandler}
                            />
                            <PaletteDemoButton
                                colors={{
                                    lightShades: "#F9FAF9",
                                    lightAccent: "#CCB3AA",
                                    mainBrand: "#E13536",
                                    darkAccent: "#BDA48A",
                                    darkShades: "#2A3643",
                                }}
                                stateManager={paletteChangehandler}
                            />
                            <PaletteDemoButton
                                colors={{
                                    lightShades: "#ECEBE7",
                                    lightAccent: "#977762",
                                    mainBrand: "#99949B",
                                    darkAccent: "#7B5766",
                                    darkShades: "#4C5052",
                                }}
                                stateManager={paletteChangehandler}
                            />
                            <PaletteDemoButton
                                colors={{
                                    lightShades: "#E9C5C1",
                                    lightAccent: "#A7737E",
                                    mainBrand: "#E83223",
                                    darkAccent: "#D25059",
                                    darkShades: "#271D27",
                                }}
                                stateManager={paletteChangehandler}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5 w-[80vw] mt-12 md:mt-0 md:w-[20vw]">
                        <span
                            className="type-Landing font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl transition-all ease-in-out h-auto 2xl:h-48"
                            style={convertStyle(demoColors.darkShades)}>
                            
                        </span>
                        <p
                            className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                            style={convertStyle(demoColors.lightAccent)}>
                            Generate thousands of beautiful palettes through{" "}
                            <a
                                href="http://colormind.io/"
                                className="underline">
                                Colormind
                            </a>{" "}
                            and preview them with our beautiful templates
                        </p>
                        <div className="flex flex-row gap-2 lg:gap-5">
                            <ButtonDynamicColor
                                text="Use Your Own Palette"
                                color={
                                    demoColors.mainBrand
                                }></ButtonDynamicColor>
                            <ButtonDynamicColor
                                link="/Picker"
                                text="Generate Palettes"
                                color={
                                    demoColors.mainBrand
                                }></ButtonDynamicColor>
                        </div>
                    </div>
                </section>
            </div>
            <div
                className="w-[100%] flex flex-row justify-center items-center"
                style={convertStyleDiv(demoColors.lightShades)}>
                <section className="highLights flex flex-col items-start w-[80vw] md:w-[40vw] gap-20 m-32">
                    <h1
                        className="Title font-bold text-5xl transition-all ease-in-out"
                        style={convertStyle(demoColors.darkShades)}>
                        Highlights
                    </h1>
                    <div className="flex flex-col md:grid grid-rows-2 grid-cols-2 w-[60vw] md:w-[40vw] gap-24">
                        <div className="flex flex-col gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill={`#${demoColors.lightAccent}`}
                                viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                            </svg>
                            <p
                                className="font-medium text-xl transition-all ease-in-out"
                                style={convertStyle(demoColors.darkAccent)}>
                                Easy To Use
                            </p>
                            <p
                                className="subtext text-sm lg:text-lg"
                                style={convertStyle(demoColors.lightAccent)}>
                                Removes the hassle of changing colours on your
                                own design, simple preview them using this
                                website
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill={`#${demoColors.lightAccent}`}
                                viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                />
                            </svg>
                            <p
                                className="font-medium text-xl transition-all ease-in-out"
                                style={convertStyle(demoColors.darkAccent)}>
                                No Accounts Required
                            </p>
                            <p
                                className="subtext text-sm lg:text-lg"
                                style={convertStyle(demoColors.lightAccent)}>
                                No need to connect any account, simply start
                                generating with the click of a button
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill={`#${demoColors.lightAccent}`}
                                viewBox="0 0 16 16">
                                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                            </svg>
                            <p
                                className="font-medium text-xl transition-all ease-in-out"
                                style={convertStyle(demoColors.darkAccent)}>
                                Fully Open Source
                            </p>
                            <p
                                className="transition-all ease-in-out text-sm lg:text-lg"
                                style={convertStyle(demoColors.lightAccent)}>
                                This software is protected under the GNU GPLv3
                                license, feel free to checkout the repository {" "}
                                <a className="underline" href="https://github.com/DanThePanMan/palette-pal">here</a>.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill={`#${demoColors.lightAccent}`}
                                viewBox="0 0 16 16">
                                <path
                                    fillRule="evenodd"
                                    d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
                                />
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                            </svg>
                            <p
                                className="font-medium text-xl transition-all ease-in-out"
                                style={convertStyle(demoColors.darkAccent)}>
                                Check Out my Other Projects
                            </p>
                            <p
                                className="transition-all ease-in-out text-sm lg:text-lg"
                                style={convertStyle(demoColors.lightAccent)}>
                                Checkout my other projects on my{" "}
                                <a className="underline" href="https://github.com/DanThePanMan/">Github</a> or my{" "}
                                <a className="underline" onClick={() => {alert("The Personal Website is Under Construction!")}}>personal website</a>.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div
                className="h-20 w-[100%] mb-4 transition-all ease-in-out"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${demoColors.lightShades}, white)`,
                }}></div>
        </>
    );
}

export default Landing;
