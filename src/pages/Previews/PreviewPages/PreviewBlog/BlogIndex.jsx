import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";
import { paletteContext } from "../../../CnR";
import { useContext } from "react";

//component imports
import BlogNav from "./BlogIndex/BlogNav";
import HighlightArticle from "./BlogIndex/HighlightArticle";

function BlogIndex(props) {
    function articleHandler() {
        props.setShowItem(true);
    }

    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div className="flex flex-col flex-grow w-[100%] items-center">
            <BlogNav/>
            <HighlightArticle/>
        </div>
    );
}

export default BlogIndex;
