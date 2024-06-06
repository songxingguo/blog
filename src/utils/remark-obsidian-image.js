import { unified } from "unified";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { visit } from "unist-util-visit";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmFootnoteToMarkdown } from "mdast-util-gfm-footnote";
import { gfmStrikethroughToMarkdown } from "mdast-util-gfm-strikethrough";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const EMBED_LINK_REGEX = /!\[\[([\S]+)\]\]/g;

export function remarkObsidianImage(options = { aFolder: "attachments" }) {
  return function (tree, file) {
    visit(tree, "paragraph", (node, index, parent) => {
      const markdown = toMarkdown(node, {
        extensions: [gfmFootnoteToMarkdown(), gfmStrikethroughToMarkdown],
      });
      const paragraph = String(
        unified().use(remarkParse).use(remarkHtml).processSync(markdown)
      );

      if (paragraph.match(EMBED_LINK_REGEX)) {
        const [, fileName] = EMBED_LINK_REGEX.exec(paragraph);

        const content = `![](${options.aFolder}/${fileName})`;

        console.log("content", content);

        const embedTree = remark()
          .use(remarkFrontmatter)
          .use(remarkGfm)
          .parse(content);

        parent.children.splice(index, 1, embedTree);

        return node;
      }
    });
  };
}
