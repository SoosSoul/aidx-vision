export default function Section({
  id,
  kicker,
  title,
  subtitle,
  index,
  total = 13,
  children,
  headerExtra,
}) {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36 lg:py-40"
    >
      {/* header */}
      {kicker && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
          {kicker}
          {typeof index === "number" && (
            <span className="text-[10px] text-gray-400">
              {" "}
              {" • "}Slide {index} / {total}
            </span>
          )}
        </p>
      )}
      <div className="flex flex-col gap-3">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <div className="text-lg leading-relaxed text-gray-600 sm:text-xl">
            {subtitle}
          </div>
        )}

        {headerExtra}
      </div>

      <div className="prose prose-lg mt-8 max-w-none leading-[1.9] text-gray-800 prose-p:my-4 prose-ul:my-5 prose-ol:my-5 prose-li:my-1 sm:prose-xl">
        {children}
      </div>
    </section>
  );
}
