import Link from "next/link";

const STATES = [
  {
    id: "overwhelmed",
    label: "I feel overwhelmed",
    desc: "Everything feels too much all at once.",
    href: "/grounding",
  },
  {
    id: "numb",
    label: "I feel numb",
    desc: "I don’t feel anything. I want gentle grounding.",
    href: "/grounding",
  },
  {
    id: "grieving",
    label: "I miss someone",
    desc: "I want a quiet place to remember them.",
    href: "/memories",
  },
  {
    id: "lost",
    label: "I feel lost",
    desc: "I don’t feel like myself lately.",
    href: "/identity",
  },
  {
    id: "unknown",
    label: "I don’t know what I need",
    desc: "Just give me one small thing to do.",
    href: "/actions",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          a soft space to land
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[#2B2B2F]">
          Antar
        </h1>

        <p className="max-w-xl text-[#5B5B65] leading-relaxed text-lg">
          A quiet place for grief, grounding, and those moments when your chest 
          feels heavy and you don’t know what to do with yourself.
        </p>
      </section>

      {/* State selector cards */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-[#4A4A55]">
          What feels closest to you right now?
        </h2>

        <div className="grid gap-5">
          {STATES.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group block no-underline rounded-3xl p-6 bg-white/70 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all"
            >
              <div className="mb-2">
                <h3 className="text-lg font-medium text-[#2B2B2F] group-hover:text-[#1F1F23] transition">
                  {s.label}
                </h3>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5] flex items-center justify-center text-white text-xs shadow-md">
                  →
                </div>
              </div>
              <p className="text-sm text-[#6A6A75] leading-relaxed">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
