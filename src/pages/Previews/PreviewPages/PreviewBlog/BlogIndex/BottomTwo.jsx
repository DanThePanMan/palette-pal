import { convertStyleDiv } from "../../../Convert";
import { convertStyleText } from "../../../Convert";
import { paletteContext } from "../../../../CnR";
import { useContext } from "react";

//image imports
import code from ".././../../../../assets/code.jpg";
import browser from ".././../../../../assets/browser.jpg";


function BottomTwo() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="flex flex-row gap-2 justify-between w-[45vw] pt-16 pb-16">
            <div className="flex flex-col gap-2">
                <img
                    src={code}
                    className="w-[32rem] h-72 object-cover rounded-sm"
                ></img>
                <p
                    style={convertStyleText(palette.darkShades)}
                    className="text-xs"
                >
                    Photo by Mohammad Rahmani on Unsplash
                </p>
                <div className="flex flex-col gap-2">
                    <h1
                        className="font-bold text-3xl transition-all ease-in-out"
                        style={convertStyleText(palette.darkShades)}
                    >
                        VS Code Tips and Tricks
                    </h1>
                </div>
                <div className="Name Section flex flex-row gap-2 pt-2">
                    <div
                        className="w-10 h-10 rounded-full"
                        style={convertStyleDiv(palette.mainBrand)}
                    ></div>
                    <div className="flex flex-col justify-between h-10 p-1">
                        <p
                            className="text-md"
                            style={convertStyleText(palette.darkShades)}
                        >
                            Daniel Chen
                        </p>
                        <p
                            className="text-xs"
                            style={convertStyleText(palette.darkShades)}
                        >
                            Student
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <img
                    src={browser}
                    className="w-[32rem] h-72 object-cover rounded-sm"
                ></img>
                <p
                    style={convertStyleText(palette.darkShades)}
                    className="text-xs"
                >
                    Photo by Firmbee.com on Unsplash
                </p>
                <div className="flex flex-col gap-2">
                    <h1
                        className="font-bold text-3xl transition-all ease-in-out"
                        style={convertStyleText(palette.darkShades)}
                    >
                        Vim... but for your browser??
                    </h1>
                </div>
                <div className="Name Section flex flex-row gap-2 pt-2">
                    <div
                        className="w-10 h-10 rounded-full"
                        style={convertStyleDiv(palette.mainBrand)}
                    ></div>
                    <div className="flex flex-col justify-between h-10 p-1">
                        <p
                            className="text-md"
                            style={convertStyleText(palette.darkShades)}
                        >
                            Daniel Chen
                        </p>
                        <p
                            className="text-xs"
                            style={convertStyleText(palette.darkShades)}
                        >
                            Student
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomTwo;
