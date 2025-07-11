import React from "react";
import { Menu, ArrowLeft } from "lucide-react";
import * as styles from "./styles.module.scss";

interface TopBarProps {
    showMenu: boolean;
    onToggleMenu: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ showMenu, onToggleMenu }) => {
    return (
        <div className={styles.topBar}>
            {showMenu ? (
                <button
                    aria-label="Back"
                    className={styles.iconBtn}
                    onClick={onToggleMenu}
                >
                    <ArrowLeft size={28} />
                </button>
            ) : (
                <button
                    aria-label="Open menu"
                    className={styles.iconBtn}
                    onClick={onToggleMenu}
                >
                    <Menu size={28} />
                </button>
            )}
            <span className={styles.title}>
                {showMenu ? "Menu" : "Register card form"}
            </span>
        </div>
    );
};
