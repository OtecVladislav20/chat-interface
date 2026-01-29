import { FC } from "react";
import { ThreadSuggestions } from "../suggestions";
import styles from "./thread-welcome.module.scss";


export const ThreadWelcome: FC = () => {
    return (
        <div className={styles.root}>
          <div className={styles.center}>
            <div className={styles.message}>
              <h1 className={styles.title}>Hello there!</h1>
              <p className={styles.subtitle}>How can I help you today?</p>
            </div>
          </div>
          <ThreadSuggestions />
        </div>
    );
};
