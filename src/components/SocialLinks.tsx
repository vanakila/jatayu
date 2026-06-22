import { socials } from "@/lib/socials";

export default function SocialLinks() {
  return (
    <div
      className="border-y-4 border-yellow-500 bg-black bg-repeat py-5"
      style={{ backgroundImage: "url(/social-bg.jpg)", backgroundSize: "auto 100%" }}
    >
      <div className="mx-auto flex max-w-6xl flex-nowrap justify-center gap-x-4 px-4 sm:gap-x-10">
        {socials
          .filter((s) => s.ready)
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 rounded-md text-white outline-none transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-white ring-2 ring-white sm:h-9 sm:w-9 ${s.bg}`}
              >
                {s.icon}
              </span>
              <span className="text-center text-[10px] font-bold uppercase tracking-wide sm:text-xs">
                {s.name}
              </span>
            </a>
          ))}
      </div>
    </div>
  );
}
