
import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";
import { paletteContext } from "../../../CnR";
import { useContext } from "react";

function BlogIndex() {
    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div
                style={convertStyleDiv(palette.lightShades)}
                className="w-[100%] h-screen grid grid-cols-3 grid-rows-4 gap-4 p-4 lg:p-32 xl:p-26 xl:pr-[38rem] xl:pl-[38rem] transition-all ease-in-out"
            >
            
        </div>
    );
}

export default BlogIndex;
