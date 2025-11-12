import Image from "next/image";
import Link from "next/link";
import { type ProjectFM } from "@/lib/content";

export interface ProjectCardProps {
  slug: string;
  project: ProjectFM;
}

function formatDate(value: string) {
  try {
    const formatter = new Intl.DateTimeFormat("en", {
      month: "short",
      year: "numeric",
    });
    return formatter.format(new Date(value));
  } catch {
    return value;
  }
}

export function ProjectCard({ slug, project }: ProjectCardProps) {
  const { title, date, description, tags = [], cover } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e0f7f0] bg-white/90 shadow-[0_25px_45px_-40px_rgba(28,42,39,0.65)] backdrop-blur transition hover:-translate-y-2 hover:border-[#2ED7C4]/60 hover:shadow-[0_40px_65px_-45px_rgba(46,215,196,0.55)] dark:border-forest-600/60 dark:bg-forest-700/70 dark:text-[#E3F6F1]">
      <div className="relative w-full overflow-hidden rounded-t-[24px] border-b border-[#eaf9f4] bg-gradient-to-tr from-[#dffcf4] to-white dark:border-forest-600/70 dark:from-forest-700/70 dark:to-forest-700/40">
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white via-[#e8fdf8] to-[#c9f4ea] text-sm font-medium text-[#4D6B65] dark:from-forest-600/60 dark:via-forest-700/70 dark:to-forest-800/70 dark:text-[#DDF3EE]">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#2ED7C4] dark:text-[#9CF1E5]">
            <span>Featured</span>
            <span>{formatDate(date)}</span>
          </div>
          <h3 className="text-xl font-semibold text-[#1C2A27] dark:text-[#EAFBF7]">
            <Link href={`/projects/${slug}`} className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-[#2ED7C4]/40 dark:focus-visible:ring-offset-forest-700">
              {title}
            </Link>
          </h3>
        </header>

        {description && (
          <p className="rounded-2xl border border-[#eaf9f4] bg-[#f5fefb] px-4 py-3 text-sm text-[#4D6B65] shadow-inner dark:border-[#28524b] dark:bg-forest-700/70 dark:text-[#D3ECE7]">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-[#2ED7C4] dark:text-[#9CF1E5]">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#dff7f0] bg-white px-3 py-1 shadow-sm dark:border-[#28524b] dark:bg-forest-700/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

