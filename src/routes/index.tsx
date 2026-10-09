import { createFileRoute } from '@tanstack/react-router';
import { Documentation } from '@/components/documentation';
import { introduction } from '@/lib/docs';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    {title:'Introduction — Pseudo Documentation'},
    {name:'description',content:'Learn pseudocode with a beautifully clear guide. Explore variables, control flow, data structures, and algorithms with practical examples.'},
    {property:'og:title',content:'Introduction — Pseudo Documentation'},
    {property:'og:description',content:'Great code starts with a clear idea. Your practical guide to pseudocode and algorithms.'},
    {property:'og:type',content:'website'},
    {name:'twitter:card',content:'summary_large_image'},
  ]}),
  component: Index,
});
function Index() { return introduction ? <Documentation topic={introduction}/> : null; }
