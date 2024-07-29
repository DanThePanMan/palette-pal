import MiniPicker from "./MiniPicker";
import PreviewLanding from "./PreviewPages/PreviewLanding/PreviewLanding";
import DashboardIndex from "./PreviewPages/PreviewDashboard/DashboardIndex";

import { useState } from "react";

function PreviewIndex() {
    const [page, setPage] = useState("Landing");

    function renderPage(pageParam){
        switch(pageParam) {
            case "Landing":
                return <PreviewLanding />;
            case "DashBoard":
                return <DashboardIndex />;
            case "Blog":
                return <PreviewLanding />;
            default:
                return null; // or handle default case accordingly
        }
    }


    return (
        <>
            <MiniPicker page={page} setPage={setPage} />
            {renderPage(page)}
        </>
    );
}

export default PreviewIndex;
