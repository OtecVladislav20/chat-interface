import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AssistantIf,
  ThreadListItemMorePrimitive,
  ThreadListItemPrimitive,
  ThreadListPrimitive,
} from "@assistant-ui/react";
import { ArchiveIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react";
import type { FC } from "react";
import styles from "./thread-list.module.scss";

export const ThreadList: FC = () => {
  return (
    <ThreadListPrimitive.Root className={styles.root}>
      <ThreadListNew />
      <AssistantIf condition={({ threads }) => threads.isLoading}>
        <ThreadListSkeleton />
      </AssistantIf>
      <AssistantIf condition={({ threads }) => !threads.isLoading}>
        <ThreadListPrimitive.Items components={{ ThreadListItem }} />
      </AssistantIf>
    </ThreadListPrimitive.Root>
  );
};

const ThreadListNew: FC = () => {
  return (
    <ThreadListPrimitive.New asChild>
      <Button variant="outline" className={styles.newButton}>
        <PlusIcon size={16} />
        New Thread
      </Button>
    </ThreadListPrimitive.New>
  );
};

const ThreadListSkeleton: FC = () => {
  return (
    <div className={styles.skeletonList}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          role="status"
          aria-label="Loading threads"
          className={styles.skeletonRow}
        >
          <Skeleton className={styles.skeleton} />
        </div>
      ))}
    </div>
  );
};

const ThreadListItem: FC = () => {
  return (
    <ThreadListItemPrimitive.Root className={styles.item}>
      <ThreadListItemPrimitive.Trigger className={styles.itemTrigger}>
        <ThreadListItemPrimitive.Title fallback="New Chat" />
      </ThreadListItemPrimitive.Trigger>
      <ThreadListItemMore />
    </ThreadListItemPrimitive.Root>
  );
};

const ThreadListItemMore: FC = () => {
  return (
    <ThreadListItemMorePrimitive.Root>
      <ThreadListItemMorePrimitive.Trigger asChild>
        <Button variant="ghost" size="icon" className={styles.moreButton}>
          <MoreHorizontalIcon size={16} />
          <span className={styles.srOnly}>More options</span>
        </Button>
      </ThreadListItemMorePrimitive.Trigger>

      <ThreadListItemMorePrimitive.Content
        side="bottom"
        align="start"
        className={styles.moreContent}
      >
        <ThreadListItemPrimitive.Archive asChild>
          <ThreadListItemMorePrimitive.Item className={styles.moreItem}>
            <ArchiveIcon size={16} />
            Archive
          </ThreadListItemMorePrimitive.Item>
        </ThreadListItemPrimitive.Archive>
      </ThreadListItemMorePrimitive.Content>
    </ThreadListItemMorePrimitive.Root>
  );
};
