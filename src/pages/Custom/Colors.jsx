import SingleColor from "./SingleColor";
function Colors() {   

    return (
        <div className="flex flex-col md:flex-row gap-12">
            <SingleColor color={"lightShades"}/>
            <SingleColor color={"lightAccent"}/>
            <SingleColor color={"mainBrand"}/>
            <SingleColor color={"darkShades"}/>
            <SingleColor color={"darkAccent"}/>
        </div>
    );
}
export default Colors;
