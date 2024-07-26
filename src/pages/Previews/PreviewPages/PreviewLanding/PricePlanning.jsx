import { paletteContext } from "../../../CnR";
import { useContext } from "react";
import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";

function PricePlanning() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="w-[100%]" style={convertStyleDiv(palette.lightShades)}>
            <section className="flex flex-col items-center justify-center flex-grow-0 m-20 mt-40 gap-20 md:gap-8 xl:gap-32 pb-32">
                <div className="flex flex-col gap-4 items-center">
                    <h1
                        className="font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl transition-all ease-in-out h-auto"
                        style={convertStyleText(palette.darkShades)}
                    >
                        Plans and Pricing
                    </h1>
                    <p
                        className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                        style={convertStyleText(palette.lightAccent)}
                    >
                        This tool is completely free! Here is just an example:
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-16 xl:gap-24">
                    <div
                        className="transition-all ease-in-out flex flex-col gap-3 p-6 2xl:p-10 w-80 h-[36rem] md:w-60 md:h-84 2xl:w-80 2xl:h-[36rem] rounded-lg"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <h1
                                className="font-bold text-2xl md:text-lg lg:text-xl 2xl:text-2xl transition-all ease-in-out h-auto"
                                style={convertStyleText(palette.darkShades)}
                            >
                                Basic tier
                            </h1>
                            <p
                                className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                                style={convertStyleText(palette.darkAccent)}
                            >
                                Free
                            </p>
                        </div>
                    </div>
                    <div
                        className="transition-all ease-in-out flex flex-col gap-3 p-6 2xl:p-10 w-80 h-[36rem] md:w-60 md:h-84 2xl:w-80 2xl:h-[36rem] rounded-lg"
                        style={convertStyleDiv(palette.mainBrand)}
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <h1
                                className="font-extrabold text-2xl md:text-lg lg:text-xl 2xl:text-2xl transition-all ease-in-out h-auto"
                                style={convertStyleText(palette.darkShades)}
                            >
                                Value tier
                            </h1>
                            <p
                                className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                                style={convertStyleText(palette.darkAccent)}
                            >
                                Free
                            </p>
                        </div>
                    </div>
                    <div
                        className="transition-all ease-in-out flex flex-col gap-3 p-6 2xl:p-10 w-80 h-[36rem] md:w-60 md:h-84 2xl:w-80 2xl:h-[36rem] rounded-lg"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <h1
                                className="font-bold text-2xl md:text-lg lg:text-xl 2xl:text-2xl transition-all ease-in-out h-auto"
                                style={convertStyleText(palette.darkShades)}
                            >
                                Expensive tier
                            </h1>
                            <p
                                className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                                style={convertStyleText(palette.darkAccent)}
                            >
                                Free
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PricePlanning;
