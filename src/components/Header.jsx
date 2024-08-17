import logo from "../assets/Logo.png";
import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";


function Header(props) {

    const [dropdown, setDropdown] = useState(false);

    function hamburgerHandler() {
        props.setSidebar(true);
    }

    function dropdownEnter(){
        setDropdown(true);
    }   

    

    
    return (
        <header className="Header flex flex-row justify-center items-center w-[100%] h-[calc(4rem+4px)] border-b border-[#dad9d9] bg-[#FFFFFF]">
        <div className="headerContent w-screen xl:w-[60vw] p-8 flex flex-row justify-between items-center">
            <a href="/"><img src={logo} alt="Palette Pal Logo" className="logo h-10 w-auto md:h-14" /></a>
            {dropdown ? <HeaderDropdown setDropdown={setDropdown}/> : null}

            {/* nav bar on bigger screens */}
            <nav>
            
                <ul className="md:flex flex-row justify-around gap-10 text-md hidden font-medium text-[#2D2D2D]">
                    
                    <li><a href="" className="text-[#2D2D2D] hover:text-[#828282] transition-all ease-in-out">Upcoming Features</a></li>
                    <li><a className="text-[#2D2D2D] hover:text-[#828282] transition-all ease-in-out" onMouseEnter={dropdownEnter} >Tools</a>
                    </li>
                </ul>
            </nav>

            {/* dynamic hamburgur menu on small screens  */}
            <div className="hamburgerMenu md:hidden" onClick={hamburgerHandler}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2D2D2D" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            </div>
        </header>
    );
}
export default Header;
