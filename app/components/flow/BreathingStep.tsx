"use client";

type BreathingStepProps = {
  onNext: () => void;
};

export function BreathingStep({ onNext }: BreathingStepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
          grounding · breathing
        </p>
        <h1 className="text-2xl font-semibold text-[#2B2B2F]">
          Let&apos;s slow your breath together.
        </h1>
        <p className="text-sm text-[#5B5B65] max-w-xl">
          You don&apos;t have to do this perfectly. Just let your breath follow
          the gentle rhythm.
        </p>
      </div>

      {/* Simple breathing orb placeholder */}
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5] opacity-80 shadow-[0_0_45px_rgba(155,135,255,0.6)] animate-pulse" />
      </div>

      <p className="text-xs text-center text-[#8F8F99]">
        Inhale as the circle grows, exhale as it softens.
      </p>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
