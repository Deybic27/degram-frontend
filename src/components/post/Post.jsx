import PostHeader from "./PostHeader.jsx"
import PostBody from "./PostBody.jsx"
import PostFooter from "./PostFooter.jsx"
import PostInfo from "./PostInfo.jsx"
import PostComment from "./PostComment.jsx"

import "./scss/post.scss"

function Post({post}) {
    console.log(post);
    return (
        <>
            <article className="post">
                <PostHeader
                    image={post.user.image}
                    username={post.user.username}
                    created_at={post.created_at}
                    time={post.time}
                />
                <PostBody
                    path={post.media.path}
                />
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