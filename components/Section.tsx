import React from "react";

export type SectionProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
  title: string;
  /**
   * Center the heading and inner content horizontally (text-center).
   */
  center?: boolean;
  /**
   * Tailwind max-width utility to override the default container width.
   * e.g. "max-w-4xl".  Defaults to "max-w-6xl".
   */
  maxWidthClass?: string;
}>;

export default function Section({
  className = "",
  id,
  title,
  children,
  center = false,
  maxWidthClass = "max-w-6xl",
}: SectionProps) {
  const containerClasses = `${maxWidthClass} mx-auto flex flex-col gap-6`;

  return (
    <section id={id} className={className}>
      <div className={`${containerClasses} section-surface px-6 py-8 sm:px-8 sm:py-10 lg:px-10`}>
        <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
          <span className="eyebrow">{title}</span>
          <h2 className={`section-heading max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
            {title}
          </h2>
        </div>
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          {children}
        </div>
      </div>
    </section>
  );
}
