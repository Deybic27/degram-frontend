import { useEffect, useState } from "react";
import Post from "../post/Post.jsx"
import { recommendedPosts } from "./js/recommended-posts.js"

import "./scss/recommended-posts.scss"

function RecommendedPosts() {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        recommendedPosts()
            .then(data => {
                setPosts(data)
            })
    }, []);
    return (
        <>
            <div className="recommend-posts">
                {posts.map((post, index) => {
                    // console.log(post);
                    return <Post
                        key={post.id}
                        post={post}
                    />
                })}
                {/* <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post /> */}
            </div>
        </>
    )
}

export default RecommendedPosts