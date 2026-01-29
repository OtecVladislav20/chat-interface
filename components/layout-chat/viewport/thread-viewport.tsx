import { AssistantIf, ThreadPrimitive } from "@assistant-ui/react";
import { FC } from "react";
import { Composer } from "../composer";
import { Messages } from "../messages";
import { ThreadScrollToBottom } from "../scroll-to-bottom";
import { ThreadWelcome } from "../welcome";
import styles from "./thread-viewport.module.scss";


export const ThreadViewport: FC = () => {
  return (
    <ThreadPrimitive.Viewport
        turnAnchor="top"
        className={styles.viewport}
    >
        <AssistantIf condition={({ thread }) => thread.isEmpty}>
            <ThreadWelcome />
        </AssistantIf>

        <Messages />

        <ThreadPrimitive.ViewportFooter className={styles.footer}>
            <ThreadScrollToBottom />
            <Composer />
        </ThreadPrimitive.ViewportFooter>
    </ThreadPrimitive.Viewport>
  );
};
