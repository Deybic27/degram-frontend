import "./scss/post-body.scss"

function PostBody({path}) {
    return (
        <>
            <div className="post-body">
                <img className="post-body__image" src={`${MEDIA_HOST}/${path}`} alt="Post Maluma" />
            </div>
        </>
    )
}

export default PostBody