import styles from './Sidebar.module.css';
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption';

import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

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
            <SidebarOption Icon={AccessAlarmIcon} title="Snoozed" number={4} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={3} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={48} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={12} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={6} />

            <div className={styles.sidebar__footer}>
                <div className={styles.sidebar__footerIcons}>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>

                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}



export default Sidebar