import { IconButton } from "@material-ui/core";
import { ExitToApp, Print, UnfoldMore } from "@material-ui/icons";
import styles from "./Mail.module.css";
import MailToolsRightIcons from "./MailToolsRightIcons";

function Mail() {
    return (
        <div className={styles.mail}>
            <div className={styles.mail__tools}>
                <div className={styles.mail__toolsRight}>
                    <MailToolsRightIcons />
                </div>

                <div className={styles.mail__toolsLeft}>
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>

                    <IconButton>
                        <Print />
                    </IconButton>

                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Mail;
