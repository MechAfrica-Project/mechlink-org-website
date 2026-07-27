import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders admin-authored markdown (blog bodies, career descriptions). Styling
 * comes from the surrounding ProseLayout, so this only maps markdown → HTML.
 */
export function Markdown({ children }: { children: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
}
