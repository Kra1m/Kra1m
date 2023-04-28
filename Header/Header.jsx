import style from './Header.module.css'
function Header(){
    return(
        <nav>
            <label className={style.logo}>Blog.room</label>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="/create">New post</a></li>
                <li><a href="/login">Login</a></li>
                
            </ul>
        </nav>
    )
}

export default Header