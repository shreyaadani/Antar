"use client";

import { useState } from "react";

type Step = "start" | "breathing" | "sensory" | "checkin" | "closure";

export default function FlowPage() {
  const [step, setStep] = useState<Step>("start");

  // STEP: Breathing (placeholder for now)
  if (step === "breathing") {
    return (
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
          grounding · breathing
        </p>
        <h1 className="text-2xl font-semibold text-[#2B2B2F]">
          Let’s slow your breath.
        </h1>
        <p className="text-sm text-[#5B5B65]">
          (Breathing UI will go here in the next step.)
        </p>

        <button
          onClick={() => setStep("sensory")}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md"
        >
          Continue
        </button>
      </div>
    );
  }

  // STEP: Sensory grounding (placeholder)
  if (step === "sensory") {
    return (
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
          grounding · sensory
        </p>
        <h1 className="text-2xl font-semibold text-[#2B2B2F]">
          Let’s come back to the room a bit.
        </h1>
        <p className="text-sm text-[#5B5B65]">
          (Sensory grounding UI will go here in the next step.)
        </p>

        <button
          onClick={() => setStep("checkin")}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md"
        >
          Continue
        </button>
      </div>
    );
  }

  // STEP: Simple emotional check-in (placeholder)
  if (step === "checkin") {
    return (
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
          check-in
        </p>
        <h1 className="text-2xl font-semibold text-[#2B2B2F]">
          If you want, you can tell me a little.
        </h1>
        <p className="text-sm text-[#5B5B65]">
          A few words are enough. You can also skip this.
        </p>

        <textarea
          rows={3}
          className="w-full rounded-2xl border border-[#E4DEFF] bg-white/80 px-4 py-3 text-sm text-[#2B2B2F] shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C8B8FF]/70"
          placeholder="Type whatever feels okay to share… or leave this empty."
        />

        <button
          onClick={() => setStep("closure")}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md"
        >
          Continue
        </button>
      </div>
    );
  }

  // STEP: Closure (placeholder for now)
  if (step === "closure") {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-[#2B2B2F]">
          You did enough for now.
        </h1>
        <p className="text-sm text-[#5B5B65]">
          This is just a placeholder closure screen. In v2, this will become a
          soft ending with a single slow breath and options to continue or rest.
        </p>
      </div>
    );
  }

  // STEP: Start (first screen)
  return (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
        start
      </p>

      <h1 className="text-3xl font-semibold text-[#2B2B2F]">
        What feels closest to you right now?
      </h1>

      <p className="text-sm text-[#5B5B65] max-w-xl">
        You don&apos;t have to get it perfect. We&apos;ll just start somewhere
        gentle.
      </p>

      <div className="flex flex-col gap-3">
        <button
          className="rounded-3xl bg-white/80 border border-white/60 px-4 py-3 text-left text-sm text-[#2B2B2F] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition"
          onClick={() => setStep("breathing")}
        >
          I don&apos;t really know, just help me begin
        </button>

        <button
          className="rounded-3xl bg-white/60 border border-white/40 px-4 py-3 text-left text-sm text-[#4A4A55]"
          onClick={() => setStep("checkin")}
        >
          I want to describe what&apos;s happening instead
        </button>
      </div>
    </div>
  );
}
