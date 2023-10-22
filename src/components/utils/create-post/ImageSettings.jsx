import { useContext, useState } from "react"

import "./scss/image-settings.scss"
import Formats from "./Formats"

function ImageSettings({context}) {
    const [showFormats, setShowFormats] = useState(false)

    const handleFormats = () => setShowFormats(!showFormats)

    return (
        <>
            <section className="settings">
                <div className="items">
                    <span className="item" onClick={handleFormats}>
                        <span className="material-symbols-outlined">
                            fullscreen
                        </span>
                        <Formats show={showFormats} context={context} />
                    </span>
                </div>
            </section>
        </>
    )
}

export default ImageSettings