import { paletteContext } from "../../../CnR";
import { useContext } from "react";
import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";
import PreviewButton from "../../PreviewButton";

function Featured() {
    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div className="w-[100%]" style={convertStyleDiv(palette.lightShades)}>
            <section className="flex flex-col md:flex-row items-start justify-center flex-grow-0 m-20 mt-24 gap-4 md:gap-12 xl:gap-32">
                <div
                    className="w-[60vw] rounded-2xl h-[36rem] flex flex-row justify-between"
                    style={convertStyleDiv(palette.lightAccent)}
                >
                    <div className="leftSection mt-32 w-[38rem] flex flex-col justify-between p-24">
                        <div className="flex flex-col justify-start">
                            <h1
                                className="font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl transition-all ease-in-out h-auto 2xl:leading-[4rem] "
                                style={convertStyleText(palette.darkShades)}
                            >
                                Shop our product at our website!
                            </h1>
                            <p
                                className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                                style={convertStyleText(palette.darkAccent)}
                            >
                                Some more product details
                            </p>
                        </div>
                        <PreviewButton
                            text="See More Details"
                            color1={palette.mainBrand}
                            color2={palette.lightShades}
                        ></PreviewButton>
                    </div>
                    <div className="rightSection relative mt-auto mr-32">
                        <svg
                            width="800"
                            height="500"
                            viewBox="0 0 482 370"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M482 156C482 184.093 473.986 210.452 459.96 233.22L381.475 370H0.507812L160.303 91.5203C186.782 37.5373 245.483 0 313.647 0C406.625 0 482 69.8436 482 156Z"
                                fill={`rgb(${palette.darkAccent[0]}, ${palette.darkAccent[1]}, ${palette.darkAccent[2]})`}
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Featured;
