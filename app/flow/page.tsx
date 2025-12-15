"use client";

import { useState } from "react";
import { BreathingStep } from "../components/flow/BreathingStep";
import { SensoryStep } from "../components/flow/SensoryStep";


type Step = "start" | "breathing" | "sensory" | "checkin" | "reflection" | "closure";


export default function FlowPage() {
    const [step, setStep] = useState<Step>("start");
    const [checkinText, setCheckinText] = useState("");
    const [skippedCheckin, setSkippedCheckin] = useState(false);


 if (step === "breathing") {
  return <BreathingStep onNext={() => setStep("sensory")} />;
}

if (step === "sensory") {
  return <SensoryStep onNext={() => setStep("checkin")} />;
}

 if (step === "checkin") {
  return (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
        check-in
      </p>

      <h1 className="text-2xl font-semibold text-[#2B2B2F]">
        If you want, tell me what’s going on.
      </h1>

      <p className="text-sm text-[#5B5B65]">
        A few words are enough. You can also skip.
      </p>

      <textarea
        value={checkinText}
        onChange={(e) => {
          setCheckinText(e.target.value);
          setSkippedCheckin(false);
        }}
        rows={3}
        className="w-full rounded-2xl border border-[#E4DEFF] bg-white/80 px-4 py-3 text-sm text-[#2B2B2F] shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C8B8FF]/70"
        placeholder="Type whatever feels okay…"
      />

      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setSkippedCheckin(true);
            setCheckinText("");
            setStep("reflection");
          }}
          className="text-sm text-[#6A6A75] hover:text-[#2B2B2F] transition"
        >
          Skip for now
        </button>

        <button
          onClick={() => setStep("reflection")}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

if (step === "reflection") {
  return (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
        reflection
      </p>

      <h1 className="text-2xl font-semibold text-[#2B2B2F]">
        I’m here with you.
      </h1>

      <div className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 space-y-3">
        {skippedCheckin ? (
          <p className="text-sm text-[#4A4A55]">
            That’s okay. We don’t have to put it into words right now.
          </p>
        ) : (
          <>
            <p className="text-sm text-[#4A4A55]">
              (AI reflection will appear here in Step 4.)
            </p>
            <p className="text-xs text-[#8F8F99] break-words">
              You wrote: {checkinText.trim() ? `"${checkinText.trim()}"` : "(nothing)"}
            </p>
          </>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setStep("closure")}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition"
        >
          Continue
        </button>
      </div>
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
