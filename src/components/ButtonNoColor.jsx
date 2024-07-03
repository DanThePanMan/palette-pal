function ButtonNoColor(props) {
    return (
        <button className="bg-[#2D2D2D] md:rounded-xl rounded-md text-sm md:text-lg text-white pr-3 pl-3 pt-2 pb-2 md:pr-6 md:pl-6 md:pt-3 md:pb-3" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default ButtonNoColor;
