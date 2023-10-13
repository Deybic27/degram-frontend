import ProfileInfo from "./ProfileInfo"
import ProfilePosts from "./ProfilePosts"
import "./scss/content.scss"

function Content() {
    return (
        <main className="content">
            <ProfileInfo />
            <ProfilePosts />
        </main>
    )
}

export default Content