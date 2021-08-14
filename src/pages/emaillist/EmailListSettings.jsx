import styles from "./EmailList.module.css";
import { Checkbox, IconButton } from "@material-ui/core";
import {
    MoreVert,
    Redo,
    ArrowDropDown,
    ChevronLeft,
    ChevronRight,
    Settings,
    KeyboardHide,
} from "@material-ui/icons";

function EmailListSettings() {
    return (
        <div className={styles.emailList__settings}>
            <div className={styles.emailList__settingsLeft}>
                <Checkbox />

                <IconButton>
                    <ArrowDropDown />
                </IconButton>

                <IconButton>
                    <Redo />
                </IconButton>

                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>

            <div className={styles.emailList__settingsRight}>
                <IconButton>
                    <ChevronLeft />
                </IconButton>

                <IconButton>
                    <ChevronRight />
                </IconButton>
                
                <IconButton>
                    <KeyboardHide />
                </IconButton>

                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>
    );
}

export default EmailListSettings;
