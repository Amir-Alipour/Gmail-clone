import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();

    return (
        <div className="emailRow">
            <div className="emialRow__options">
                <Checkbox />

                <IconButton>
                    <StarBorderOutlined />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <div
                className="emailRow__details"
                onClick={() => history.push(`/mail/${id}`)}
            >
                <h3 className="emialRow__title">{title}</h3>

                <div className="emialRow__message">
                    <h4>{subject}</h4> &nbsp;
                    <span className="emialRow__description">
                        {" "}
                        - {description}
                    </span>
                </div>

                <p className="emialRow__time">{time}</p>
            </div>
        </div>
    );
}

export default EmailRow;
