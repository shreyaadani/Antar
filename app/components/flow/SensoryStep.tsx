"use client";

type SensoryStepProps = {
  onNext: () => void;
};

export function SensoryStep({ onNext }: SensoryStepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99]">
          grounding · sensory
        </p>
        <h1 className="text-2xl font-semibold text-[#2B2B2F]">
          Let&apos;s come back to the room a little.
        </h1>
        <p className="text-sm text-[#5B5B65] max-w-xl">
          You can just read this, or do it with me. Either way is okay.
        </p>
      </div>

      <div className="space-y-4 rounded-3xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6">
        <p className="text-sm text-[#4A4A55]">
          Gently look around the space you&apos;re in and notice:
        </p>
        <ul className="list-disc list-inside text-sm text-[#4A4A55] space-y-1">
          <li>one thing you can see</li>
          <li>one thing you can feel (like your clothes or the chair)</li>
          <li>one sound you can hear, even if it&apos;s very soft</li>
        </ul>
        <p className="text-xs text-[#8F8F99]">
          You don&apos;t have to type anything. Just noticing is enough.
        </p>
      </div>

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
