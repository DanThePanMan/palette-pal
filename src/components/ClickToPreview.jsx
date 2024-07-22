import check from "../assets/check.png"
import text from "../assets/textForPreview.png"

function ClickToPreview(){
    return(
    <div className="flex-col items-end gap-1 pt-96 hidden 2xl:flex absolute xl:-translate-x-[40rem]">
        <img src={text} className="w-42 mr-6"></img>
        <img src={check} className="w-24"></img>
    </div>
    )
}

export default ClickToPreview