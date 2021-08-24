import { Avatar, Button, IconButton } from "@material-ui/core";
import {
    ExitToApp,
    Forward,
    LabelImportant,
    Print,
    Reply,
    UnfoldMore,
} from "@material-ui/icons";
import moment from "moment";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleMail, selectMailById } from "../../features/mailsListSlice";
import styles from "./Mail.module.css";
import MailToolsRightIcons from "./MailToolsRightIcons";

function printPage(text){
    let printWindow = window.open('_blank');
    printWindow.document.open('text/plain');
    printWindow.document.write(text);
    printWindow.print();
    printWindow.close();
}

function Mail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const mail = useSelector((state) => selectMailById(state, id));

    useLayoutEffect(() => {
        if (!mail) {
            dispatch(fetchSingleMail(id));
        }
    }, [dispatch, mail, id]);

    return (
        <>
            {mail && (
                <div className={styles.mail}>
                    <div className={styles.mail__tools}>
                        <div className={styles.mail__toolsRight}>
                            <MailToolsRightIcons />
                        </div>

                        <div className={styles.mail__toolsLeft}>
                            <IconButton>
                                <UnfoldMore />
                            </IconButton>

                            <IconButton onClick={() => printPage(mail.message)}>
                                <Print />
                            </IconButton>

                            <IconButton>
                                <ExitToApp />
                            </IconButton>
                        </div>
                    </div>

                    <div className={styles.mail_body}>
                        <div className={styles.mail__bodyHeader}>
                            <h2>{mail.subject}</h2>
                            <LabelImportant
                                className={styles.mail__important}
                            />
                            <p>{mail.title}</p>
                        </div>

                        <div className={styles.mail__detail}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    className={styles.mail__avatar}
                                    src={mail.user.profile}
                                    alt={`${mail.user.name} Profile`}
                                />
                                <p>{mail.user.email}</p>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p>{moment(mail.stamp).fromNow()}</p>
                                <IconButton>
                                    <Reply />
                                </IconButton>
                            </div>
                        </div>

                        <div className={styles.mail__content}>
                            <p>{mail.message}</p>
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
            )}
        </>
    );
}

export default Mail;
