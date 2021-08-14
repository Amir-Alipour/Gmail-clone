import styles from './Sidebar.module.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

function Sidebar() {
    return (
        <div className="sidebar">
            <Button 
                startIcon={<AddIcon fontSize="large" />}
                className={styles.sidebar__compose}
            >
                Compose
            </Button>
        </div>
    )
}



export default Sidebar