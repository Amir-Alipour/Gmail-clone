import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMails, selectAllMailsIds } from "../../features/mailsListSlice";
import styles from "./EmailList.module.css";
import EmailListSections from "./EmailListSections";
import EmailListSettings from "./EmailListSettings";
import EmailRow from "./emailRow/EmailRow";

function EmailList() {
    const status = useSelector(state => state.mailsList.status);
    const dispatch = useDispatch();
    const mailsIds = useSelector(selectAllMailsIds);

    useLayoutEffect(() => {
        if(status === "idle"){
            dispatch(fetchMails());
        }
    }, [dispatch, status])

    return (
        <div className={styles.emailList}>
            <EmailListSettings />

            <EmailListSections />
            
            <div className={styles.emailList__list}>
                {
                    mailsIds
                    ? (
                        mailsIds.map(id => (
                            <EmailRow key={id} id={id} />
                        ))
                    )
                    : (
                        <div className="alert alert-warning">Loading ...!</div>
                    )
                }
            </div>
        </div>
    );
}

export default EmailList;