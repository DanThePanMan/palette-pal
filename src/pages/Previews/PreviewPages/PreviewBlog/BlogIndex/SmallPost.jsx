import { convertStyleDiv } from "../../../Convert";
import { convertStyleText } from "../../../Convert";
import { paletteContext } from "../../../../CnR";
import { useContext } from "react";

function SmallPost(props) {
    const img = props.img;
    const credit = props.credit;
    const title = props.title;
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div className="flex flex-col gap-2 w-auto md:w-56">
            <img src={img} className="md:w-56 md:h-56 object-cover rounded-sm"></img>
            <p style={convertStyleText(palette.darkShades)} className="text-xs">
                {credit}
            </p>
            <h1
                className="font-bold text-2xl transition-all ease-in-out"
                style={convertStyleText(palette.darkShades)}
            >
                {title}
            </h1>
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
    );
}

export default SmallPost;
