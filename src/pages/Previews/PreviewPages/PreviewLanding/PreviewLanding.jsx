import SloganSection from "./SloganSection";
import Features from "./Features";
import Signup from "./Signup";
import PricePlanning from "./PricePlanning";

function PreviewLanding() {
    return (
        <div className="overflow-x-hidden flex flex-col flex-grow w-screen">
            <SloganSection />
            <Features />
            <Signup/>
            <PricePlanning/>
        </div>
    );
}

export default PreviewLanding;
