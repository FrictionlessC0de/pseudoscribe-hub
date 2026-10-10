import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, BookOpen, Braces, Check, Code2, FileText, GitBranch, Layers, Lightbulb, List, MessageSquare, Search, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, topics } from '@/lib/docs';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    {title:'Pseudo — Learn to think in algorithms'},
    {name:'description',content:'A beautiful, startup-quality guide to pseudocode. Master variables, control flow, data structures, and algorithms through 27 clear, practical lessons.'},
    {property:'og:title',content:'Pseudo — Learn to think in algorithms'},
    {property:'og:description',content:'Great code starts with a clear idea. Master pseudocode through 27 clear, practical lessons.'},
    {property:'og:type',content:'website'},
    {name:'twitter:card',content:'summary_large_image'},
  ]}),
  component: Welcome,
});

const heroLines: Array<Array<{ text: string; cls?: string | undefined }>> = [
  [{ text: 'BEGIN', cls: 'code-keyword' }],
  [{ text: '    ' }, { text: '// your journey starts here', cls: 'code-comment' }],
  [{ text: '    INPUT ', cls: 'code-keyword' }, { text: 'idea' }],
  [{ text: '    plan ' }, { text: '← ', cls: 'code-operator' }, { text: 'breakDown(idea)' }],
  [{ text: '    FOR EACH ', cls: 'code-keyword' }, { text: 'step ' }, { text: 'IN ', cls: 'code-keyword' }, { text: 'plan' }],
  [{ text: '        EXECUTE ', cls: 'code-keyword' }, { text: 'step' }],
  [{ text: '    ENDFOR', cls: 'code-keyword' }],
  [{ text: '    OUTPUT ', cls: 'code-keyword' }, { text: '"ship it"', cls: 'code-value' }],
  [{ text: 'END', cls: 'code-keyword' }],
];

const marqueeWords = ['BEGIN', 'INPUT', 'IF', 'THEN', 'ELSE', 'FOR', 'WHILE', 'REPEAT', 'FUNCTION', 'RETURN', 'CASE', 'ARRAY', 'RECURSION', 'BIG O', 'STACKS', 'QUEUES', 'RECORDS', 'SORTING', 'SEARCHING', 'PRACTICE'];

const whyCards = [
  { icon: GitBranch, title: 'Focus on the logic', text: 'Solve the problem before you fight the syntax. Pseudocode separates thinking from typing.' },
  { icon: MessageSquare, title: 'Communicate ideas', text: 'A clear plan is a shared plan. Explain any algorithm to any teammate, in any language.' },
  { icon: Layers, title: 'Code with confidence', text: 'Turn a plan you have already traced into real code — in Python, JavaScript, or anything next.' },
];

const steps = [
  { n: '01', title: 'Learn a concept', text: 'Short, focused lessons with a worked example in every one.' },
  { n: '02', title: 'Trace it by hand', text: 'Walk through the code step by step until the logic clicks.' },
  { n: '03', title: 'Try a challenge', text: 'Practice problems build real confidence, one small win at a time.' },
];


