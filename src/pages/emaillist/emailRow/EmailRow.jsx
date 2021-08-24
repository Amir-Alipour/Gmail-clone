import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMails, selectMailById } from "../../../features/mailsListSlice";
import moment from "moment";

function EmailRow({ id }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const mail = useSelector(state => selectMailById(state, id))

    useLayoutEffect(() => {
        if(!mail){
            dispatch(fetchMails());
        }
    }, [dispatch, mail])

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
                <h3 className="emialRow__title">{mail.title}</h3>

                <div className="emialRow__message">
                    <h4>{mail.subject}</h4> &nbsp;
                    <span className="emialRow__description">
                        {" "}
                        - {mail.description}
                    </span>
                </div>

                <p title={moment(mail.stamp).format()} className="emialRow__time">{moment(mail.stamp).fromNow()}</p>
            </div>
        </div>
    );
}

export default EmailRow;
