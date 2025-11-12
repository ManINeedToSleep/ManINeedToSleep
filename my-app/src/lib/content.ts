// src/lib/content.ts
import { z } from "zod";

const tagsPreprocess = (value: unknown) => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
};

const booleanPreprocess = (value: unknown) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }
  return undefined;
};

export const projectSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    date: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Date must be formatted as YYYY-MM-DD",
    }),
    description: z.string().optional(),
    tags: z
      .preprocess(tagsPreprocess, z.array(z.string()).optional())
      .optional()
      .default([]),
    cover: z.string().optional(),
    published: z
      .preprocess(booleanPreprocess, z.boolean().optional())
      .optional()
      .default(true),
  })
  .passthrough();

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type ProjectFM = ProjectFrontmatter;

export const postSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    date: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Date must be formatted as YYYY-MM-DD",
    }),
    description: z.string().optional(),
    tags: z
      .preprocess(tagsPreprocess, z.array(z.string()).optional())
      .optional()
      .default([]),
    published: z
      .preprocess(booleanPreprocess, z.boolean().optional())
      .optional()
      .default(true),
  })
  .passthrough();

export type PostFrontmatter = z.infer<typeof postSchema>;
export type PostFM = PostFrontmatter;

