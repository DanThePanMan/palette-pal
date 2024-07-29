import { convertStyleDiv } from "../../Convert";
import { convertStyleText } from "../../Convert";
import { paletteContext } from "../../../CnR";
import { useContext } from "react";

function DashboardIndex() {
    const [palette, setPalette] = useContext(paletteContext);
    return (
        <div
            style={convertStyleDiv(palette.lightShades)}
            className="w-[100%] h-screen"
        >
            <div>test</div>
        </div>
    );
}

export default DashboardIndex;
