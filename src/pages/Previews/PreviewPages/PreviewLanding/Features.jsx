import { paletteContext } from "../../../CnR";
import { useContext } from "react";
import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";

function Features() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="w-[100%]" style={convertStyleDiv(palette.lightShades)}>
            <section className="flex flex-col items-center justify-center flex-grow-0 m-20 mt-40 gap-20 md:gap-8 xl:gap-32 pb-32">
                <h1
                    className="font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl transition-all ease-in-out h-auto"
                    style={convertStyleText(palette.darkShades)}
                >
                    Some cool features of the web page
                </h1>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-20 xl:gap-28">
                    <div
                        className="transition-all ease-in-out flex flex-col gap-3 p-6 2xl:p-10 w-80 h-48 md:w-60 md:h-40 2xl:w-80 2xl:h-48 rounded-lg"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill={`rgb(${palette.darkAccent[0]}, ${palette.darkAccent[1]}, ${palette.darkAccent[2]})`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                        <p
                            className="font-medium text-md md:text-lg lg:text-xl transition-all ease-in-out"
                            style={convertStyleText(palette.darkAccent)}
                        >
                            A Feature
                        </p>
                        <p
                            className="subtext text-sm lg:text-md"
                            style={convertStyleText(palette.mainBrand)}
                        >
                            Descriptions of that feature
                        </p>
                    </div>
                    <div
                        className="transition-all ease-in-out flex flex-col gap-3 p-6 2xl:p-10 w-80 h-48 md:w-60 md:h-40 2xl:w-80 2xl:h-48 rounded-lg"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill={`rgb(${palette.darkAccent[0]}, ${palette.darkAccent[1]}, ${palette.darkAccent[2]})`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                        </svg>
                        <p
                            className="font-medium text-md md:text-lg lg:text-xl transition-all ease-in-out"
                            style={convertStyleText(palette.darkAccent)}
                        >
                            A Feature
                        </p>
                        <p
                            className="subtext text-sm lg:text-md"
                            style={convertStyleText(palette.mainBrand)}
                        >
                            Descriptions of that feature
                        </p>
                    </div>
                    <div
                        className="transition-all ease-in-out flex flex-col gap-3 p-6 2xl:p-10 w-80 h-48 md:w-60 md:h-40 2xl:w-80 2xl:h-48 rounded-lg"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill={`rgb(${palette.darkAccent[0]}, ${palette.darkAccent[1]}, ${palette.darkAccent[2]})`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />{" "}
                        </svg>
                        <p
                            className="font-medium text-md md:text-lg lg:text-xl transition-all ease-in-out"
                            style={convertStyleText(palette.darkAccent)}
                        >
                            A Feature
                        </p>
                        <p
                            className="subtext text-sm lg:text-md"
                            style={convertStyleText(palette.mainBrand)}
                        >
                            Descriptions of that feature
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
