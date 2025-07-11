import React, { useState, useCallback } from "react";
import * as styles from "./styles.module.scss";
import { TopBar } from "./TopBar";
import { MenuContent } from "./MenuContent";
import { CreditCardForm } from "./CreditCardForm";
import { User } from "./types";

interface RegisterCardPageProps {
    user: User;
}

export const RegisterCardPage: React.FC<RegisterCardPageProps> = ({ user }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = useCallback(() => {
        setShowMenu((menu) => !menu);
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <TopBar showMenu={showMenu} onToggleMenu={handleToggleMenu} />
                {showMenu ? <MenuContent /> : <CreditCardForm user={user} />}
            </main>
        </div>
    );
};
