import { paletteContext } from "../../../CnR";
import { useContext } from "react";
import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";

function Signup() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="w-[100%]" style={convertStyleDiv(palette.darkShades)}>
            <section className="flex flex-col items-center justify-center gap-24 p-64">
                <h1
                    className="font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl transition-all ease-in-out h-auto"
                    style={convertStyleText(palette.mainBrand)}
                >
                    The product is awesome so sign up right here
                </h1>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div
                        className="flex flex-row items-center justify-start gap-2 pr-2 pl-4 h-14 rounded-lg"
                        style={convertStyleDiv(palette.lightShades)}
                    >
                        <input
                            placeholder="Example@email.com"
                            className="w-[26vw] h-14 rounded-lg focus:outline-none"
                            style={convertStyleDiv(palette.lightShades)}
                        ></input>
                        <button
                            className="w-24 h-10 rounded-md hover:opacity-80 transition-all ease-in-out"
                            style={convertStyleDiv(palette.mainBrand)}
                        >
                            <p style={convertStyleText(palette.lightShades)}>
                                Submit
                            </p>
                        </button>
                    </div>
                    <p
                        className="text-lg"
                        style={convertStyleText(palette.darkAccent)}
                    >
                        Don’t worry, submitting your email won’t sign you up for
                        anything
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Signup;
