import { MarkdownText } from "@/components/assistant-ui/markdown-text/markdown-text";
import { Reasoning, ReasoningGroup } from "@/components/assistant-ui/reasoning/reasoning";
import { ToolFallback } from "@/components/assistant-ui/tool-fallback/tool-fallback";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button/tooltip-icon-button";
import { ActionBarMorePrimitive, ActionBarPrimitive, AssistantIf, ErrorPrimitive, MessagePrimitive } from "@assistant-ui/react";
import { CheckIcon, CopyIcon, DownloadIcon, MoreHorizontalIcon, PencilIcon, RefreshCwIcon } from "lucide-react";
import { FC } from "react";
import styles from "./assistant-message.module.scss";


export const AssistantMessage: FC = () => {
    return (
        <MessagePrimitive.Root
          className={styles.root}
          data-role="assistant"
        >
            <div className={styles.content}>
                <MessagePrimitive.Parts
                    components={{
                        Text: MarkdownText,
                        Reasoning,
                        ReasoningGroup,
                        tools: { Fallback: ToolFallback },
                    }}
                />
                <MessageError />
            </div>
              
            <div className={styles.footer}>
                <AssistantActionBar />
            </div>
        </MessagePrimitive.Root>
    );
};

const MessageError: FC = () => {
  return (
    <MessagePrimitive.Error>
      <ErrorPrimitive.Root className={styles.errorRoot}>
        <ErrorPrimitive.Message className={styles.errorMessage} />
      </ErrorPrimitive.Root>
    </MessagePrimitive.Error>
  );
};

const AssistantActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide="not-last"
      autohideFloat="single-branch"
      className={styles.actionBar}
    >
      <ActionBarPrimitive.Copy asChild>
        <TooltipIconButton tooltip="Copy">
          <AssistantIf condition={({ message }) => message.isCopied}>
            <CheckIcon />
          </AssistantIf>
          <AssistantIf condition={({ message }) => !message.isCopied}>
            <CopyIcon />
          </AssistantIf>
        </TooltipIconButton>
      </ActionBarPrimitive.Copy>
      <ActionBarPrimitive.Reload asChild>
        <TooltipIconButton tooltip="Refresh">
          <RefreshCwIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Reload>
      <ActionBarMorePrimitive.Root>
        <ActionBarMorePrimitive.Trigger asChild>
          <TooltipIconButton
            tooltip="More"
            className={styles.moreTrigger}
          >
            <MoreHorizontalIcon />
          </TooltipIconButton>
        </ActionBarMorePrimitive.Trigger>
        <ActionBarMorePrimitive.Content
          side="bottom"
          align="start"
          className={styles.moreContent}
        >
          <ActionBarPrimitive.ExportMarkdown asChild>
            <ActionBarMorePrimitive.Item className={styles.moreItem}>
              <DownloadIcon size={16} />
              Export as Markdown
            </ActionBarMorePrimitive.Item>
          </ActionBarPrimitive.ExportMarkdown>
        </ActionBarMorePrimitive.Content>
      </ActionBarMorePrimitive.Root>
    </ActionBarPrimitive.Root>
  );
};
