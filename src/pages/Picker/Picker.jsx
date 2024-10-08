import PaletteGenbtn from "./PaletteGenBtn";
import Palette from "./Palette";
import { paletteContext } from "../CnR";
import { useContext, useState, useEffect } from "react";
import ButtonNoColor from "../../components/ButtonNoColor";

function Picker() {
    const [palette, setPalette] = useContext(paletteContext);

    // get models
    const [models, setModels] = useState(["default"]);

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

    const [allCodes, setAllCodes] = useState("Copy Codes");

    async function getAllCodeshandler() {
        setAllCodes("Code Copied");
        const copiedText = JSON.stringify(palette);
        await navigator.clipboard.writeText(copiedText);
    }

    return (
        <main className="flex flex-col justify-around items-center w-[100%] md:m-24 md:mt-8 m-10 h-[54rem] gap-10 xl:gap-12 md:h-[70vh] pb-12">
            <h1 className="font-bold text-xl md:text-3xl xl:text-5xl ">
                Palette Generator
            </h1>
            <Palette />
            <div className="flex flex-row gap-6">
                <PaletteGenbtn
                    params={param}
                    codes={setAllCodes}
                ></PaletteGenbtn>
                <ButtonNoColor
                    onClick={() => getAllCodeshandler()}
                    text={allCodes}
                ></ButtonNoColor>
                <a href="Preview">
                    <ButtonNoColor text="Preview"></ButtonNoColor>
                </a>
            </div>
        </main>
    );
}

export default Picker;
