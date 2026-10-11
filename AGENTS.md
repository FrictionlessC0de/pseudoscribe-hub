<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Store the learning curriculum in a shared browser-safe data module; documentation pages and search consume the same source to keep topic navigation consistent.
- Render documentation through a shared reader component at the index and parameterized topic route; each content route owns its page metadata.
- Lesson prose is authored as MDX in src/content/docs/<slug>.mdx (loaded via import.meta.glob); topic metadata and example code stay in the shared data module so search and navigation share one source.
