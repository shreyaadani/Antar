const CARDS = [
  {
    title: "Grief doesn’t move in stages.",
    body: "You might have heard of the “five stages of grief.” Real grief is much messier. You can feel okay and then crushed again. That doesn’t mean you’re going backwards — it’s how grief actually works.",
  },
  {
    title: "Mixed feelings are normal.",
    body: "You can miss someone and also feel angry, guilty, relieved, or numb. Two things can be true at once. Grief is not a loyalty test.",
  },
  {
    title: "Being far away can hurt in its own way.",
    body: "Not being physically present — at a hospital, a funeral, or with family — can add an extra layer of grief. Feeling disconnected or guilty about distance is common and understandable.",
  },
  {
    title: "Numbness is still a feeling.",
    body: "Sometimes your mind protects you by dulling everything. Numb doesn’t mean you don’t care. It often means things are too big to feel all at once.",
  },
  {
    title: "You don’t have to “use this time well.”",
    body: "In hard moments, you might feel pressure to cope perfectly, be productive, or grow from pain. Surviving the day is more than enough.",
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          learn
        </p>

        <h1 className="text-3xl font-semibold text-[#2B2B2F]">
          Things nobody really explains about grief.
        </h1>
        <p className="text-[#5B5B65] max-w-xl leading-relaxed">
          These aren&apos;t rules, just gentle reminders. If something doesn&apos;t
          fit your experience, you can leave it.
        </p>
      </section>

      <section className="space-y-4">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_3px_14px_rgba(0,0,0,0.03)] p-6 space-y-2"
          >
            <h2 className="text-sm font-semibold text-[#2B2B2F]">
              {card.title}
            </h2>
            <p className="text-sm text-[#4A4A55] leading-relaxed">
              {card.body}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
