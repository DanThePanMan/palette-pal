function PaletteDemoButton(props) {
    const colors = props.colors;
    const stateManager = props.stateManager;

    const stateChangehandler = () => {
        stateManager(colors)
    }

    function convertStyle(code) {
        return {
            backgroundColor: code,
        };
    }

   
    

    return (
        <button onClick={stateChangehandler}  className="flex flex-row h-24 w-24 rounded-xl transition-all ease-in-out overflow-clip">
            <div style={convertStyle(colors.lightShades)} className="bg-red-400 h-24 flex-grow"></div>
            <div style={convertStyle(colors.lightAccent)} className="bg-current h-24 flex-grow"></div>
            <div style={convertStyle(colors.mainBrand)} className="bg-current h-24 flex-grow"></div>
            <div style={convertStyle(colors.darkAccent)} className="bg-current h-24 flex-grow"></div>
            <div style={convertStyle(colors.darkShades)} className="bg-current h-24 flex-grow"></div>
        </button>
    );
}

export default PaletteDemoButton;