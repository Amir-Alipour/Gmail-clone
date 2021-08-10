import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://images.macrumors.com/t/tOeSavAWwmT_Nsa7e67NCK_J-FA=/400x0/filters:quality(90)/article-new/2020/10/newgmaillogo.0.jpg?lossy" alt="" />
            </div>

            <div className="header__middle">

            </div>

            <div className="header__right">

            </div>
        </div>
    )
}
export default Header
