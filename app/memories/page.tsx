"use client";

import { useEffect, useState } from "react";

type MemoryType = "everyday" | "funny" | "advice" | "comforting" | "hard";

type Memory = {
  id: string;
  who: string;
  text: string;
  type: MemoryType;
  createdAt: string; // ISO
};

const STORAGE_KEY = "antar_memories_v1";

function loadMemories(): Memory[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveMemories(memories: Memory[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
}

export default function MemoriesPage() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [who, setWho] = useState("");
  const [text, setText] = useState("");
  const [type, setType] = useState<MemoryType>("everyday");

  // load from localStorage on mount
  useEffect(() => {
    setMemories(loadMemories());
  }, []);

  // persist whenever memories change
  useEffect(() => {
    saveMemories(memories);
  }, [memories]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMemory: Memory = {
      id: crypto.randomUUID(),
      who: who.trim() || "Someone I miss",
      text: text.trim(),
      type,
      createdAt: new Date().toISOString(),
    };

    setMemories((prev) => [newMemory, ...prev]);
    setText("");
    setWho("");
    setType("everyday");
  };

  const handleDelete = (id: string) => {
    setMemories((prev) => prev.filter((m) => m.id !== id));
  };

  const typeLabel: Record<MemoryType, string> = {
    everyday: "everyday moment",
    funny: "funny / silly",
    advice: "their advice",
    comforting: "comforting",
    hard: "painful but important",
  };

  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8F8F99] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#C8B8FF] to-[#A8C2F5]" />
          memories
        </p>

        <h1 className="text-3xl font-semibold text-[#2B2B2F]">
          A small place to keep them close.
        </h1>
        <p className="text-[#5B5B65] max-w-xl leading-relaxed">
          You don&apos;t have to write a whole story. Even a single sentence,
          a detail, or a fragment is enough. Everything you write here stays
          on your device.
        </p>
      </section>

      {/* Form */}
      <section className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-7 space-y-5">
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#4A4A55] uppercase tracking-[0.16em]">
              who is this about?
            </label>
            <input
              value={who}
              onChange={(e) => setWho(e.target.value)}
              placeholder="e.g. Dadu, Dadi, my friend, my past self..."
              className="rounded-2xl border border-[#E4DEFF] bg-white/80 px-4 py-2 text-sm text-[#2B2B2F] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8B8FF]/70"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#4A4A55] uppercase tracking-[0.16em]">
              memory
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Maybe a sentence about a moment, something they said, how they laughed, a smell, a ritual..."
              rows={4}
              className="rounded-2xl border border-[#E4DEFF] bg-white/80 px-4 py-3 text-sm text-[#2B2B2F] shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C8B8FF]/70"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="text-xs font-medium text-[#4A4A55] uppercase tracking-[0.16em]">
              type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as MemoryType)}
              className="rounded-full border border-[#E4DEFF] bg-white/80 px-3 py-1 text-xs text-[#2B2B2F] focus:outline-none focus:ring-2 focus:ring-[#C8B8FF]/70"
            >
              <option value="everyday">Everyday moment</option>
              <option value="funny">Funny / silly</option>
              <option value="advice">Their advice</option>
              <option value="comforting">Comforting</option>
              <option value="hard">Painful but important</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#C8B8FF] to-[#A8C2F5] text-white shadow-md hover:shadow-lg transition disabled:opacity-40"
            disabled={!text.trim()}
          >
            Save this memory
          </button>
        </form>

        <p className="text-[11px] text-[#8F8F99]">
          Antar doesn&apos;t upload or share this anywhere. Everything is stored
          only in your browser.
        </p>
      </section>

      {/* Memory list */}
      {memories.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-[#4A4A55]">
            Memories you&apos;ve saved
          </h2>

          <div className="space-y-4">
            {memories.map((m) => {
              const date = new Date(m.createdAt);
              const dateLabel = date.toLocaleString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              });

              return (
                <article
                  key={m.id}
                  className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_3px_14px_rgba(0,0,0,0.03)] p-5 space-y-2"
                >
                  <div className="flex justify-between items-center gap-3">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#9A9AA3]">
                        {m.who}
                      </p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#F2ECFF] text-[11px] text-[#6A55B0]">
                        {typeLabel[m.type]}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <p className="text-[11px] text-[#A0A0AA]">{dateLabel}</p>
                      <button
                        onClick={() => handleDelete(m.id)}
                        className="text-[11px] text-[#B3667C] hover:text-[#8E445D] underline-offset-2 hover:underline"
                      >
                        remove
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-[#4A4A55] leading-relaxed whitespace-pre-wrap">
                    {m.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {memories.length === 0 && (
        <p className="text-xs text-[#8F8F99]">
          You haven&apos;t saved anything yet. That&apos;s okay. You can come
          back whenever you feel ready.
        </p>
      )}
    </div>
  );
}
