import { useContext } from "react";

function Formats({show, context}) {
    const { setFormatImage, formatImageDefault } = useContext(context)

    let hidden = "hidden";
    if (show) hidden = ""

    const format1_1 = () => {
        let width = formatImageDefault.width
        let height = formatImageDefault.height
        setFormatImage({type: "1_1", width: width, height: height})
    }
    const format4_5 = () => {
        let width = parseInt(formatImageDefault.width) - (parseInt(formatImageDefault.width) * 20 / 100)
        let height = formatImageDefault.height
        setFormatImage({type: "4_5", width: width+"px", height: height})
    }

    const format16_9 = () => {
        let width = formatImageDefault.width
        let height = parseInt(formatImageDefault.height) - (parseInt(formatImageDefault.height) * 56 / 100)
        setFormatImage({type: "16_9", width: width, height: height+"px"})
    }
    return (
        <div className={`subitems ${hidden}`}>
            <span className="items" onClick={format1_1}>
                1:1
                <span className="material-symbols-outlined">
                    check_box_outline_blank
                </span>
            </span>
            <span className="items" onClick={format4_5}>
                4:5
                <span className="material-symbols-outlined">
                    crop_portrait
                </span>
            </span>
            <span className="items" onClick={format16_9}>
                16:9
                <span className="material-symbols-outlined">
                    crop_16_9
                </span>
            </span>
        </div>
    )
}

export default Formats