import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Decorative Japanese (katakana) label shown above the title. */
  jp?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  jp,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {jp && (
        <span
          aria-hidden="true"
          className="font-jp mb-2 text-xs tracking-[0.45em] text-[#ff6ec7]/80"
        >
          {jp}
        </span>
      )}
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight text-white">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed text-muted sm:text-lg ${
            isCenter ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
