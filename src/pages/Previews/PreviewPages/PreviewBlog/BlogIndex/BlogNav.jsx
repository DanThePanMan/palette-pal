import { convertStyleDiv } from "../../../Convert";
import { convertStyleText } from "../../../Convert";
import { paletteContext } from "../../../../CnR";
import { useContext } from "react";

function BlogNav() {
    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div
            className="w-[100%] flex items-center justify-center pt-24 p-8"
            style={convertStyleDiv(palette.lightShades)}
        >
            <div className="container w-[100%] lg:w-[60vw] 3xl:w-[45vw] h-6 flex flex-row justify-between items-center">
                <div className="leftCluster flex flex-row gap-4">
                    <button
                        className="navButton p-1 pl-2 pr-2 rounded-sm hover:opacity-80 transition-all ease-in-out"
                        style={convertStyleDiv(palette.darkShades)}
                    >
                        <p
                            className="font-semibold"
                            style={convertStyleText(palette.lightAccent)}
                        >
                            Tech
                        </p>
                    </button>
                    <button
                        className="navButton p-1 pl-2 pr-2 rounded-sm hover:opacity-80 transition-all ease-in-out"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <p
                            className="font-semibold"
                            style={convertStyleText(palette.darkShades)}
                        >
                            News
                        </p>
                    </button>
                    <button
                        className="navButton p-1 pl-2 pr-2 rounded-sm hover:opacity-80 transition-all ease-in-out"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <p
                            className="font-semibold"
                            style={convertStyleText(palette.darkShades)}
                        >
                            Personal
                        </p>
                    </button>
                    <button
                        className="navButton p-1 pl-2 pr-2 rounded-sm hover:opacity-80 transition-all ease-in-out"
                        style={convertStyleDiv(palette.lightAccent)}
                    >
                        <p
                            className="font-semibold"
                            style={convertStyleText(palette.darkShades)}
                        >
                            Others
                        </p>
                    </button>
                </div>
                <div
                        className="hidden md:flex flex-row items-center justify-start gap-2 pr-2 pl-4 h-12 rounded-sm"
                        style={convertStyleDiv(palette.lightShades)}
                    >
                        <input
                            className="w-64 h-8 rounded-sm p-2 focus:outline-none"
                            style={convertStyleDiv(palette.lightAccent)}
                        ></input>
                    </div>
            </div>
        </div>
    );
}

export default BlogNav;
