import { convertStyleDiv } from "../../../Convert";
import { convertStyleText } from "../../../Convert";
import { paletteContext } from "../../../../CnR";
import { useContext } from "react";

import img from "../../../../../assets/highlightPic.jpg";

function HighlightArticle() {
    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div
            className="w-[100%] flex items-start justify-center pt-0"
            style={convertStyleDiv(palette.lightShades)}
        >
            <div className="container w-[45vw] flex flex-row justify-between items-start pb-12">
                <div className="leftCluster flex flex-col gap-2">
                    <img
                        src={img}
                        className="w-[34rem] h-[20rem] rounded-sm"
                    ></img>
                    <div style={convertStyleText(palette.darkShades)}>
                        Photo by{" "}
                        <a
                            className="underline"
                            href="https://unsplash.com/@karishea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        >
                            Kari Shea
                        </a>{" "}
                        on{" "}
                        <a
                            className="underline"
                            href="https://unsplash.com/photos/macbook-pro-on-top-of-brown-table-1SAnrIxw5OY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        >
                            Unsplash
                        </a>
                    </div>
                </div>
                <div className="rightCluster flex flex-col items-start justify-between gap-2 w-[34rem] h-[20rem]">
                    <div className="flex flex-col items-start gap-2">
                        <p style={convertStyleText(palette.darkShades)}>
                            Category --- 6 months ago
                        </p>
                        <h1
                            className="font-bold text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl 2xl:leading-[4rem] transition-all ease-in-out"
                            style={convertStyleText(palette.darkShades)}
                        >
                            5 Tips for Building Side Projects... on the Side
                        </h1>
                        <p
                            className="text-sm"
                            style={convertStyleText(palette.darkShades)}
                        >
                            It is time to build some side projects so you can
                            land a cool and awesome software engineering job
                        </p>
                    </div>
                    <div className="Name Section flex flex-row gap-2 pt-6">
                        <div
                            className="w-14 h-14 rounded-full"
                            style={convertStyleDiv(palette.mainBrand)}
                        ></div>
                        <div className="flex flex-col justify-between h-14 p-1">
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
        </div>
    );
}

export default HighlightArticle;
