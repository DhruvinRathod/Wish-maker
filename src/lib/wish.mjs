export const languages = {
  en: { label: "English", hello: "A little corner of the internet was made for you.", open: "Open your surprise", birthday: "Happy Birthday", wish: "Make a wish ✨" },
  hi: { label: "हिन्दी", hello: "इंटरनेट का यह छोटा सा कोना सिर्फ आपके लिए बनाया गया है।", open: "अपना सरप्राइज़ खोलें", birthday: "जन्मदिन मुबारक", wish: "एक प्यारी सी इच्छा माँगिए ✨" },
  gu: { label: "ગુજરાતી", hello: "ઇન્ટરનેટનો આ નાનો ખૂણો ખાસ તમારા માટે બનાવાયો છે.", open: "તમારું સરપ્રાઇઝ ખોલો", birthday: "જન્મદિવસની શુભેચ્છાઓ", wish: "એક સુંદર ઇચ્છા કરો ✨" }
};

export function slugifyName(name) {
  return String(name || "friend")
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "friend";
}

export function buildWishPath({ recipient, from = "Someone special", language = "en", message = "Wishing you a day full of smiles, surprises and good memories." }) {
  const params = new URLSearchParams({ from, lang: languages[language] ? language : "en", message });
  return `/wish/${slugifyName(recipient)}?${params.toString()}`;
}

export function getLanguage(code) {
  return languages[code] || languages.en;
}
