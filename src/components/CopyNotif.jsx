import { useEffect } from "react";


function CopyNotif(props){
    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
            props.copyMessageState(false);
            console.log("test")
        }, 1000);
      }, []);    
    return(<div className="absolute translate-y-48">Color Copied!</div>)
}

export default CopyNotif