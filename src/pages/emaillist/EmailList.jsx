import styles from "./EmailList.module.css";
import EmailListSections from "./EmailListSections";
import EmailListSettings from "./EmailListSettings";
import EmailRow from "./emailRow/EmailRow";

function EmailList() {
    return (
        <div className={styles.emailList}>
            <EmailListSettings />

            <EmailListSections />
            
            <div className={styles.emailList__list}>
                <EmailRow
                    id="2121wwx"
                    title="Twitch"
                    subject="Hey Fellow streamer!!"
                    description="This is a test"
                    time="10 pm"
                />
                <EmailRow 
                    id="ds54e4e"
                    title="Twitch"
                    subject="Hey Fellow streamer!!"
                    description="This is a testssssssssssssssssssss"
                    time="10 pm"
                />
            </div>
        </div>
    );
}

export default EmailList;