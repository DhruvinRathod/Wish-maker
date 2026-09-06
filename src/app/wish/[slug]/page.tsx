"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { getLanguage, getTheme } from "@/lib/wish.mjs";

const confetti = Array.from({ length: 28 }, (_, index) => index);

export default function WishPage() {
  const params = useParams<{ slug: string }>();
  const search = useSearchParams();
  const [step, setStep] = useState(0);
  const [candlesOut, setCandlesOut] = useState(false);
  const language = useMemo(() => getLanguage(search.get("lang") || "en"), [search]);
  const theme = getTheme(search.get("theme") || "confetti");
  const recipient = decodeURIComponent(params.slug).replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const from = search.get("from") || "Someone special";
  const message = search.get("message") || "Wishing you a beautiful birthday!";
  const memory = search.get("memory") || "";
  const photo = search.get("photo") || "";

  const frames = [
    <div className="frame" key="hello"><div className="bigEmoji floaty">👀</div><p className="frameLabel">A tiny surprise</p><h1>Hey, {recipient}.</h1><p>{language.hello}</p></div>,
    <div className="frame" key="gift"><button className="giftButton" type="button" aria-label="Open birthday gift"><span>🎁</span></button><p className="frameLabel">Just for you</p><h1>{language.open}</h1><p>There are a few little things waiting inside.</p></div>,
    ...(memory || photo ? [<div className="frame" key="memory"><p className="frameLabel">{language.memory}</p>{photo && <div className="photoFrame"><img src={photo} alt={`A birthday memory for ${recipient}`} /></div>}{memory && <p className="memoryText">{memory}</p>}</div>] : []),
    <div className="frame" key="message"><div className="bigEmoji">💌</div><p className="frameLabel">From {from}</p><h1>{language.birthday}, {recipient}!</h1><p className="personalMessage">“{message}”</p></div>,
    <div className="frame" key="cake"><p className="frameLabel">{language.candles}</p><div className={`cake ${candlesOut ? "candlesOut" : ""}`}><div className="candles"><button onClick={() => setCandlesOut(true)} aria-label="Blow out candle">🔥</button><button onClick={() => setCandlesOut(true)} aria-label="Blow out candle">🔥</button><button onClick={() => setCandlesOut(true)} aria-label="Blow out candle">🔥</button></div><div className="cakeTop">🍓</div><div className="cakeBody">🎂</div></div><h1>{candlesOut ? language.wish : "One last thing..."}</h1><p>{candlesOut ? "May this year bring you good people, good memories and plenty of reasons to smile." : "Tap any flame when you are ready."}</p></div>
  ];

  const finalStep = frames.length - 1;

  return (
    <main className={`portal theme-${theme} ${candlesOut ? "celebrating" : ""}`}>
      {candlesOut && <div className="confettiLayer" aria-hidden="true">{confetti.map(index => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>}
      <section className="portalCard" aria-live="polite">
        {frames[step]}
        <div className="portalActions">
          {step > 0 && <button className="button subtle" onClick={() => setStep(step - 1)}>← Back</button>}
          {step < finalStep && <button className="button primary" onClick={() => setStep(step + 1)}>Continue →</button>}
          {step === finalStep && candlesOut && <Link className="button ghost" href="/create">Create one for someone else</Link>}
        </div>
        <div className="dots" aria-label={`Step ${step + 1} of ${frames.length}`}>{frames.map((_, index) => <span key={index} className={index === step ? "dot active" : "dot"} />)}</div>
      </section>
    </main>
  );
}
