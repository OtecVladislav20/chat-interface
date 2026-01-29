import { AssistantIf, ThreadPrimitive } from "@assistant-ui/react";
import { FC } from "react";
import { ThreadWelcome } from "../welcome/thread-welcome";
import { Messages } from "../messages/messages";
import { ThreadScrollToBottom } from "../scroll-to-bottom/thread-scroll-to-bottom";
import { Composer } from "../composer/composer";
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