function Welcome() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-border bg-background/85 backdrop-blur-md' : 'border-transparent bg-transparent'}`}>
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Pseudo home">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Braces className="size-5" strokeWidth={2.5} /></span>
            <span className="font-display text-[22px] font-extrabold">pseudo<span className="text-primary">.</span></span>
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex" aria-label="Main">
            <Link to="/docs/$slug" params={{ slug: 'introduction' }} className="text-muted-foreground transition-colors hover:text-foreground">Documentation</Link>
            <Link to="/docs/$slug" params={{ slug: 'worked-examples' }} className="text-muted-foreground transition-colors hover:text-foreground">Examples</Link>
            <Link to="/docs/$slug" params={{ slug: 'practice' }} className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground">Practice <span className="rounded bg-accent px-1.5 py-0.5 text-[9px] font-semibold text-primary">NEW</span></Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden text-[13px] text-muted-foreground sm:inline-flex">
              <Link to="/docs/$slug" params={{ slug: 'introduction' }}><Search className="size-3.5" />Search topics</Link>
            </Button>
            <Button size="sm" asChild className="h-9 text-xs">
              <Link to="/docs/$slug" params={{ slug: 'introduction' }}>Start learning <ArrowUpRight className="size-3.5" /></Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-[68px]">
        <div className="landing-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="landing-glow pointer-events-none -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
          <div>
            <span className="landing-reveal inline-flex items-center gap-2 rounded-full border border-border bg-soft px-3.5 py-1.5 text-[11px] font-semibold text-muted-foreground" style={{ animationDelay: '0ms' }}>
              <Sparkles className="size-3.5 text-primary" />The pseudocode guide · 27 lessons, zero fluff
            </span>
            <h1 className="landing-reveal mt-6 font-display text-[42px] font-extrabold leading-[1.06] tracking-tight sm:text-[58px] lg:text-[64px]" style={{ animationDelay: '80ms' }}>
              Think clearly.<br />
              Build <span className="landing-shine">anything</span>.
            </h1>
            <p className="landing-reveal mt-6 max-w-[520px] text-[16px] leading-7 text-muted-foreground" style={{ animationDelay: '160ms' }}>
              Learn pseudocode — the plain-language plan behind every great algorithm. No compiler errors, no syntax rabbit holes. Just you, your logic, and a beautiful guide.
            </p>
            <div className="landing-reveal mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '240ms' }}>
              <Button size="lg" asChild className="h-12 px-6 text-sm font-semibold">
                <Link to="/docs/$slug" params={{ slug: 'introduction' }}>Start learning free <ArrowRight className="size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 bg-soft px-6 text-sm font-medium">
                <Link to="/docs/$slug" params={{ slug: 'practice' }}><Terminal className="size-4" />Try a challenge</Link>
              </Button>
            </div>
            <div className="landing-reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-muted-foreground" style={{ animationDelay: '320ms' }}>
              {[
                { icon: BookOpen, label: `${topics.length} structured topics` },
                { icon: List, label: `${categories.length} learning tracks` },
                { icon: Code2, label: 'Every lesson, a live example' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2"><Icon className="size-3.5 text-primary" />{label}</span>
              ))}
            </div>
          </div>

          {/* Hero code panel */}
          <div className="landing-reveal relative" style={{ animationDelay: '260ms' }}>
            <div className="landing-glow -right-20 top-16 h-[280px] w-[380px]" aria-hidden="true" />
            <div className="code-panel landing-float relative shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="flex h-11 items-center justify-between border-b border-code-muted/20 px-4">
                <div className="flex items-center gap-2 text-[11px] text-code-muted">
                  <span className="size-1.5 rounded-full bg-code-keyword" />
                  <span className="font-mono">hello_algorithm.pseudo</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-code-muted"><Check className="size-3" />valid thinking</span>
              </div>
              <pre className="overflow-x-auto py-5 pr-5 font-mono text-[12.5px] leading-6"><code>
                {heroLines.map((line, i) => (
                  <div key={i} className="code-line landing-code-line" style={{ animationDelay: `${300 + i * 170}ms` }}>
                    <span className="code-line-number">{i + 1}</span>
                    {line.map((part, j) => <span key={j} className={part.cls}>{part.text}</span>)}
                  </div>
                ))}
              </code></pre>
            </div>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">This is pseudocode. If you can read it, you already started.</p>
          </div>
        </div>

        {/* Keyword marquee */}
        <div className="relative border-y border-border bg-soft/60 py-3.5" aria-hidden="true">
          <div className="landing-marquee flex w-max items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex items-center gap-8"><span className={i % 3 === 0 ? 'code-keyword' : undefined}>{word}</span><span className="text-border">◆</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="mb-12 max-w-[560px]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">Why pseudocode</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold leading-tight sm:text-[36px]">The skill under every language</h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">Frameworks change. Syntax changes. The ability to break a problem into clear, ordered steps never goes out of style.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {whyCards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="landing-card group rounded-xl border border-border bg-soft p-6">
              <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-background"><Icon className="size-5 text-primary" /></span>
              <h3 className="mt-5 font-display text-[15px] font-bold">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-t border-border bg-soft/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-[560px]">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">The curriculum</p>
              <h2 className="mt-3 font-display text-[30px] font-extrabold leading-tight sm:text-[36px]">Everything you will learn</h2>
              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{categories.length} tracks, {topics.length} lessons, from your very first BEGIN to sorting, searching, and Big O.</p>
            </div>
            <Button variant="outline" asChild className="bg-background text-xs">
              <Link to="/docs/$slug" params={{ slug: 'introduction' }}>Browse the full guide <ArrowRight className="size-3.5" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category, ci) => (
              <div key={category} className="landing-card rounded-xl border border-border bg-background p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-display text-[13px] font-bold"><Lightbulb className="size-4 text-primary" />{category}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground">0{ci + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.filter(t => t.category === category).map(t => (
                    <Link key={t.slug} to="/docs/$slug" params={{ slug: t.slug }} className="rounded-md border border-border bg-soft px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                      {t.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="mb-12 max-w-[560px]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold leading-tight sm:text-[36px]">Learn it in three moves</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(step => (
            <div key={step.n} className="landing-card relative rounded-xl border border-border bg-soft p-6">
              <span className="font-mono text-[26px] font-bold text-border">{step.n}</span>
              <h3 className="mt-3 font-display text-[15px] font-bold">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-soft px-6 py-16 text-center md:px-12">
          <div className="landing-glow pointer-events-none left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-[11px] font-semibold text-muted-foreground"><FileText className="size-3.5 text-primary" />Free · No account needed</span>
            <h2 className="mx-auto mt-6 max-w-[560px] font-display text-[32px] font-extrabold leading-tight sm:text-[40px]">Your first algorithm is 3 lines away</h2>
            <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-7 text-muted-foreground">Start with a hello, end with sorting and Big O. One clear lesson at a time.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild className="h-12 px-7 text-sm font-semibold">
                <Link to="/docs/$slug" params={{ slug: 'introduction' }}>Begin with Lesson 1 <ArrowRight className="size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 bg-background px-7 text-sm font-medium">
                <Link to="/docs/$slug" params={{ slug: 'what-is-pseudocode' }}>What is pseudocode?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-[11px] text-muted-foreground md:px-8">
          <span className="flex items-center gap-2"><Braces className="size-3.5 text-primary" />Pseudo — ideas into algorithms.</span>
          <span>Made for curious minds · Pseudo © 2026</span>
        </div>
      </footer>
    </div>
  );
}
