import { convertStyleDiv } from "../../../Convert";
import { convertStyleText } from "../../../Convert";
import { paletteContext } from "../../../../CnR";
import { useContext } from "react";
import SmallPost from "./SmallPost";
//image imports
import pic1 from "../../../../../assets/StudyImage.jpg";
import pic2 from "../../../../../assets/keyboard.jpg";
import pic3 from "../../../../../assets/jogging.jpg"
import pic4 from "../../../../../assets/storypoint.jpg"

function FirstFour() {
    const [palette, setPalette] = useContext(paletteContext);

    return (
        <div
            className="flex flex-col items-center gap-12 md:flex-row justify-between w-[100%] lg:w-[60vw] 3xl:w-[45vw] pt-4"
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
                img={pic3}
                credit="Photo by Rinke Dohmen on Unsplash"
                title="Why do we Use Strava"
            />
            <SmallPost
                img={pic4}
                credit="Photo by Brands&People on Unsplash"
                title="Jeff’s Guide to Story Points"
            />
        </div>
    );
}

export default FirstFour;
