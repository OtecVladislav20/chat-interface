import { UserMessageAttachments } from "@/components/assistant-ui/attachment";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button/tooltip-icon-button";
import { ActionBarPrimitive, MessagePrimitive } from "@assistant-ui/react";
import { PencilIcon } from "lucide-react";
import { FC } from "react";
import styles from "./user-message.module.scss";


export const UserMessage: FC = () => {
    return (
        <MessagePrimitive.Root
          className={styles.root}
          data-role="user"
        >
            <UserMessageAttachments />

            <div className={styles.contentWrapper}>
                <div className={styles.bubble}>
                    <MessagePrimitive.Parts />
                </div>
                <div className={styles.actionBarWrapper}>
                    <UserActionBar />
                </div>
            </div>
        </MessagePrimitive.Root>
    );
};

const UserActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide="not-last"
      className={styles.actionBar}
    >
        <ActionBarPrimitive.Edit asChild>
            <TooltipIconButton tooltip="Edit" className={styles.actionEdit}>
                <PencilIcon />
            </TooltipIconButton>
        </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  );
};
