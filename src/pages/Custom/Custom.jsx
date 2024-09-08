import Colors from "./Colors";
import ButtonNoColor from "../../components/ButtonNoColor";

function Custom() {
    return (
        <main className="flex flex-col justify-start items-center w-[100%] h-screen md:mt-8 m-10 gap-6 md:gap-20 lg:gap-32 md:h-[calc(100vh-19rem)]">
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
