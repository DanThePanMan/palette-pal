import { useState } from "react";

import "./App.css";

function App() {
    const data = {
        method: "POST",
        body: JSON.stringify({
            model: "default",
            input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
        }),
    };

    async function fetchPalette(params) {
        try {
            const response = await fetch("http://colormind.io/api/", params);
            if (!response.ok) {
                throw new Error("Could not get response from server");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("error"); //make this show a modal
        }
    }

    const [palette, setPalette] = useState(fetchPalette(data));

    return (
        <>
            <button onClick={() => console.log(fetchPalette(data))}>
                click me
            </button>
        </>
    );
}

export default App;
