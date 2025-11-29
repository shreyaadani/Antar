"use client";

import { useState } from "react";

type Action = {
  id: string;
  title: string;
  description: string;
  energy: "low" | "medium";
  type: "body" | "connection" | "memory" | "self";
};

const ACTIONS: Action[] = [
  {
    id: "drink-water",
    title: "Take three slow sips of water",
    description:
      "Notice the temperature, the feeling in your mouth, and how your body responds. Nothing else needs to happen.",
    energy: "low",
    type: "body",
  },
  {
    id: "open-window",
    title: "Open a window or look outside",
    description:
      "Just spend 30 seconds noticing the light, the sky, or anything moving outside. You don't have to like what you see, just notice it.",
    energy: "low",
    type: "body",
  },
  {
    id: "text-checkin",
    title: "Send a tiny check-in to someone safe",
    description:
      'It can be as small as: “hey, today is a bit heavy, just wanted to say hi.” You don’t need to explain everything.',
    energy: "medium",
    type: "connection",
  },
  {
    id: "memory-line",
    title: "Write one line about them",
    description:
      "On paper or in your phone, write a single sentence about the person you miss — a detail, a habit, or a small moment.",
    energy: "low",
    type: "memory",
  },
  {
    id: "anchor-object",
    title: "Hold onto one grounding object",
    description:
      "Pick up something near you — a pen, a mug, your sleeve — and notice its texture, temperature, and weight for 20 seconds.",
    energy: "low",
    type: "body",
  },
  {
    id: "name-feeling",
    title: "Name the feeling, softly",
    description:
      "Finish the sentence in your head: “Right now, a part of me feels…” There’s no wrong answer. You don’t have to fix it.",
    energy: "low",
    type: "self",
  },
  {
    id: "kind-sentence",
    title: "Offer yourself one kind sentence",
    description:
      'For example: “It makes sense that I feel this way.” or “I’m doing the best I can today.” Say it in your head or quietly out loud.',
    energy: "low",
    type: "self",
  },
  {
    id: "tiny-move",
    title: "Move your body a little",
    description:
      "Roll your shoulders, gently stretch your neck, or wiggle your toes. Just enough to remind your body you’re here.",
    energy: "low",
    type: "body",
  },
];

function getRandomIndex(exclude?: number): number {
  let idx = Math.floor(Math.random() * ACTIONS.length);
  if (exclude !== undefined && ACTIONS.length > 1) {
    while (idx === exclude) {
      idx = Math.floor(Math.random() * ACTIONS.length);
    }
  }
  return idx;
}

export default function ActionsPage() {
  const [index, setIndex] = useState(() => getRandomIndex());
  const [ack, setAck] = useState<string | null>(null);

  const action = ACTIONS[index];

  const handleAnother = () => {
    setIndex((prev) => getRandomIndex(prev));
    setAck(null);
  };

  const handleDoable = () => {
    setAck("That’s enough for now. One small thing is still something.");
  };

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          one small thing
        </p>

        <h1 className="text-3xl font-semibold text-[#2B2B2F]">
          When you don’t know what you need.
        </h1>
        <p className="text-[#5B5B65] max-w-xl leading-relaxed">
          You don’t have to figure out everything. Here’s just one gentle,
          concrete thing you could do next.
        </p>
      </section>

      <section className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-7 space-y-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.16em] bg-[#F2ECFF] text-[#6A55B0]">
            {action.energy === "low" ? "low energy" : "some energy"}
          </span>
          <span className="text-[11px] px-2 py-1 rounded-full bg-[#F5F5FA] text-[#8F8F99] capitalize">
            {action.type}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-[#2B2B2F]">
          {action.title}
        </h2>
        <p className="text-sm text-[#6A6A75] leading-relaxed">
          {action.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleDoable}
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition"
          >
            This feels doable
          </button>
          <button
            onClick={handleAnother}
            className="px-4 py-2 rounded-full text-sm border border-[#DDD4F2] text-[#6A6A75] bg-white/70 hover:bg-white transition"
          >
            Show me another idea
          </button>
        </div>

        {ack && (
          <p className="pt-3 text-xs text-[#8F8F99]">
            {ack}
          </p>
        )}
      </section>
    </div>
  );
}
