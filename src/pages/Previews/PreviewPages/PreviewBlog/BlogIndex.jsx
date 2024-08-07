import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";
import { paletteContext } from "../../../CnR";
import { useContext } from "react";

//component imports
import BlogNav from "./BlogIndex/BlogNav";
import HighlightArticle from "./BlogIndex/HighlightArticle";
import FirstFour from "./BlogIndex/FirstFour";
import BottomTwo from "./BlogIndex/BottomTwo";

function convert(code) {
    return `rgb(${code[0]}, ${code[1]}, ${code[2]})`;
}

function BlogIndex(props) {
    function articleHandler() {
        props.setShowItem(true);
    }

    const [palette, setPalette] = useContext(paletteContext);
    return (
        <>
            <div
                className="flex flex-col flex-grow w-[100%] items-center"
                style={convertStyleDiv(palette.lightShades)}
            >
                <BlogNav />
                <HighlightArticle />
                <FirstFour />
                <BottomTwo />
            </div>
            <div
                className="h-20 w-[100%] mb-4 transition-all ease-in-out"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${convert(
                        palette.lightShades
                    )}, white)`,
                }}
            ></div>
        </>
    );
}

export default BlogIndex;
