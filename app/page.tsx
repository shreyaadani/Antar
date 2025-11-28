// app/page.tsx
import Link from "next/link";

const STATES = [
  {
    id: "overwhelmed",
    label: "I feel overwhelmed",
    href: "/grounding",
    description: "I need help slowing down my body and breathing.",
  },
  {
    id: "numb",
    label: "I feel numb or dissociated",
    href: "/grounding",
    description: "I can’t feel much. I want gentle grounding.",
  },
  {
    id: "grieving",
    label: "I miss someone",
    href: "/memories",
    description: "I want a quiet place to remember them.",
  },
  {
    id: "lost",
    label: "I don’t feel like myself",
    href: "/identity",
    description: "I want support around who I am now.",
  },
  {
    id: "dont-know",
    label: "I don’t know what I need",
    href: "/actions",
    description: "Just give me one small thing to do.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          welcome to
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Antar
        </h1>
        <p className="text-slate-300 max-w-xl">
          A quiet, private space for heavy feelings, grief, and those moments
          when you don&apos;t know what to do with yourself. You don&apos;t
          have to have the right words to be here.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">What feels closest to you right now?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {STATES.map((state) => (
            <Link
              key={state.id}
              href={state.href}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm hover:border-white/40 hover:bg-white/10 transition"
            >
              <div className="font-medium mb-1 group-hover:text-white">
                {state.label}
              </div>
              <p className="text-sm text-slate-300">
                {state.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
