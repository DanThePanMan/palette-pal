function PreviewButton(props) {
    function convertStyleDiv(code1,code2) {
        return {
            backgroundColor: `rgb(${code1[0]}, ${code1[1]}, ${code1[2]})`,
            color: `rgb(${code2[0]}, ${code2[1]}, ${code2[2]})`,
        };
    }

    return (
        <a href={props.link}>
            <button
                style={convertStyleDiv(props.color1, props.color2)}
                className="bg-[#2D2D2D] md:rounded-xl rounded-md text-sm md:text-xs 2xl:text-lg text-white pr-3 pl-3 pt-2 pb-2 xl:pr-6 xl:pl-6 xl:pt-3 xl:pb-3 transition-all ease-in-out hover:opacity-80"
                onClick={props.onClick}>
                {props.text}
            </button>
        </a>
    );
}

export default PreviewButton;
