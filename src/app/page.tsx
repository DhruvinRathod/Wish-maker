import Link from "next/link";

export default function HomePage() {
  return (
    <main className="shell hero">
      <div className="eyebrow">🎂 Wish Maker</div>
      <h1>Create a birthday link that feels like a tiny gift.</h1>
      <p className="lead">Build a personalized, multilingual birthday experience in under a minute. No login required for this MVP.</p>
      <div className="actions">
        <Link className="button primary" href="/create">Create a wish</Link>
        <Link className="button ghost" href="/wish/friend?from=Wish+Maker&lang=en&message=You+deserve+a+beautiful+day!">View demo</Link>
      </div>
      <section className="featureGrid">
        <article><span>🌍</span><h2>Multilingual</h2><p>Start with English, Hindi and Gujarati. Add more locales later.</p></article>
        <article><span>🎁</span><h2>Interactive</h2><p>The recipient opens a small frame-by-frame surprise instead of a static card.</p></article>
        <article><span>🔗</span><h2>Shareable</h2><p>Generate one URL and send it anywhere. Calendar and delivery automation come next.</p></article>
      </section>
    </main>
  );
}
