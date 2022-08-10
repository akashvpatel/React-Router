import { Fragment } from "react";
import MainNavogation from "./MainNavigation"
import classes from "./Layout.module.css"

const Layout = (props) => {
    return <Fragment>
        <MainNavogation />
        <main className={classes.main}>{props.children}</main>
    </Fragment>
}


export default Layout;