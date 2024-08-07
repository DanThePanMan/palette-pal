import { convertStyleDiv } from "../../../Convert";
import { convertStyleText } from "../../../Convert";
import { paletteContext } from "../../../../CnR";
import { useContext } from "react";
import SmallPost from "./SmallPost";
import SmallPosts from "./SmallPost";
//image imports
import pic1 from "../../../../../assets/StudyImage.jpg";
import pic2 from "../../../../../assets/keyboard.jpg"

function FirstFour() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div
            className="flex flex-row justify-between w-[45vw] pt-4"
            style={convertStyleDiv(palette.lightShades)}
        >
            <SmallPost
                img={pic1}
                credit="Photo by Jeswin Thomas on Unsplash"
                title="Top 10 Coolest CS Courses"
            />
            <SmallPost
                img={pic2}
                credit="Photo by Juan Gomez on Unsplash"
                title="You NEED a Better Keyboard"
            />
            <SmallPost
                img={pic1}
                credit="Photo by ___ ___ on Unsplash"
                title="Why do we Use Strava"
            />
            <SmallPost
                img={pic1}
                credit="Photo by Jeswin THomas onn Unsplash"
                title="Top 10 Coolest CS Courses"
            />
        </div>
    );
}

export default FirstFour;
