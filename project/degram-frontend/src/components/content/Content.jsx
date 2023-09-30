import RecommendedPosts from "./RecommendedPosts"
import RecommendedProfiles from "./RecommendedProfiles"
import "./scss/content.scss"

function Content() {
    return (
        <>
            <main className="recommend">
                <RecommendedPosts />
                <RecommendedProfiles />
            </main>
        </>
    )
}

export default Content