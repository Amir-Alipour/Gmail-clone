import styles from "./Header.module.css";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    onClick={() => history.push("/")}
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt="Gmail Logo"
                    style={{cursor: "pointer"}}
                />
            </div>

            <div className={styles.header__middle}>
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon />
            </div>

            <div className={styles.header__right}>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    );
}
export default Header;
