import Colors from "./Colors";
import ButtonNoColor from "../../components/ButtonNoColor";

function Custom() {
    return (
        <main className="flex flex-col justify-around items-center w-[100%] md:m-24 md:mt-8 m-10 h-[60vh] gap-10 xl:gap-12 md:h-[calc(100vh-19rem)]">
            <h1 className="font-bold text-xl md:text-3xl xl:text-5xl ">
                Custom Palette Preview
            </h1>
            <Colors />
            <a href="Preview">
                <ButtonNoColor text="Preview"></ButtonNoColor>
            </a>
        </main>
    );
}
export default Custom;
