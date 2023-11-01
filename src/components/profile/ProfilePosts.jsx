import { useEffect, useState } from "react";
import PostBody from "../post/PostBody"
import "./scss/profile-posts.scss"
import * as profile from "./../../assets/js/profile"

function ProfilePosts() {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        profile.getPosts()
            .then(data => {
                setPosts(data)
            })
    }, []);
    return (
        <div className="profile-posts">
            <div className="profile-posts__header">
                <div className="profile-posts__header_item">
                    <span className="material-symbols-outlined">grid_view</span>
                    <span className="profile-posts__header_item_text">Publicaciones</span>
                </div>
            </div>
            <div className="profile-posts__content">
                {posts.map((post, index) => {
                    console.log(post);
                    return <PostBody
                        key={post.id}
                        path={post.media.path}
                    />
                })}
            </div>
        </div>
    )
}

export default ProfilePosts