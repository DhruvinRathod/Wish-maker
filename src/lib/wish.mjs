export const languages = {
  en: { label: "English", hello: "A little corner of the internet was made for you.", open: "Open your surprise", birthday: "Happy Birthday", wish: "Make a wish ✨", memory: "A little memory for you", candles: "Tap the candles and make a wish" },
  hi: { label: "हिन्दी", hello: "इंटरनेट का यह छोटा सा कोना सिर्फ आपके लिए बनाया गया है।", open: "अपना सरप्राइज़ खोलें", birthday: "जन्मदिन मुबारक", wish: "एक प्यारी सी इच्छा माँगिए ✨", memory: "आपके लिए एक प्यारी सी याद", candles: "मोमबत्तियाँ बुझाइए और एक इच्छा माँगिए" },
  gu: { label: "ગુજરાતી", hello: "ઇન્ટરનેટનો આ નાનો ખૂણો ખાસ તમારા માટે બનાવાયો છે.", open: "તમારું સરપ્રાઇઝ ખોલો", birthday: "જન્મદિવસની શુભેચ્છાઓ", wish: "એક સુંદર ઇચ્છા કરો ✨", memory: "તમારા માટે એક નાની સુંદર યાદ", candles: "મીણબત્તીઓ બુઝાવો અને ઇચ્છા કરો" }
};

export const themes = {
  confetti: { label: "Confetti Pop", emoji: "🎉" },
  midnight: { label: "Midnight Magic", emoji: "🌙" },
  blossom: { label: "Soft Blossom", emoji: "🌸" }
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

export function buildWishPath({ recipient, from = "Someone special", language = "en", theme = "confetti", message = "Wishing you a day full of smiles, surprises and good memories.", memory = "", photo = "" }) {
  const params = new URLSearchParams({
    from,
    lang: languages[language] ? language : "en",
    theme: themes[theme] ? theme : "confetti",
    message,
    memory,
    photo
  });
  return `/wish/${slugifyName(recipient)}?${params.toString()}`;
}

export function getLanguage(code) {
  return languages[code] || languages.en;
}

export function getTheme(code) {
  return themes[code] ? code : "confetti";
}
