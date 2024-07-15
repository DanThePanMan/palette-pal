import { useEffect } from "react";


function CopyNotif(props){
    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
            props.copyMessageState(false);
        }, 1000);
      }, []);    
    return(<div className="md-flex absolute translate-y-64">Color Copied!</div>)
}

export default CopyNotif