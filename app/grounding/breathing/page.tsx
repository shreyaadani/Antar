"use client";

import { useState, useEffect } from "react";

const CYCLE = [
  { label: "Breathe in", seconds: 4 },
  { label: "Hold", seconds: 2 },
  { label: "Breathe out", seconds: 6 },
];

export default function BreathPage() {
  const [step, setStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(CYCLE[0].seconds);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t > 1) return t - 1;

        // Move to next step
        const nextStep = (step + 1) % CYCLE.length;
        setStep(nextStep);
        return CYCLE[nextStep].seconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  const phase = CYCLE[step].label;
  const animation =
    step === 0
      ? "scale-[1.25]"
      : step === 1
      ? "scale-[1.35]"
      : "scale-[0.9]";

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold text-[#2B2B2F]">
          Breathe with me.
        </h1>
        <p className="text-[#5B5B65] max-w-xl leading-relaxed">
          Let’s slow your breathing gently. Follow the circle — there's no rush.
        </p>
      </section>

      {/* Breathing circle */}
      <div className="flex justify-center py-10">
        <div
          className={`w-48 h-48 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5] shadow-xl transition-all duration-[4000ms] ease-in-out ${animation}`}
        />
      </div>

      <div className="text-center space-y-3">
        <p className="text-2xl font-medium text-[#2B2B2F]">{phase}</p>
        <p className="text-sm text-[#6A6A75]">{timeLeft}s</p>
      </div>
    </div>
  );
}
