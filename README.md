# Antar

_A soft space to land when grief hits and you don’t know what to do with yourself._

Antar is a minimal, free, privacy-friendly web app built to support people in acute or ongoing grief.  
It doesn’t try to fix you, diagnose you, or track your productivity – it just offers **small, concrete ways to get through a hard moment.**

> ⚠️ Antar is **not** a crisis service and not a substitute for professional mental health care.

---

## 🌱 Core ideas

When something painful happens – losing a person, a version of yourself, a relationship, a home – a lot of us don’t know:

- what to **do** with our body
- what to **do** with our thoughts
- where to **put** the memories
- how to handle feeling far away from people / from the event

Antar tries to help with four things:

1. **Grounding** when you’re overwhelmed, numb, or dissociated
2. **Tiny actions** when you don’t know what you need
3. **Gentle remembrance** of people you’ve lost
4. **Identity check-ins** when you don’t feel like yourself

Everything is stored **locally in your browser** (via `localStorage`). No accounts, no database.

---

## 🧭 Features

### 1. Home – “What feels closest to you right now?”

Landing page with soft cards:

- **I feel overwhelmed / numb** → Grounding
- **I miss someone** → Memories
- **I feel lost** → Identity
- **I don’t know what I need** → Actions

The goal is to reduce decision fatigue and let the user choose the closest match instead of overthinking.

---

### 2. Grounding

#### Breathing (`/grounding/breathing`)

A looping, visual breathing helper:

- Expanding / contracting pastel circle
- Text phases: _Breathe in → Hold → Breathe out_
- Gentle timing (4–2–6 seconds)
- No counters, no pressure for “perfect” breathing

#### Sensory grounding (`/grounding/sensory`)

A guided **5–4–3–2–1** flow:

1. 5 things you can see
2. 4 you can touch
3. 3 you can hear
4. 2 you can smell
5. 1 you can taste / or simply notice your breath

Each step includes:

- a short explanation
- a few concrete suggestions
- “Back” and “Next step” navigation

---

### 3. Actions – “One small thing I can do” (`/actions`)

For “I don’t know what I need” moments.

- Shows **one low-pressure micro-action** at a time
- Examples:
  - take three slow sips of water
  - open a window and look outside for 30s
  - write one line about the person you miss
  - send a tiny “hey, today is heavy” text to someone safe
- Tagged by **energy level** (low / some) and **type** (body / connection / memory / self)
- Buttons:
  - _This feels doable_ → gentle affirmation
  - _Show me another idea_ → random new action

---

### 4. Memories – “A small place to keep them close” (`/memories`)

A tiny memory box for the people you miss. Uses `localStorage`.

- Fields:
  - **Who is this about?** (free text: “Dadu”, “my grandmother”, “my past self”…)
  - **Memory** (short paragraph)
  - **Type** (everyday moment / funny / advice / comforting / painful but important)
- Stored only in the browser, with timestamp
- Rendered as soft cards that can be deleted individually

---

### 5. Identity – “I don’t feel like myself” (`/identity`)

A check-in space for when you feel disconnected from who you were.

- Select a few words that fit today (e.g. _numb, tired, confused, hopeful, blank, overwhelmed, quiet_)
- Optional short note (“I don’t recognize myself lately”, “I miss how easy things felt before”, etc.)
- Each check-in is saved locally with time and selected words
- History list lets you look back without framing it as “progress tracking”

---

### 6. Learn – Soft psychoeducation (`/learn`)

Static cards with short, validating explanations about grief, e.g.:

- grief doesn’t actually move in neat stages
- numbness is still a feeling
- being far away (different city/country) has its own kind of pain
- mixed feelings and relief are normal
- you don’t have to “use this time well”

The tone is non-clinical and non-prescriptive.

---

## 🛠️ Tech stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **State:** React hooks (`useState`, `useEffect`)
- **Storage:** `localStorage` (no backend, no auth)
- **Design:** soft gradients,
