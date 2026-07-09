import { ReactNode } from "react";

interface ProseLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ProseLayout({ children, className = "" }: ProseLayoutProps) {
  return (
    <div className={`max-w-[800px] mx-auto px-gutter w-full pb-32 ${className}`}>
      <div className="
        text-silver font-body text-lg md:text-xl leading-[1.8]
        
        [&>h1]:text-4xl [&>h1]:md:text-5xl [&>h1]:font-black [&>h1]:text-cloud [&>h1]:tracking-tighter [&>h1]:mb-8
        
        [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-cloud [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6
        
        [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:text-cloud [&>h3]:tracking-tight [&>h3]:mt-12 [&>h3]:mb-4
        
        [&>p]:mb-8
        
        [&>a]:text-cloud [&>a]:underline [&>a]:underline-offset-4 [&>a]:decoration-steel hover:[&>a]:decoration-cloud [&>a]:transition-colors
        
        [&>strong]:text-cloud [&>strong]:font-semibold
        
        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:pl-2
        [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:pl-2
        
        [&>hr]:border-steel/20 [&>hr]:my-16
      ">
        {children}
      </div>
    </div>
  );
}
