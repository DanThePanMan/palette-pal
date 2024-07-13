function HeaderDropdown(props){
    function closeDropdown(){
        props.setDropdown(false);
    }



    return(
    <div >
            <ul className="relative w-54 h-fit flex flex-col border bg-[#2D2D2D] z-50 bottom-4 rounded-sm left-[36vw] xl:left-[27vw] top-24 p-8 gap-4 mt-20" onMouseLeave={() => closeDropdown()}>
                <li><a href="#" className="text-white hover:text-[#828282] transition-all ease-in-out" >Palette Generator</a></li>
                <li><a href="#" className="text-white hover:text-[#828282] transition-all ease-in-out" >Palete Preview</a></li>
                <li><a href="#" className="text-white hover:text-[#828282] transition-all ease-in-out">Export to Bootstrap</a></li>
                <li><a href="#" className="text-white hover:text-[#828282] transition-all ease-in-out">Export to Tailwind</a>
                </li>
                
            </ul>
    </div>);
}

export default HeaderDropdown