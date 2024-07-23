import { paletteContext } from "../../../CnR";
import { useContext } from "react";
import ColorArt from "./ColorArt";
import PreviewButton from "../../PreviewButton";
import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";

function SloganSection() {
    const [palette, setPalette] = useContext(paletteContext);

    

    return (
        <div className="w-[100%]" style={convertStyleDiv(palette.lightShades)}>
            <section className="flex flex-col md:flex-row items-start justify-center flex-grow-0 m-20 mt-40 gap-4 md:gap-12 xl:gap-32">
                <div className="flex flex-col h-24 gap-6 pt-6">
                    <h1
                        className="font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl transition-all ease-in-out h-auto 2xl:h-48"
                        style={convertStyleText(palette.darkShades)}>
                        A Very Cool Slogan
                    </h1>
                    <p
                        className="transition-all ease-in-out text-lg md:text-sm xl:text-lg"
                        style={convertStyleText(palette.lightAccent)}>
                        Some more things about the product to get the user’s
                        attention
                    </p>
                    <div className="flex flex-row gap-4 pt-20">
                        <PreviewButton text={"A button"} color1={palette.lightAccent} color2={palette.lightShades}/>
                        <PreviewButton text={"A highlighted button"} color1={palette.mainBrand} color2={palette.lightShades}/>
                    </div>
                </div>
                <ColorArt></ColorArt>
            </section>
        </div>
    );
}

export default SloganSection;
