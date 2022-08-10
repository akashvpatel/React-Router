import classes from "./MainNavigation.module.css"
import { NavLink } from "react-router-dom"
const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Simple Blog</div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to="blogs" activeClassName={classes.active}>All Blogs  </NavLink> </li>
                    <li><NavLink to="/new-blog" activeClassName={classes.active}>Add a blog  </NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;