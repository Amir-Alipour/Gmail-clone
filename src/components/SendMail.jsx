import styles from "./SendMail.module.css";
import { Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

function SendMail() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        alert(`
        you wanna send ${formData.subject}
        to ${formData.to}
        `);
    };

    return (
        <div className={styles.sendMail}>
            <div className={styles.sendMail__header}>
                <h3>New Message</h3>
                <Close
                    className={styles.sendMail__close}
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="To"
                    type="text"
                    {...register("to", { required: true })}
                />
                {errors.to && (
                    <p className={styles.sendMail__error}>To is Required!</p>
                )}

                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: true })}
                />
                {errors.subject && (
                    <p className={styles.sendMail__error}>
                        subject is Required!
                    </p>
                )}

                <textarea
                    placeholder="Message ..."
                    type="text"
                    className={styles.sendMail__message}
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <p className={styles.sendMail__error}>
                        Message is Required!
                    </p>
                )}

                <div>
                    <Button type="submit" className={styles.sendMail__send}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
