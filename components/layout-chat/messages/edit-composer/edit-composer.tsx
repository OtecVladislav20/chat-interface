import { Button } from "@/components/ui/button";
import { ComposerPrimitive, MessagePrimitive } from "@assistant-ui/react";
import { FC } from "react";
import styles from "./edit-composer.module.scss";


export const EditComposer: FC = () => {
  return (
    <MessagePrimitive.Root className={styles.wrapper}>
      <ComposerPrimitive.Root className={styles.root}>
        <ComposerPrimitive.Input className={styles.input} autoFocus />
        <div className={styles.footer}>
          <ComposerPrimitive.Cancel asChild>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
          </ComposerPrimitive.Cancel>
          <ComposerPrimitive.Send asChild>
            <Button size="sm">Update</Button>
          </ComposerPrimitive.Send>
        </div>
      </ComposerPrimitive.Root>
    </MessagePrimitive.Root>
  );
};
