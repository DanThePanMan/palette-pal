import MiniPickerPalette from "./MiniPickerPalette";
import { useState } from "react";
import { paletteContext } from "../CnR";
import { useContext, useEffect } from "react";
import PaletteGenbtn from "../Picker/PaletteGenBtn";
import SelectPageDropdown from "./SelectPageDropdown";


function MiniPicker(props) {
    const [palette, setPalette] = useContext(paletteContext);
    const [models, setModels] = useState(["default"]);

    useEffect(() => {
        function fetchData(url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => setModels(data.result))
                .catch((error) => console.error("Error:", error));
        }

        fetchData("http://colormind.io/list/");
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
            <PaletteGenbtn params={param} codes={() => {}}></PaletteGenbtn>
            <SelectPageDropdown page={props.page} setPage={props.setPage}n/>
        </div>
    );
}

export default MiniPicker;
