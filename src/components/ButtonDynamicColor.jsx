function ButtonDynamicColor(props) {
    function convertStyle(code) {
        return {
            backgroundColor: "#" + code,
        };
    }

    return (
        <a href={props.link}>
            <button
                style={convertStyle(props.color)}
                className="bg-[#2D2D2D] md:rounded-xl rounded-md text-sm md:text-lg text-white pr-3 pl-3 pt-2 pb-2 md:pr-6 md:pl-6 md:pt-3 md:pb-3 transition-all ease-in-out hover:opacity-80"
                onClick={props.onClick}>
                {props.text}
            </button>
        </a>
    );
}

export default ButtonDynamicColor;
