"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { buildWishPath, languages, themes } from "@/lib/wish.mjs";

export default function CreatePage() {
  const [path, setPath] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPath(buildWishPath({
      recipient: String(data.get("recipient") || "Friend"),
      from: String(data.get("from") || "Someone special"),
      language: String(data.get("language") || "en"),
      theme: String(data.get("theme") || "confetti"),
      message: String(data.get("message") || "Wishing you a beautiful birthday!"),
      memory: String(data.get("memory") || ""),
      photo: String(data.get("photo") || "")
    }));
  }

  return (
    <main className="shell narrow">
      <Link className="back" href="/">← Home</Link>
      <div className="eyebrow">Create a wish</div>
      <h1>Make their birthday portal.</h1>
      <p className="lead compact">Pick a vibe, add a small memory and optionally paste a public photo URL. Uploads will come with database storage.</p>
      <form className="card form" onSubmit={submit}>
        <label>Recipient name<input name="recipient" placeholder="Riya" required /></label>
        <label>Your name<input name="from" placeholder="Dhruvin" required /></label>
        <div className="formGrid">
          <label>Language<select name="language" defaultValue="en">{Object.entries(languages).map(([code, language]) => <option key={code} value={code}>{language.label}</option>)}</select></label>
          <label>Theme<select name="theme" defaultValue="confetti">{Object.entries(themes).map(([code, theme]) => <option key={code} value={code}>{theme.emoji} {theme.label}</option>)}</select></label>
        </div>
        <label>Personal message<textarea name="message" rows={4} placeholder="Write something they will remember..." required /></label>
        <label>Memory <span className="optional">optional</span><textarea name="memory" rows={3} placeholder="Remember when we...?" /></label>
        <label>Photo URL <span className="optional">optional</span><input name="photo" type="url" placeholder="https://..." /></label>
        <button className="button primary" type="submit">Generate birthday link</button>
      </form>
      {path && <section className="card result"><strong>Your portal is ready 🎉</strong><code>{path}</code><div className="actions tight"><Link className="button primary" href={path}>Open portal</Link><button className="button ghost" type="button" onClick={() => navigator.clipboard?.writeText(`${location.origin}${path}`)}>Copy link</button></div></section>}
    </main>
  );
}
