import rehypeAutolink from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolink)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}
