const STORAGE_KEY = "cube4code-language";

const translations = {
  en: {
    skip: "Skip to content",
    navHow: "How we work",
    navWhat: "What we build",
    navContact: "Contact",
    heroEyebrow: "Software studio",
    heroLine1: "Break it down.",
    heroLine2: "Connect it.",
    heroLine3: "Solve it.",
    heroLead: "Every hard problem is a pile of smaller pieces waiting to be found. We find them, fit them together, and build software that stands on its own.",
    heroCta: "Talk to us",
    heroSecondary: "See how we work",
    howTitle: "Three moves. Every project.",
    step1Title: "Divide",
    step1Body: "We take the tangled problem apart until each piece is small enough to understand completely.",
    step2Title: "Connect",
    step2Body: "We wire the pieces together so decisions in one place reinforce the rest of the system.",
    step3Title: "Solve",
    step3Body: "We assemble everything into one solid cube: software that works as a whole, not a stack of patches.",
    whatTitle: "Built around the problem, not a template.",
    whatLead: "From the first sketch to what runs in production, we work alongside your team on the product and the foundation underneath it.",
    cap1: "Digital products",
    cap2: "Web platforms",
    cap3: "Systems & integrations",
    cap4: "Technical strategy",
    manifestoLine1: "Small pieces.",
    manifestoLine2: "Strong connections.",
    manifestoLine3: "One solid result.",
    contactTitle: "Got a problem worth breaking apart?",
    contactBody: "Bring us the mess. We will help you find the pieces and put them back together.",
    footer: "Piece by piece.",
    pageTitle: "Cube4Code — Break it down. Connect it. Solve it.",
    pageDescription: "Cube4Code breaks complex software problems into pieces, connects them, and ships solutions that hold together."
  },
  pt: {
    skip: "Pular para o conteúdo",
    navHow: "Como trabalhamos",
    navWhat: "O que construímos",
    navContact: "Contato",
    heroEyebrow: "Estúdio de software",
    heroLine1: "Divida o problema.",
    heroLine2: "Conecte as peças.",
    heroLine3: "Resolva.",
    heroLead: "Todo problema difícil é um monte de peças menores esperando para serem encontradas. Nós as encontramos, encaixamos e construímos software que se sustenta sozinho.",
    heroCta: "Fale com a gente",
    heroSecondary: "Veja como trabalhamos",
    howTitle: "Três movimentos. Todo projeto.",
    step1Title: "Dividir",
    step1Body: "Desmontamos o problema emaranhado até cada peça ficar pequena o suficiente para ser totalmente compreendida.",
    step2Title: "Conectar",
    step2Body: "Ligamos as peças entre si para que cada decisão reforce o restante do sistema.",
    step3Title: "Resolver",
    step3Body: "Montamos tudo em um cubo sólido: software que funciona como um todo, não uma pilha de remendos.",
    whatTitle: "Construído em torno do problema, não de um modelo pronto.",
    whatLead: "Do primeiro esboço ao que roda em produção, trabalhamos junto com o seu time no produto e na base por trás dele.",
    cap1: "Produtos digitais",
    cap2: "Plataformas web",
    cap3: "Sistemas e integrações",
    cap4: "Estratégia técnica",
    manifestoLine1: "Peças pequenas.",
    manifestoLine2: "Conexões fortes.",
    manifestoLine3: "Um resultado sólido.",
    contactTitle: "Tem um problema que vale a pena desmontar?",
    contactBody: "Traga a bagunça. Ajudamos você a encontrar as peças e remontá-las.",
    footer: "Peça por peça.",
    pageTitle: "Cube4Code — Divida. Conecte. Resolva.",
    pageDescription: "A Cube4Code divide problemas complexos de software em peças, conecta cada uma delas e entrega soluções que se sustentam."
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const descriptionTag = document.querySelector('meta[name="description"]');

function applyLanguage(language) {
  const lang = translations[language] ? language : "en";
  const dict = translations[lang];

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = dict.pageTitle;
  descriptionTag.setAttribute("content", dict.pageDescription);

  translatableElements.forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === lang));
  });

  return lang;
}

function setLanguage(language) {
  const lang = applyLanguage(language);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage unavailable, page still works */
  }
}

function getSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "en";
  } catch {
    return "en";
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const yearEl = document.getElementById("current-year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

applyLanguage(getSavedLanguage());
