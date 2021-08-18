import { IconButton } from "@material-ui/core";
import { ArrowBack, CheckCircle, Delete, Email, Error, LabelImportant, MoreVert, MoveToInbox, WatchLater } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function MailToolsRightIcons() {
    const history = useHistory();

    return (
        <>
            <IconButton onClick={() => history.push("/")}>
                <ArrowBack />
            </IconButton>

            <IconButton>
                <MoveToInbox />
            </IconButton>

            <IconButton>
                <Error />
            </IconButton>

            <IconButton>
                <Delete />
            </IconButton>

            <IconButton>
                <Email />
            </IconButton>

            <IconButton>
                <WatchLater />
            </IconButton>

            <IconButton>
                <CheckCircle />
            </IconButton>

            <IconButton>
                <LabelImportant />
            </IconButton>

            <IconButton>
                <MoreVert />
            </IconButton>
        </>
    )
}

export default MailToolsRightIcons
