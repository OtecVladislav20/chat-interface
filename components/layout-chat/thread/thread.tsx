import { ThreadPrimitive } from "@assistant-ui/react";
import { FC } from "react";
import { ThreadViewport } from "../viewport/thread-viewport";
import styles from "./thread.module.scss";


export const Thread: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ThreadPrimitive.Root className={styles.thread}>
                    <ThreadViewport />
                </ThreadPrimitive.Root>
            </div>
        </div>
    );
};
