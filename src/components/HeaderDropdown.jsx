function HeaderDropdown(props){
    function closeDropdown(){
        props.setDropdown(false);
    }



    return(
    <div >
            <ul className="relative w-54 rounded-xl h-fit flex flex-col border bg-[#2D2D2D] z-50 bottom-4 left-[36vw] xl:left-[27vw] top-24 p-6 gap-6 mt-14" onMouseLeave={() => closeDropdown()}>
                <li><div className=""><a href="/Picker" className="text-white hover:text-[#828282] transition-all ease-in-out" >Palette Generator</a></div></li>
                <li><a href="/Preview" className="text-white hover:text-[#828282] transition-all ease-in-out" >Palete Preview</a></li>
                <li><a href="/Bootstrap" className="text-white hover:text-[#828282] transition-all ease-in-out">Export to Bootstrap</a></li>
                <li><a href="/Custom" className="text-white hover:text-[#828282] transition-all ease-in-out">Custom Palettes</a></li>

            </ul>
    </div>);
}

export default HeaderDropdown