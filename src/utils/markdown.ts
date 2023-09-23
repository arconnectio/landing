import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  // @ts-expect-error
  const result = await remark().use(html).process(markdown);

  return result.toString();
}
