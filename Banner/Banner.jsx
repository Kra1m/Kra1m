import style from './Banner.module.css'

function Banner(){
    return(
        <nav className={style.cover}>
            <ul>
                <li><a href="/myblogs">My blog</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/friends">Friends</a></li>
            </ul>
        </nav>
    )
}

export default Banner