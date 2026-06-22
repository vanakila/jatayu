import { socials } from "@/lib/socials";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-5 py-6">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:opacity-80 ${s.bg}`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
