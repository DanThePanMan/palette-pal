function ButtonNoColor(props) {
    return (
        <button className="bg-[#2D2D2D] rounded-xl text-lg text-white pr-6 pl-6 pt-3 pb-3" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default ButtonNoColor;
