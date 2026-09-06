"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { getLanguage } from "@/lib/wish.mjs";

export default function WishPage() {
  const params = useParams<{ slug: string }>();
  const search = useSearchParams();
  const [step, setStep] = useState(0);
  const language = useMemo(() => getLanguage(search.get("lang") || "en"), [search]);
  const recipient = decodeURIComponent(params.slug).replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const from = search.get("from") || "Someone special";
  const message = search.get("message") || "Wishing you a beautiful birthday!";

  const frames = [
    <><div className="bigEmoji">👀</div><h1>Hey, {recipient}.</h1><p>{language.hello}</p></>,
    <><div className="bigEmoji">🎁</div><h1>{language.open}</h1><p>Tap once more. This one is for you.</p></>,
    <><div className="bigEmoji">🎂</div><h1>{language.birthday}, {recipient}!</h1><p className="personalMessage">“{message}”</p><small>— {from}</small></>,
    <><div className="bigEmoji">✨</div><h1>{language.wish}</h1><p>May this year bring you good people, good memories and reasons to smile.</p></>
  ];

  return (
    <main className="portal">
      <section className="portalCard">
        {frames[step]}
        {step < frames.length - 1 ? <button className="button primary" onClick={() => setStep(step + 1)}>Continue →</button> : <Link className="button ghost" href="/create">Create one for someone else</Link>}
        <div className="dots">{frames.map((_, index) => <span key={index} className={index === step ? "dot active" : "dot"} />)}</div>
      </section>
    </main>
  );
}
