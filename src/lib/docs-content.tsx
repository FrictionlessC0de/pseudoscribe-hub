import type { ComponentType, ReactNode } from 'react';
import { Lightbulb } from 'lucide-react';

type MDXProps = { components?: Record<string, ComponentType<any>> };
const modules = import.meta.glob<{ default: ComponentType<MDXProps> }>('../content/docs/*.mdx', { eager: true });

export const lessonBodies: Record<string, ComponentType<MDXProps>> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split('/').pop()!.replace('.mdx', ''), mod.default]),
);

function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return <div className="my-6 flex gap-3 rounded-md border border-primary/15 bg-accent/60 p-4"><Lightbulb className="mt-0.5 size-4 shrink-0 text-primary"/><div className="text-[12px] leading-5 text-muted-foreground [&_p]:m-0">{title&&<p className="mb-1 text-xs font-semibold text-primary">{title}</p>}{children}</div></div>;
}

export const mdxComponents: Record<string, ComponentType<any>> = {
  Callout,
  h2: (p: any) => <h2 className="mb-3 mt-9 text-[23px] font-bold first:mt-0" {...p}/>,
  h3: (p: any) => <h3 className="mb-2 mt-6 text-[17px] font-bold" {...p}/>,
  p: (p: any) => <p className="mb-3 text-[14px] leading-[1.85] text-muted-foreground" {...p}/>,
  ul: (p: any) => <ul className="mb-4 list-disc space-y-1 pl-5 text-[14px] leading-7 text-muted-foreground" {...p}/>,
  ol: (p: any) => <ol className="mb-4 list-decimal space-y-1 pl-5 text-[14px] leading-7 text-muted-foreground" {...p}/>,
  a: (p: any) => <a className="text-primary underline underline-offset-4" {...p}/>,
  code: (p: any) => <code className="rounded bg-soft px-1.5 py-0.5 font-mono text-[12px] text-foreground" {...p}/>,
  strong: (p: any) => <strong className="font-semibold text-foreground" {...p}/>,
};
