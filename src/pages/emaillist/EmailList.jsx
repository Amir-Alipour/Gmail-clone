import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import styles from './EmailList.module.css'

function EmailList() {
    return (
        <div className={styles.emailList}>
            <div className={styles.emailList__settings}>
                <div className={styles.emailList__settingsLeft}>
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>

                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default EmailList
