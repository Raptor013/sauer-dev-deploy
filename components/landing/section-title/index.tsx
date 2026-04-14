type SectionTitleProps = {
  kicker: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionTitle({
  kicker,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="section-kicker text-[#ff8aa7]">{kicker}</p>
      <h2 className="font-display mt-3 text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
