import MiniPickerPalette from "./MiniPickerPalette";
import { useState } from "react";
import { paletteContext } from "../CnR";
import { useContext, useEffect } from "react";
import PaletteGenbtn from "../Picker/PaletteGenBtn";
import SelectPageDropdown from "./SelectPageDropdown";
import ButtonNoColor from "../../components/ButtonNoColor";


function MiniPicker(props) {
    const [palette, setPalette] = useContext(paletteContext);
    const [models, setModels] = useState(["default"]);
    const [allCodes, setAllCodes] = useState("Copy Codes");
    async function getAllCodeshandler() {
        setAllCodes("Code Copied");
        const copiedText = JSON.stringify(palette);
        await navigator.clipboard.writeText(copiedText);
    }

    useEffect(() => {
        function fetchData(url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => setModels(data.result))
                .catch((error) => console.error("Error:", error));
        }

        fetchData("/api/proxyList");
    }, []);

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    const param = {
        method: "POST",
        body: JSON.stringify({  
            model: getRandomItem(models),
            input: [[243, 244, 243], "N", "N", "N", "N"],
        }),
    };

    useEffect(() => {
        sessionStorage.setItem('defaultData', JSON.stringify(palette));
    },[palette])
    


    return (
        <div className="bg-[#2D2D2D] sticky top-0 w-[100%] h-14 flex flex-row justify-center items-center gap-4">
            <p className="text-white font-medium text-lg">Currently Previewing:</p>
            <MiniPickerPalette></MiniPickerPalette>
            <PaletteGenbtn params={param} codes={setAllCodes}></PaletteGenbtn>
            <ButtonNoColor
                    onClick={() => getAllCodeshandler()}
                    text={allCodes}
                ></ButtonNoColor>
            <SelectPageDropdown page={props.page} setPage={props.setPage}n/>
        </div>
    );
}

export default MiniPicker;
