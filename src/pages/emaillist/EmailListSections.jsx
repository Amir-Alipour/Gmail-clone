import styles from "./EmailList.module.css";
import { LocalOffer, People, Inbox } from "@material-ui/icons";
import Section from "../../components/Section";

function EmailListSections() {
    return (
        <div className={styles.emailList__sections}>
                <Section Icon={Inbox} title="primary" color="#ff3b3b" selected />
                <Section Icon={People} title="Social" color="#3b80ff" />
                <Section Icon={LocalOffer} title="Promotions" color="#1ee33b" />
        </div>
    )
}

export default EmailListSections;
