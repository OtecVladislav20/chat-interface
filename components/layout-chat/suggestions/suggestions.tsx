import { Button } from "@/components/ui/button";
import { ThreadPrimitive } from "@assistant-ui/react";
import { FC } from "react";
import styles from "./suggestions.module.scss";


const SUGGESTIONS = [
  {
    title: "What's the weather",
    label: "in San Francisco?",
    prompt: "What's the weather in San Francisco?",
  },
  {
    title: "Explain React hooks",
    label: "like useState and useEffect",
    prompt: "Explain React hooks like useState and useEffect",
  },
] as const;

export const ThreadSuggestions: FC = () => {
  return (
    <div className={styles.root}>
      {SUGGESTIONS.map((suggestion, index) => (
        <div
          key={suggestion.prompt}
          className={styles.item}
          style={{ animationDelay: `${100 + index * 50}ms` }}
        >
          <ThreadPrimitive.Suggestion prompt={suggestion.prompt} send asChild>
            <Button
              variant="ghost"
              className={styles.button}
              aria-label={suggestion.prompt}
            >
              <span className={styles.title}>
                {suggestion.title}
              </span>
              <span className={styles.label}>
                {suggestion.label}
              </span>
            </Button>
          </ThreadPrimitive.Suggestion>
        </div>
      ))}
    </div>
  );
};
