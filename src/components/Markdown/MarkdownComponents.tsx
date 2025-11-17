/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components } from "react-markdown";
import type { ReactNode, HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// code 블록용 타입 따로 정의
type CodeProps = HTMLAttributes<HTMLElement> & {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
};

export const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1
      className="pb-2 mt-6 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200"
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="mt-6 mb-3 text-xl font-semibold text-gray-900" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="my-2 leading-relaxed text-gray-800" {...props} />
  ),

  a: ({ node, ...props }) => (
    <a
      className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
      {...props}
    />
  ),

  ul: ({ node, ...props }) => (
    <ul className="my-2 space-y-1 list-disc list-inside" {...props} />
  ),

  ol: ({ node, ...props }) => (
    <ol className="my-2 space-y-1 list-decimal list-inside" {...props} />
  ),

  li: ({ node, ...props }) => (
    <li className="leading-relaxed text-gray-800" {...props} />
  ),

  blockquote: ({ node, ...props }) => (
    <blockquote
      className="pl-4 my-3 text-sm italic text-gray-600 border-l-4 border-gray-300"
      {...props}
    />
  ),

  // ✨✨✨ 코드 하이라이팅 지원
  code: ({ inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1];

    // Inline code: 기존처럼 유지
    if (inline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded bg-gray-100 text-[0.85em] font-mono text-pink-600"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Block code + 🔥SyntaxHighlighter 적용
    return (
      <SyntaxHighlighter
        style={oneDark} // 수정 금지
        language={language}
        PreTag="div"
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.85rem",
          background: "#282c34",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },

  hr: ({ node, ...props }) => (
    <hr className="my-6 border-t border-gray-200" {...props} />
  ),
  img: ({ node, ...props }) => (
    <img
      className="object-contain my-4 rounded-lg max-h-96"
      {...props}
      loading="lazy"
    />
  ),
};
