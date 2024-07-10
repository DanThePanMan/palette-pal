function LandingDemo(props) {
    const colors = props.colors

    function convertStyle(code) {
        return {
            backgroundColor: `${code}`,
        };
    }


    return <div className=" h-64 xl:h-72 w-96 xl:w-auto rounded-2xl border border-neutral-400 transition-all ease-in-out overflow-clip" style={convertStyle(colors.lightShades)}>
        <div className="w-[100%] h-12" style={convertStyle(colors.darkShades)}>
            <div className="w-16 h-4 translate-x-5 translate-y-4 transition-all ease-in-out" style={convertStyle(colors.lightShades)}></div>
        </div>
        <div className="w-12 xl:w-32 h-6 translate-x-32 xl:translate-x-40 translate-y-6 transition-all ease-in-out" style={convertStyle(colors.darkShades)}></div>
        <div className="w-6 h-2 translate-x-32 xl:translate-x-40 translate-y-8 transition-all ease-in-out" style={convertStyle(colors.mainBrand)}></div>
        <div className="w-32 xl:w-48 h-16 translate-x-32 xl:translate-x-40 translate-y-10 transition-all ease-in-out" style={convertStyle(colors.lightAccent)}></div>
        <div className="w-32 xl:w-48 h-2 translate-x-32 xl:translate-x-40 translate-y-11 transition-all ease-in-out" style={convertStyle(colors.darkAccent)}></div>
        <div className="w-32 xl:w-48 h-2 translate-x-32 xl:translate-x-40 translate-y-12 transition-all ease-in-out" style={convertStyle(colors.darkAccent)}></div>
        <div className="w-32 xl:w-48 h-2 translate-x-32 xl:translate-x-40 translate-y-[3.25rem] transition-all ease-in-out" style={convertStyle(colors.darkAccent)}></div>
        <div className="w-32 xl:w-48 h-2 translate-x-32 xl:translate-x-40 translate-y-[3.5rem] transition-all ease-in-out" style={convertStyle(colors.darkAccent)}></div>
        <div className="w-32 xl:w-48 h-2 translate-x-32 xl:translate-x-40 translate-y-[3.75rem] transition-all ease-in-out" style={convertStyle(colors.darkAccent)}></div>
        <div className="hidden xl:flex w-32 xl:w-48 h-2 translate-x-32 xl:translate-x-40 translate-y-[4em] transition-all ease-in-out" style={convertStyle(colors.darkAccent)}></div>
   






    </div>;
}

export default LandingDemo;
