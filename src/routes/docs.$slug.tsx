import { createFileRoute, notFound } from '@tanstack/react-router';
import { Documentation } from '@/components/documentation';
import { findTopic } from '@/lib/docs';
export const Route = createFileRoute('/docs/$slug')({
  loader: ({params}) => { const topic = findTopic(params.slug); if(!topic) throw notFound(); return topic; },
  head: ({loaderData}) => ({meta:[
    {title:`${loaderData?.title ?? 'Topic not found'} — Pseudo Documentation`},
    {name:'description',content:loaderData?.description ?? 'Explore the Pseudo learning guide.'},
    {property:'og:title',content:`${loaderData?.title ?? 'Topic not found'} — Pseudo Documentation`},
    {property:'og:description',content:loaderData?.description ?? 'Explore the Pseudo learning guide.'},
    {property:'og:type',content:'article'},
    {name:'twitter:card',content:'summary_large_image'},
  ]}),
  component: TopicPage,
});
function TopicPage() { const topic = Route.useLoaderData(); return <Documentation topic={topic}/>; }
