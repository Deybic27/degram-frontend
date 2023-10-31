import "./scss/status.scss"

function Status({type}) {
    if (type == "success") {
        return (
            <>
                <img className="status_img" src={`${MEDIA_HOST}/media/others/success.gif`} alt="" />
            </>
        )
    }
}

export default Status