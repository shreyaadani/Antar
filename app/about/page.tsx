export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">About Antar</h1>
      <p className="text-slate-300 max-w-xl">
        Antar is a small, free, trauma-aware space for people navigating grief,
        heavy emotions, and identity loss—especially when you&apos;re far from
        home or don&apos;t know who to talk to.
      </p>
      <div className="space-y-2 text-sm text-slate-400 max-w-xl">
        <p>
          This is not therapy. It does not replace professional support,
          community, or emergency care. It&apos;s a gentle companion for the
          moments in between.
        </p>
        <p>
          If you ever feel unsafe or at risk of harming yourself, please reach
          out to local emergency services or a crisis line in your region.
        </p>
      </div>
    </div>
  );
}
