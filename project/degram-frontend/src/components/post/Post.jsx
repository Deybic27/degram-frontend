import PostHeader from "./PostHeader.jsx"
import PostBody from "./PostBody.jsx"
import PostFooter from "./PostFooter.jsx"
import PostInfo from "./PostInfo.jsx"
import PostComment from "./PostComment.jsx"

import "./scss/post.scss"

function Post() {
    return (
        <>
            <article className="post">
                <PostHeader />
                <PostBody />
                <PostFooter />
                <PostInfo />
                <PostComment />
                <div className="post-line">
                    <hr />
                </div>
            </article>
        </>
    )
}

export default Post