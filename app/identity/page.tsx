"use client";

import { useEffect, useState } from "react";

type Checkin = {
  id: string;
  createdAt: string;
  words: string[];
  note: string;
};

const STORAGE_KEY = "antar_identity_checkins_v1";

const WORD_BANK = [
  "numb",
  "tired",
  "angry",
  "calm",
  "confused",
  "guilty",
  "relieved",
  "blank",
  "hopeful",
  "lonely",
  "overwhelmed",
  "quiet",
];

function loadCheckins(): Checkin[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveCheckins(checkins: Checkin[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkins));
}

export default function IdentityPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    setCheckins(loadCheckins());
  }, []);

  useEffect(() => {
    saveCheckins(checkins);
  }, [checkins]);

  const toggleWord = (word: string) => {
    setSelected((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length === 0 && !note.trim()) return;

    const newCheckin: Checkin = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      words: selected,
      note: note.trim(),
    };

    setCheckins((prev) => [newCheckin, ...prev]);
    setSelected([]);
    setNote("");
  };

  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          identity
        </p>

        <h1 className="text-3xl font-semibold text-[#2B2B2F]">
          When you don&apos;t feel like yourself.
        </h1>
        <p className="text-[#5B5B65] max-w-xl leading-relaxed">
          Grief can make you feel unlike the person you remember being. This is
          a small place to check in with who you are today — no judgment, no
          pressure to be &quot;better.&quot;
        </p>
      </section>

      {/* Check-in card */}
      <section className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-7 space-y-5">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-medium text-[#4A4A55] uppercase tracking-[0.16em]">
              today, i feel (a bit)…
            </p>
            <div className="flex flex-wrap gap-2">
              {WORD_BANK.map((word) => {
                const active = selected.includes(word);
                return (
                  <button
                    key={word}
                    type="button"
                    onClick={() => toggleWord(word)}
                    className={`px-3 py-1.5 rounded-full text-xs border transition ${
                      active
                        ? "bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white border-transparent shadow-sm"
                        : "bg-white/80 text-[#4A4A55] border-[#E4DEFF] hover:border-[#C8B8FF]"
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-[#4A4A55] uppercase tracking-[0.16em]">
              if you want, add a line
            </p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="For example: “I miss how easy things felt before.” or “I don’t recognize myself lately.”"
              className="w-full rounded-2xl border border-[#E4DEFF] bg-white/80 px-4 py-3 text-sm text-[#2B2B2F] shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C8B8FF]/70"
            />
          </div>

          <button
            type="submit"
            disabled={selected.length === 0 && !note.trim()}
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition disabled:opacity-40"
          >
            Save this check-in
          </button>
        </form>

        <p className="text-[11px] text-[#8F8F99]">
          This isn&apos;t about tracking progress, just gently witnessing how
          you are over time. Everything stays on your device.
        </p>
      </section>

      {/* History */}
      {checkins.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-[#4A4A55]">
            Past check-ins
          </h2>
          <div className="space-y-3">
            {checkins.map((c) => {
              const date = new Date(c.createdAt);
              const dateLabel = date.toLocaleString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <article
                  key={c.id}
                  className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_3px_14px_rgba(0,0,0,0.03)] p-5 space-y-2"
                >
                  <div className="flex justify-between items-center gap-3">
                    <p className="text-[11px] text-[#A0A0AA]">{dateLabel}</p>
                    {c.words.length > 0 && (
                      <div className="flex flex-wrap gap-1 justify-end">
                        {c.words.map((w) => (
                          <span
                            key={w}
                            className="px-2 py-0.5 rounded-full bg-[#F5F2FF] text-[11px] text-[#6A55B0]"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {c.note && (
                    <p className="text-sm text-[#4A4A55] leading-relaxed whitespace-pre-wrap">
                      {c.note}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {checkins.length === 0 && (
        <p className="text-xs text-[#8F8F99]">
          No check-ins yet. That&apos;s okay — you can start whenever it feels
          helpful.
        </p>
      )}
    </div>
  );
}
