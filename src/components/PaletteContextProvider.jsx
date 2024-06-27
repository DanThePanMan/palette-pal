import { createContext } from "react";


function paletteContextProvider(){
    const paletteContext = createContext();

    const [palette, setPalette] = useState({
        "light shades": "FFFFFF",
        "light accent": "828282",
        "main brand": "2D2D2D",
        "dark accent": "EDEDED",
        "dark shades": "2D2D2D",
    });
    


}
