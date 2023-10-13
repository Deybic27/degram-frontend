import { useContext } from "react";
import "./scss/status-message.scss";

function StatusMessage({context, text}) {
    const { showStatusMessage } = useContext(context)

    return (
        <div className={`status-message ${showStatusMessage}`}>
            <div className="status-message_content">
                {text}
            </div>
        </div>
    )
}

export default StatusMessage