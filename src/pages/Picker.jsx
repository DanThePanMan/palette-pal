import PaletteGenbtn from "../components/PaletteGenBtn";
import Palette from "../components/Palette";

function App() {
    const data = {
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: ["N", [90, 83, 82], "N", "N", "N"],
        }),
    };

    return (
        <main className="flex flex-col justify-center items-center w-screen m-24 gap-24">
            <Palette></Palette>
            <PaletteGenbtn params={data}></PaletteGenbtn>
        </main>
    );
}

export default App;
