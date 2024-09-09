import PaletteGenbtn from "../Picker/PaletteGenBtn";
import BootstrapPalette from "./BootstrapPalette";
import { useState, useEffect, useContext } from "react";
import { paletteContext } from "../CnR";
import CodeSnippet from "./CodeSnippet";

function BootstrapIndex() {
    const [palette, setPalette] = useContext(paletteContext);
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

    useEffect(() => {
        sessionStorage.setItem("defaultData", JSON.stringify(palette));
    }, [palette]);

    return (
        <div className="w-[100%] flex flex-col justify-start items-center gap-32 p-8 lg:p-20">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl md:text-3xl xl:text-5xl ">
                    Export to Bootstrap
                </h1>
                <p className="text-lg md:text-sm xl:text-lg">
                    Generate colors for the bootstrap color utility classes
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-32">
                <BootstrapPalette />
                <div className="flex flex-col gap-6">
                    <CodeSnippet/>
                    <PaletteGenbtn
                        params={param}
                        codes={() => {}}
                    ></PaletteGenbtn>
                </div>
            </div>
        </div>
    );
}

export default BootstrapIndex;
