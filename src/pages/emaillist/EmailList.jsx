import styles from "./EmailList.module.css";
import EmailListSections from "./EmailListSections";
import EmailListSettings from "./EmailListSettings";

function EmailList() {
    return (
        <div className={styles.emailList}>
            <EmailListSettings />

            <EmailListSections />

            
        </div>
    );
}

export default EmailList;