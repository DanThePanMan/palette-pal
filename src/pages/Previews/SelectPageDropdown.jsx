import { useState } from "react";

function SelectPageDropdown(props) {
    const page = props.page;
    const setPage = props.setPage;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <button
                className="flex flex-row justify-evenly items-center w-36 h-10 rounded-xl bg-white active:bg-gray-200 hover:bg-gray-200 transition-all ease-in-out"
                onClick={() => setIsOpen((prev) => !prev)}>
                {page}
                {!isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill"
                        viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-up-fill"
                        viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                )}
            </button>
            {isOpen && (
                <div className="bg-[#2D2D2D] absolute flex flex-col w-32 p-2 text-white rounded-xl gap-4 pd-4 mt-4">
                    <button
                        className="hover:bg-[#3a3a3a] rounded-md p-2 transition-all ease-in-out"
                        onClick={() => {
                            setPage("Landing");
                            setIsOpen(false);
                        }}>
                        Landing
                    </button>
                    <button
                        className="hover:bg-[#3a3a3a] rounded-md p-2 transition-all ease-in-out"
                        onClick={() => {
                            setPage("DashBoard");
                            setIsOpen(false);
                        }}>
                        Dashboard
                    </button>
                    <button
                        className="hover:bg-[#3a3a3a] rounded-md p-2 transition-all ease-in-out"
                        onClick={() => {
                            setPage("eCommerce");
                            setIsOpen(false);
                        }}>
                        eCommerce
                    </button>
                </div>
            )}
        </div>
    );
}

export default SelectPageDropdown;
