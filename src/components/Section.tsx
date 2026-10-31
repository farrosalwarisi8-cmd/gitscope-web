import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-jade-700">
          <span className="h-1.5 w-1.5 rounded-full bg-jade-500 shadow-[0_0_12px_2px_rgba(10,198,99,0.5)]" />
          {eyebrow}
        </span>
        <h2 className="font-display mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
