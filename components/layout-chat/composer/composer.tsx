import { ComposerAddAttachment, ComposerAttachments } from "@/components/assistant-ui/attachment/attachment";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button/tooltip-icon-button";
import { Button } from "@/components/ui/button";
import { AssistantIf, ComposerPrimitive } from "@assistant-ui/react";
import { ArrowUpIcon, SquareIcon } from "lucide-react";
import { FC } from "react";
import styles from "./composer.module.scss";


export const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className={styles.root}>
      <ComposerPrimitive.AttachmentDropzone className={styles.dropzone}>
        <ComposerAttachments />
        <ComposerPrimitive.Input
          placeholder="Send a message..."
          className={styles.input}
          rows={1}
          autoFocus
          aria-label="Message input"
        />
        <ComposerAction />
      </ComposerPrimitive.AttachmentDropzone>
    </ComposerPrimitive.Root>
  );
};

const ComposerAction: FC = () => {
  return (
    <div className={styles.actions}>
      <ComposerAddAttachment />

      <AssistantIf condition={({ thread }) => !thread.isRunning}>
        <ComposerPrimitive.Send asChild>
          <TooltipIconButton
            tooltip="Send message"
            side="bottom"
            type="submit"
            variant="default"
            size="icon"
            className={styles.sendButton}
            aria-label="Send message"
          >
            <ArrowUpIcon size={16} />
          </TooltipIconButton>
        </ComposerPrimitive.Send>
      </AssistantIf>

      <AssistantIf condition={({ thread }) => thread.isRunning}>
        <ComposerPrimitive.Cancel asChild>
          <Button
            type="button"
            variant="default"
            size="icon"
            className={styles.cancelButton}
            aria-label="Stop generating"
          >
            <SquareIcon size={12} />
          </Button>
        </ComposerPrimitive.Cancel>
      </AssistantIf>
    </div>
  );
};
