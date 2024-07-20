import MiniPicker from "./MiniPicker";

import { useState } from "react";


function PreviewIndex() {
    const [page,setPage] = useState("Landing");


    return(<MiniPicker page={page} setPage={setPage}/>)
}

export default PreviewIndex;
