import { Avatar, Button, IconButton } from "@material-ui/core";
import {
    ExitToApp,
    Forward,
    LabelImportant,
    Print,
    Reply,
    UnfoldMore,
} from "@material-ui/icons";
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

            <div className={styles.mail_body}>
                <div className={styles.mail__bodyHeader}>
                    <h2>Subject</h2>
                    <LabelImportant className={styles.mail__important} />
                    <p>Title</p>
                </div>

                <div className={styles.mail__detail}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Avatar className={styles.mail__avatar}/>
                        <p>email@gmail.com</p>
                    </div>

                    <div style={{display: "flex", alignItems: "center"}}>
                        <p>time 10 pm</p>
                        <IconButton>
                            <Reply />
                        </IconButton>
                    </div>
                </div>

                <div className={styles.mail__content}>
                    <p>
                        this is a message
                    </p>
                </div>
            </div>

            <div className={styles.mail__footer}>
                <Button className={styles.mail__footerBtn}>
                    <Reply />
                    <p>Reply</p>
                </Button>

                <Button className={styles.mail__footerBtn}>
                    <Forward />
                    <p>Forward</p>
                </Button>
            </div>
        </div>
    );
}

export default Mail;
