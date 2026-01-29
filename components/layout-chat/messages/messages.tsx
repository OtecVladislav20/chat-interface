import { ThreadPrimitive } from "@assistant-ui/react";
import { FC } from "react";
import { AssistantMessage } from "./assistant-message";
import { EditComposer } from "./edit-composer";
import { UserMessage } from "./user-message";


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
