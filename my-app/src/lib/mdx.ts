// src/lib/mdx.ts
import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { compileMDX } from "next-mdx-remote/rsc";
import { projectSchema, postSchema, type ProjectFrontmatter, type PostFrontmatter } from "@/lib/content";
import { MDXComponents } from "@/components/site/mdx-components";

// Base content directories
const ROOT = path.join(process.cwd(), "src", "content");

export async function listSlugs(dir: "projects" | "blog") {
  const full = path.join(ROOT, dir);
  const entries = await fs.readdir(full);
  return entries
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

async function readFile(dir: string, slug: string) {
  const filePath = path.join(ROOT, dir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  return raw;
}

export async function getProject(slug: string) {
  const raw = await readFile("projects", slug);
  const { content, data } = matter(raw);

  const parsed = projectSchema.safeParse(data);
  if (!parsed.success) {
    console.error("Project frontmatter validation failed:", parsed.error.flatten().fieldErrors);
    throw new Error(`Invalid project frontmatter for ${slug}`);
  }

  const compiled = await compileMDX<ProjectFrontmatter>({
    source: content,
    components: MDXComponents,
    options: { parseFrontmatter: false },
  });

  return {
    slug,
    frontmatter: parsed.data,
    content: compiled.content as React.ReactNode, // <- note: element/node, not component
  };
}

export async function getPost(slug: string) {
  const raw = await readFile("blog", slug);
  const { content, data } = matter(raw);

  const parsed = postSchema.safeParse(data);
  if (!parsed.success) throw new Error(`Invalid post frontmatter for ${slug}`);

  const compiled = await compileMDX<PostFrontmatter>({
    source: content,
    components: MDXComponents,
    options: { parseFrontmatter: false },
  });

  return {
    slug,
    frontmatter: parsed.data,
    content: compiled.content as React.ReactNode, // 👈 use `content`, not a component
  };
}

export async function getAllProjects() {
  const slugs = await listSlugs("projects");
  const items = await Promise.all(slugs.map(getProject));
  return items
    .filter((p) => p.frontmatter.published !== false)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export async function getAllPosts() {
  const slugs = await listSlugs("blog");
  const items = await Promise.all(slugs.map(getPost));
  return items
    .filter((p) => p.frontmatter.published !== false)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
