import "./App.css";
import PaletteGenbtn from "./components/PaletteGenBtn";

function App() {
    const data = {
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: ["N", [90, 83, 82], "N", "N", "N"],
        }),
    };

    return (
        <>
            <PaletteGenbtn params={data}></PaletteGenbtn>
        </>
    );
}

export default App;
