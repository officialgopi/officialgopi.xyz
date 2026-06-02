export default function BlogRenderer({ htmlContent }: { htmlContent: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="w-full text-left text-neutral-800 dark:text-neutral-200
        
        /* 1. Global Core Element Spacing */
        [&>p]:text-sm [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:font-normal [&>p]:max-w-none
        [&>hr]:border-neutral-200 [&>hr]:dark:border-neutral-800/60 [&>hr]:my-8
        
        /* 2. Structured System Headings & Anchor Offsets */
        [&>h1]:text-2xl [&>h1]:font-black [&>h1]:tracking-tight [&>h1]:text-neutral-900 [&>h1]:dark:text-neutral-50 [&>h1]:mb-6 [&>h1]:max-w-none
        
        [&>h2]:text-xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-neutral-900 [&>h2]:dark:text-neutral-50 [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-neutral-100 [&>h2]:dark:border-neutral-900/40 [&>h2]:pb-2 [&>h2]:max-w-none
        
        [&>h3]:text-base [&>h3]:font-bold [&>h3]:tracking-tight [&>h3]:text-neutral-900 [&>h3]:dark:text-neutral-50 [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:max-w-none
        
        /* 3. Deep Inline Hyperlink Tokens */
        [&>a]:text-emerald-600 [&>a]:dark:text-emerald-400 [&>a]:font-bold [&>a]:no-underline hover:[&>a]:underline [&>a]:underline-offset-4 [&>a]:transition-colors
        
        /* 4. Technical Pre-formatted Code Containers */
        [&>pre]:max-w-none [&>pre]:bg-neutral-50 [&>pre]:dark:bg-[#070708] [&>pre]:border [&>pre]:border-neutral-200/60 [&>pre]:dark:border-neutral-800/50 [&>pre]:rounded-2xl [&>pre]:p-4 [&>pre]:shadow-3xs [&>pre]:my-6 [&>pre]:overflow-x-auto
        [&>pre>code]:font-mono [&>pre>code]:text-[12px] [&>pre>code]:leading-6 [&>pre>code]:text-neutral-900 [&>pre>code]:dark:text-neutral-200 [&>pre>code]:bg-transparent [&>pre>code]:p-0
        
        /* 5. Inline Code Badges (`like this`) */
        [&>:not(pre)>code]:font-mono [&>:not(pre)>code]:text-[12px] [&>:not(pre)>code]:bg-neutral-100/60 [&>:not(pre)>code]:dark:bg-neutral-900/60 [&>:not(pre)>code]:px-1.5 [&>:not(pre)>code]:py-0.5 [&>:not(pre)>code]:rounded-md [&>:not(pre)>code]:border [&>:not(pre)>code]:border-neutral-200/30 [&>:not(pre)>code]:dark:border-neutral-800/30 [&>:not(pre)>code]:text-neutral-900 [&>:not(pre)>code]:dark:text-neutral-200
        
        /* 6. Semantic Content Arrays & Lists */
        [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:my-4 [&>ul]:text-sm [&>ul]:max-w-none [&>ul]:text-neutral-500 [&>ul]:dark:text-neutral-400
        [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:my-4 [&>ol]:text-sm [&>ol]:max-w-none [&>ol]:text-neutral-500 [&>ol]:dark:text-neutral-400
        
        /* 7. Blockquotes & Custom Technical Inserts */
        [&>blockquote]:border-l-2 [&>blockquote]:border-neutral-300 [&>blockquote]:dark:border-neutral-700 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-neutral-500 [&>blockquote]:dark:text-neutral-400 [&>blockquote]:my-6 [&>blockquote]:max-w-none
        
        /* 8. Media Render Nodes */
        [&>img]:max-w-none [&>img]:w-full [&>img]:rounded-2xl [&>img]:border [&>img]:border-neutral-200/50 [&>img]:dark:border-neutral-800/40 [&>img]:my-6 [&>img]:shadow-3xs"
    />
  );
}
