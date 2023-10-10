import MenuLeft from './components/menu/MenuLeft.jsx'
import Content from './components/content/Content.jsx'
import "./scss/feed-news.scss"

function FeedNews() {
    return (
        <div className='feed-news'>
            <MenuLeft />
            <Content />
        </div> 
    )
}

export default FeedNews