import styles from './Sidebar.module.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';

function Sidebar() {
    return (
        <div className={"sidebar"}>
            <Button 
                startIcon={<AddIcon fontSize="large" />}
                className={styles.sidebar__compose}
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected />
            <SidebarOption Icon={StarIcon} title="Starred" number={16} />
        </div>
    )
}



export default Sidebar