"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { buildWishPath, languages } from "@/lib/wish.mjs";

export default function CreatePage() {
  const [path, setPath] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPath(buildWishPath({
      recipient: String(data.get("recipient") || "Friend"),
      from: String(data.get("from") || "Someone special"),
      language: String(data.get("language") || "en"),
      message: String(data.get("message") || "Wishing you a beautiful birthday!")
    }));
  }

  return (
    <main className="shell narrow">
      <Link className="back" href="/">← Home</Link>
      <div className="eyebrow">Create a wish</div>
      <h1>Make their birthday portal.</h1>
      <form className="card form" onSubmit={submit}>
        <label>Recipient name<input name="recipient" placeholder="Riya" required /></label>
        <label>Your name<input name="from" placeholder="Dhruvin" required /></label>
        <label>Language<select name="language" defaultValue="en">{Object.entries(languages).map(([code, language]) => <option key={code} value={code}>{language.label}</option>)}</select></label>
        <label>Personal message<textarea name="message" rows={5} placeholder="Write something they will remember..." required /></label>
        <button className="button primary" type="submit">Generate birthday link</button>
      </form>
      {path && <section className="card result"><strong>Your portal is ready 🎉</strong><code>{path}</code><Link className="button primary" href={path}>Open portal</Link></section>}
    </main>
  );
}
