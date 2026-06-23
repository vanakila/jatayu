import Image from "next/image";
import { socials } from "@/lib/socials";

export default function SocialLinks() {
  return (
    <div className="border-t-8 border-b-2 border-yellow-500 bg-gray-100 py-5">
      <div className="mx-auto flex max-w-6xl flex-nowrap justify-center gap-x-6 px-4 sm:gap-x-12">
        {socials
          .filter((s) => s.ready)
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md outline-none transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <Image
                src={s.image}
                alt={`${s.label} ${s.name}`}
                width={220}
                height={70}
                className="h-9 w-auto sm:h-11"
              />
            </a>
          ))}
      </div>
    </div>
  );
}
