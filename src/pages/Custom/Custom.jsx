import Colors from "./Colors";
import ButtonNoColor from "../../components/ButtonNoColor";

function Custom() {
    return (
        <div className="flex flex-col justify-start items-center w-[100%] h-[120] md:mt-8 m-10 gap-6 md:gap-20 lg:gap-28">
            <h1 className="font-bold text-xl md:text-3xl xl:text-5xl ">
                Custom Palette Preview
            </h1>
            <Colors />
            <a href="Preview">
                <ButtonNoColor text="Preview"></ButtonNoColor>
            </a>
        </div>
    );
}
export default Custom;
