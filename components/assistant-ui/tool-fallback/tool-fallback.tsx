import type { ToolCallMessagePartComponent } from "@assistant-ui/react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./tool-fallback.module.scss";

export const ToolFallback: ToolCallMessagePartComponent = ({
  toolName,
  argsText,
  result,
  status,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isCancelled =
    status?.type === "incomplete" && status.reason === "cancelled";
  const cancelledReason =
    isCancelled && status.error
      ? typeof status.error === "string"
        ? status.error
        : JSON.stringify(status.error)
      : null;

  return (
    <div className={cn(styles.root, isCancelled && styles.cancelled)}>
      <div className={styles.header}>
        {isCancelled ? (
          <XCircleIcon className={styles.iconMuted} size={16} />
        ) : (
          <CheckIcon className={styles.icon} size={16} />
        )}

        <p className={cn(styles.title, isCancelled && styles.titleCancelled)}>
          {isCancelled ? "Cancelled tool: " : "Used tool: "}
          <b>{toolName}</b>
        </p>

        <Button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Button>
      </div>

      {!isCollapsed && (
        <div className={styles.content}>
          {cancelledReason && (
            <div className={styles.cancelledRoot}>
              <p className={styles.cancelledHeader}>Cancelled reason:</p>
              <p className={styles.cancelledReason}>{cancelledReason}</p>
            </div>
          )}

          <div className={cn(styles.argsRoot, isCancelled && styles.dimmed)}>
            <pre className={styles.pre}>{argsText}</pre>
          </div>

          {!isCancelled && result !== undefined && (
            <div className={styles.resultRoot}>
              <p className={styles.resultHeader}>Result:</p>
              <pre className={styles.pre}>
                {typeof result === "string" ? result : JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
