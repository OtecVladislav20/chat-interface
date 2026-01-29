import { AssistantIf, ComposerPrimitive, MessagePrimitive, ThreadPrimitive } from "@assistant-ui/react";
import { FC } from "react";
import { UserMessage } from "./user-message/user-message";
import { AssistantMessage } from "./assistant-message/assistant-message";
import { Button } from "@/components/ui/button";
import { EditComposer } from "./edit-composer/edit-composer";


export const Messages: FC = () => {
    return (
        <ThreadPrimitive.Messages
            components={{
                UserMessage,
                EditComposer,
                AssistantMessage,
            }}
        />
    );
};
