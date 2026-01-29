"use client";

import "@assistant-ui/react-markdown/styles/dot.css";

import {
  type CodeHeaderProps,
  MarkdownTextPrimitive,
  unstable_memoizeMarkdownComponents as memoizeMarkdownComponents,
  useIsMarkdownCodeBlock,
} from "@assistant-ui/react-markdown";
import remarkGfm from "remark-gfm";
import { type FC, memo, useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button/tooltip-icon-button";
import { cn } from "@/lib/utils";
import styles from "./markdown-text.module.scss";

const MarkdownTextImpl = () => {
  return (
    <MarkdownTextPrimitive
      remarkPlugins={[remarkGfm]}
      className={styles.root}
      components={defaultComponents}
    />
  );
};

export const MarkdownText = memo(MarkdownTextImpl);

const CodeHeader: FC<CodeHeaderProps> = ({ language, code }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const onCopy = () => {
    if (!code || isCopied) return;
    copyToClipboard(code);
  };

  return (
    <div className={styles.codeHeaderRoot}>
      <span className={styles.codeHeaderLanguage}>{language}</span>
      <TooltipIconButton tooltip="Copy" onClick={onCopy}>
        {!isCopied && <CopyIcon />}
        {isCopied && <CheckIcon />}
      </TooltipIconButton>
    </div>
  );
};

const useCopyToClipboard = ({
  copiedDuration = 3000,
}: {
  copiedDuration?: number;
} = {}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = (value: string) => {
    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), copiedDuration);
    });
  };

  return { isCopied, copyToClipboard };
};

const defaultComponents = memoizeMarkdownComponents({
  h1: ({ className, ...props }) => (
    <h1 className={cn(styles.h1, className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn(styles.h2, className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn(styles.h3, className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={cn(styles.h4, className)} {...props} />
  ),
  h5: ({ className, ...props }) => (
    <h5 className={cn(styles.h5, className)} {...props} />
  ),
  h6: ({ className, ...props }) => (
    <h6 className={cn(styles.h6, className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn(styles.p, className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn(styles.a, className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn(styles.blockquote, className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn(styles.ul, className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn(styles.ol, className)} {...props} />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn(styles.hr, className)} {...props} />
  ),
  table: ({ className, ...props }) => (
    <table className={cn(styles.table, className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th className={cn(styles.th, className)} {...props} />
  ),
  td: ({ className, ...props }) => (
    <td className={cn(styles.td, className)} {...props} />
  ),
  tr: ({ className, ...props }) => (
    <tr className={cn(styles.tr, className)} {...props} />
  ),
  sup: ({ className, ...props }) => (
    <sup className={cn(styles.sup, className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn(styles.pre, className)} {...props} />
  ),
  code: function Code({ className, ...props }) {
    const isCodeBlock = useIsMarkdownCodeBlock();
    return (
      <code
        className={cn(!isCodeBlock && styles.inlineCode, className)}
        {...props}
      />
    );
  },
  CodeHeader,
});
