// src/components/site/mdx-components.tsx
import type { DetailedHTMLProps, HTMLAttributes, AnchorHTMLAttributes } from "react";

type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type ParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
type ListProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type OrderedListProps = DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>;
type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="mt-8 mb-3 text-2xl font-semibold" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="my-4 leading-7" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="my-4 list-disc pl-6" {...props} />
  ),
  ol: (props: OrderedListProps) => (
    <ol className="my-4 list-decimal pl-6" {...props} />
  ),
  a: (props: LinkProps) => (
    <a className="underline underline-offset-4" {...props} />
  ),
  code: (props: CodeProps) => (
    <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800" {...props} />
  ),
};
