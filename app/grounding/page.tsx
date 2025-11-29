export default function GroundingIntro() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          grounding
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[#2B2B2F]">
          Let’s slow things down a little.
        </h1>

        <p className="max-w-xl text-[#5B5B65] leading-relaxed">
          Right now it might feel like your mind or body is rushing ahead of you.
          That’s okay. We’ll take this slowly — one small step at a time.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-medium text-[#4A4A55]">
          How would you like to ground yourself?
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <a
            href="/grounding/breathing"
            className="group block no-underline rounded-3xl p-6 bg-white/70 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all"
          >
            <h3 className="text-lg font-medium text-[#2B2B2F] mb-2 group-hover:text-[#1F1F23] transition">
              Breathing
            </h3>
            <p className="text-sm text-[#6A6A75]">
              A slow, calming exercise to steady your body.
            </p>
          </a>

          <a
            href="/grounding/sensory"
            className="group block no-underline rounded-3xl p-6 bg-white/70 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all"
          >
            <h3 className="text-lg font-medium text-[#2B2B2F] mb-2 group-hover:text-[#1F1F23] transition">
              Sensory grounding
            </h3>
            <p className="text-sm text-[#6A6A75]">
              The 5–4–3–2–1 method to reconnect with your senses.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
