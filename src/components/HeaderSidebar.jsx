import React, { useEffect, useState } from "react";

function HeaderSidebar(props) {
    const [sidebarStyle, setSidebarStyle] = useState({
        transform: "translateX(100%)", // Initially off-screen
    });

    useEffect(() => {
        if (props.sidebar) {
            // Slide sidebar into the screen
            setSidebarStyle({
                transform: "translateX(0)",
                transition: "transform 0.3s ease-in-out",
                left: "60vw", // Set left position when sidebar slides in
                width: "40vw", // Set width when sidebar slides in
            });
        } else {
            // Slide sidebar out of the screen
            setSidebarStyle({
                transform: "translateX(100%)",
                transition: "transform 0.3s ease-in-out",
                left: "100vw", // Slide back to off-screen position
                width: "0", // Reduce width to 0 when sliding out
            });
        }
    }, [props.sidebar]);

    function hamburgerHandler() {
        props.setSidebar(false);
    }

    return (
        <>
            <div
                className="h-screen absolute bg-[#2D2D2D] transition-all ease-in-out z-50"
                style={sidebarStyle}>
                <div className="p-8">
                    <nav>
                        <ul className="flex flex-col justify-around gap-5 text-sm font-medium text-white">
                            <li>
                                <a
                                    href="/Picker"
                                    className="text-white hover:text-[#828282] transition-all ease-in-out">
                                    Palette Generator
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/Preview"
                                    className="text-white hover:text-[#828282] transition-all ease-in-out">
                                    Palette Preview
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/Bootstrap"
                                    className="text-white hover:text-[#828282] transition-all ease-in-out">
                                    Export to Bootstrap
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/Custom"
                                    className="text-white hover:text-[#828282] transition-all ease-in-out">
                                    Custom Palettes
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div
                onClick={hamburgerHandler}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        </>
    );
}

export default HeaderSidebar;
