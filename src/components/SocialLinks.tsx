import { socials } from "@/lib/socials";

export default function SocialLinks() {
  return (
    <div className="border-y-4 border-yellow-500 bg-gray-100 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-4 px-4">
        {socials
          .filter((s) => s.ready)
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-gray-800 transition hover:opacity-80"
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-full text-white ${s.bg}`}>
                {s.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide">{s.name}</span>
            </a>
          ))}
      </div>
    </div>
  );
}
