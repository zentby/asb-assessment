import React from "react";
import * as styles from "./styles.module.scss";
import { User } from "./types";

interface CreditCardFormProps {
    user: User;
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ user }) => {
    return (
        <form className={styles.form} autoComplete="off">
            <div className={styles.welcome}>Welcome {user.firstName}</div>
            <input
                className={styles.input}
                type="text"
                placeholder="Credit card number"
                name="cc"
                autoComplete="cc-number"
                inputMode="numeric"
                pattern="[0-9 ]*"
            />
            <div className={styles.row}>
                <input
                    className={styles.input}
                    type="password"
                    placeholder="CVC"
                    name="cvc"
                    autoComplete="cc-csc"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={4}
                />
                <input
                    className={styles.input}
                    type="month"
                    placeholder="expiry"
                    name="expiry"
                    autoComplete="cc-exp"
                />
            </div>
            <button className={styles.submitBtn} type="submit">
                Submit
            </button>
        </form>
    );
};
