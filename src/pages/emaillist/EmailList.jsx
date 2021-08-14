import styles from "./EmailList.module.css";
import EmailListSettings from "./EmailListSettings";

function EmailList() {
    return (
        <div className={styles.emailList}>
            <EmailListSettings />

            <div className={styles.emailList__sections}>

            </div>
        </div>
    );
}

export default EmailList;
