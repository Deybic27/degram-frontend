import { useContext } from "react";

function Formats({show, context}) {
    const { setFormatImage, formatImageDefault } = useContext(context)

    let hidden = "hidden";
    if (show) hidden = ""

    const format1x1 = () => {
        let width = formatImageDefault.width
        let height = formatImageDefault.height
        setFormatImage({width: width, height: height})
    }
    const format4x5 = () => {
        let width = parseInt(formatImageDefault.width) - (parseInt(formatImageDefault.width) * 20 / 100)
        let height = formatImageDefault.height
        setFormatImage({width: width+"px", height: height})
    }

    const format16x9 = () => {
        let width = formatImageDefault.width
        let height = parseInt(formatImageDefault.height) - (parseInt(formatImageDefault.height) * 56 / 100)
        setFormatImage({width: width, height: height+"px"})
    }
    return (
        <div className={`subitems ${hidden}`}>
            <span className="items" onClick={format1x1}>
                1:1
                <span className="material-symbols-outlined">
                    check_box_outline_blank
                </span>
            </span>
            <span className="items" onClick={format4x5}>
                4:5
                <span class="material-symbols-outlined">
                    crop_portrait
                </span>
            </span>
            <span className="items" onClick={format16x9}>
                16:9
                <span class="material-symbols-outlined">
                    crop_16_9
                </span>
            </span>
        </div>
    )
}

export default Formats