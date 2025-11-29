"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "5 things you can see",
    prompt:
      "Slowly look around you. Name five things you can see right now — colors, objects, light, shadows.",
    suggestions: ["The wall", "A light source", "Your hands", "Something on the floor", "A color you like"],
  },
  {
    title: "4 things you can touch",
    prompt:
      "Gently notice four things you can feel with your body — textures, temperature, contact points.",
    suggestions: ["Your feet on the floor", "Fabric against your skin", "The surface you’re sitting on", "Your hands touching each other"],
  },
  {
    title: "3 things you can hear",
    prompt:
      "Notice three sounds — loud or quiet, near or far. You don’t have to like them, just notice.",
    suggestions: ["A fan, AC, or fridge", "Voices or traffic in the distance", "Your own breathing"],
  },
  {
    title: "2 things you can smell",
    prompt:
      "Notice two smells — they can be faint or familiar. If you can’t smell anything, that’s okay: just notice the neutral air.",
    suggestions: ["Your clothes or skin", "The room you’re in, or the air itself"],
  },
  {
    title: "1 thing you can taste or sense in your mouth",
    prompt:
      "Notice one taste or sensation in your mouth — a drink, food, or just the neutral taste. If that’s uncomfortable, simply notice your breath.",
    suggestions: ["Any leftover taste", "Neutral taste of your mouth", "The feeling of your breath passing"],
  },
];

export default function SensoryGroundingPage() {
  const [step, setStep] = useState(0);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  const handleNext = () => {
    if (!isLast) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          sensory grounding
        </p>

        <h1 className="text-3xl font-semibold text-[#2B2B2F]">
          Come back to your senses.
        </h1>
        <p className="text-[#5B5B65] max-w-xl leading-relaxed">
          We’ll move through your senses one by one. There’s no “right” answer —
          just gently noticing what&apos;s here.
        </p>
      </section>

      {/* Step card */}
      <section className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-[#9A9AA3] mb-1">
              STEP {step + 1} OF {STEPS.length}
            </p>
            <h2 className="text-xl font-semibold text-[#2B2B2F]">
              {current.title}
            </h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5] flex items-center justify-center text-xs text-white">
            {step + 1}
          </div>
        </div>

        <p className="text-sm text-[#6A6A75] leading-relaxed">
          {current.prompt}
        </p>

        <div className="mt-4 space-y-2">
          <p className="text-xs font-medium text-[#8F8F99] uppercase tracking-[0.18em]">
            you could notice
          </p>
          <ul className="space-y-1 text-sm text-[#6A6A75] list-disc list-inside">
            {current.suggestions.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Controls */}
      <section className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className={`px-4 py-2 rounded-full text-sm border border-[#DDD4F2] text-[#6A6A75] bg-white/70 hover:bg-white transition ${
            step === 0 ? "opacity-40 cursor-default" : ""
          }`}
        >
          Back
        </button>

        {isLast ? (
          <a
            href="/grounding"
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition"
          >
            Finish and go back
          </a>
        ) : (
          <button
            onClick={handleNext}
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition"
          >
            Next step
          </button>
        )}
      </section>
    </div>
  );
}
