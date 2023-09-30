import Post from "../post/Post.jsx"

import "./scss/recommended-posts.scss"

function RecommendedPosts() {
    return (
        <>
            <div className="recommend-posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}

export default RecommendedPosts