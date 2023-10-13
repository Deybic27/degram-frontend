import PostBody from "../post/PostBody"
import "./scss/profile-posts.scss"

function ProfilePosts() {
    return (
        <div className="profile-posts">
            <div className="profile-posts__header">
                <div className="profile-posts__header_item">
                    <span className="material-symbols-outlined">grid_view</span>
                    <span className="profile-posts__header_item_text">Publicaciones</span>
                </div>
            </div>
            <div className="profile-posts__content">
                <PostBody />
                <PostBody />
                <PostBody />
                <PostBody />
            </div>
        </div>
    )
}

export default ProfilePosts