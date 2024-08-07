import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";
import { paletteContext } from "../../../CnR";
import { useContext } from "react";

//component imports
import BlogNav from "./BlogIndex/BlogNav";
import HighlightArticle from "./BlogIndex/HighlightArticle";
import FirstFour from "./BlogIndex/FirstFour";

function BlogIndex(props) {
    function articleHandler() {
        props.setShowItem(true);
    }

    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div
            className="flex flex-col flex-grow w-[100%] items-center"
            style={convertStyleDiv(palette.lightShades)}
        >
            <BlogNav />
            <HighlightArticle />
            <FirstFour />
        </div>
    );
}

export default BlogIndex;
