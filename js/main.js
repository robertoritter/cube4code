const STORAGE_KEY = "cube4code-language";

const translations = {
  en: {
    skip: "Skip to content",
    navHome: "Home",
    navServices: "Services",
    navHow: "How We Work",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Let's Build Together",

    heroEyebrow: "Software products · Data platforms · Engineering",
    heroTitle: "Complex software doesn't have to be complicated.",
    heroSubtitle: "We build software products and data platforms by breaking complex problems into understandable pieces.",
    heroLead: "Each piece is understood, engineered with care and assembled into a system that works — and keeps working.",
    heroCtaPrimary: "Start a Project",
    heroCtaSecondary: "See Our Work",
    heroFlow1: "Problem",
    heroFlow2: "Pieces",
    heroFlow3: "Engineering",
    heroFlow4: "System",

    howTitle: "Every solution starts with decomposition.",
    howStep1Title: "Understand",
    howStep1Body: "We start by understanding the business problem before writing a single line of code.",
    howStep2Title: "Break Apart",
    howStep2Body: "Complexity becomes manageable when divided into independent modules.",
    howStep3Title: "Build",
    howStep3Body: "Each component is developed independently with quality and scalability.",
    howStep4Title: "Assemble",
    howStep4Body: "The modules come together into a complete, elegant solution.",

    servicesTitle: "Engineering focused solutions.",
    svc1Title: "Software Development",
    svc1Body: "End-to-end product engineering, from architecture to delivery.",
    svc2Title: "Backend Engineering",
    svc2Body: "Reliable APIs and services built to scale with the business.",
    svc3Title: "Python Automation",
    svc3Body: "Replacing manual, error-prone work with dependable automation.",
    svc4Title: "Data Platforms",
    svc4Body: "Structured foundations that turn raw data into a reliable asset.",
    svc5Title: "Business Intelligence",
    svc5Body: "Dashboards and analytics that support real decisions.",
    svc6Title: "Cloud Integrations",
    svc6Body: "Connecting systems and services into one coherent architecture.",
    svc7Title: "Artificial Intelligence",
    svc7Body: "Practical AI components, integrated only where they add real value.",
    svc8Title: "Architecture Consulting",
    svc8Body: "Independent review and design of systems built to last.",

    projectsTitle: "Representative areas of work.",
    projectsLead: "Every engagement follows the same method: understand, decompose, build, assemble. Here are the kinds of problems that method has been applied to.",
    proj1Tag: "Data & Analytics",
    proj1Title: "Enterprise data platform",
    proj1Body: "Consolidating fragmented data sources into one governed platform for reporting and analytics.",
    proj2Tag: "Modernization",
    proj2Title: "Legacy system decomposition",
    proj2Body: "Breaking a monolithic system into maintainable modules without disrupting daily operations.",
    proj3Tag: "Automation",
    proj3Title: "Process automation",
    proj3Body: "Replacing manual, error-prone workflows with dependable, auditable automation.",
    proj4Tag: "Architecture",
    proj4Title: "Cloud & security architecture",
    proj4Body: "Designing infrastructure that scales safely, with governance built in from the start.",

    whyTitle: "Why Cube4Code?",
    whyLine1: "We don't begin with code.",
    whyLine2: "We begin with understanding.",
    whyBody: "Our process reduces complexity through modular thinking, allowing projects to evolve with clarity, maintainability and long-term scalability.",
    process1: "Discover",
    process2: "Model",
    process3: "Build",
    process4: "Integrate",
    process5: "Deliver",

    aboutTitle: "Software engineering with over three decades of experience.",
    aboutBody1: "Cube4Code was founded by Roberto Ritter after more than 30 years working in software engineering, business intelligence and enterprise data platforms.",
    aboutBody2: "Throughout this journey, projects have been delivered for global companies, combining architecture, analytics, automation and scalable software development.",
    aboutBody3: "Today Cube4Code brings that experience together into a single engineering approach:",
    aboutPillar1: "Understand.",
    aboutPillar2: "Decompose.",
    aboutPillar3: "Build.",
    aboutPillar4: "Solve.",

    techLabel: "Working with",

    ctaTitle: "Let's solve the next complex problem together.",
    ctaBody: "Every great solution starts by understanding the pieces before assembling the whole.",
    ctaButton: "Start Your Project",

    pageTitle: "Cube4Code — Complex software doesn't have to be complicated.",
    pageDescription: "Cube4Code decomposes complex software problems into understandable modules, builds each piece with quality, and assembles solutions that scale."
  },
  pt: {
    skip: "Pular para o conteúdo",
    navHome: "Início",
    navServices: "Serviços",
    navHow: "Como Trabalhamos",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    navCta: "Vamos Construir Juntos",

    heroEyebrow: "Produtos de software · Plataformas de dados · Engenharia",
    heroTitle: "Software complexo não precisa ser complicado.",
    heroSubtitle: "Construímos produtos de software e plataformas de dados dividindo problemas complexos em peças compreensíveis.",
    heroLead: "Cada peça é compreendida, desenvolvida com rigor e montada em um sistema que funciona — e continua funcionando.",
    heroCtaPrimary: "Iniciar um Projeto",
    heroCtaSecondary: "Ver Nosso Trabalho",
    heroFlow1: "Problema",
    heroFlow2: "Peças",
    heroFlow3: "Engenharia",
    heroFlow4: "Sistema",

    howTitle: "Toda solução começa pela decomposição.",
    howStep1Title: "Entender",
    howStep1Body: "Começamos entendendo o problema de negócio antes de escrever uma única linha de código.",
    howStep2Title: "Dividir",
    howStep2Body: "A complexidade se torna administrável quando dividida em módulos independentes.",
    howStep3Title: "Construir",
    howStep3Body: "Cada componente é desenvolvido de forma independente, com qualidade e escalabilidade.",
    howStep4Title: "Montar",
    howStep4Body: "Os módulos se juntam em uma solução completa e elegante.",

    servicesTitle: "Soluções focadas em engenharia.",
    svc1Title: "Desenvolvimento de Software",
    svc1Body: "Engenharia de produto de ponta a ponta, da arquitetura à entrega.",
    svc2Title: "Engenharia Backend",
    svc2Body: "APIs e serviços confiáveis, construídos para escalar com o negócio.",
    svc3Title: "Automação em Python",
    svc3Body: "Substituindo trabalho manual e sujeito a erros por automação confiável.",
    svc4Title: "Plataformas de Dados",
    svc4Body: "Fundações estruturadas que transformam dados brutos em um ativo confiável.",
    svc5Title: "Business Intelligence",
    svc5Body: "Dashboards e analytics que sustentam decisões reais.",
    svc6Title: "Integrações em Nuvem",
    svc6Body: "Conectando sistemas e serviços em uma arquitetura coerente.",
    svc7Title: "Inteligência Artificial",
    svc7Body: "Componentes práticos de IA, integrados apenas onde agregam valor real.",
    svc8Title: "Consultoria em Arquitetura",
    svc8Body: "Revisão e desenho independente de sistemas construídos para durar.",

    projectsTitle: "Áreas representativas de atuação.",
    projectsLead: "Todo projeto segue o mesmo método: entender, decompor, construir, montar. Estes são os tipos de problema aos quais esse método já foi aplicado.",
    proj1Tag: "Dados & Analytics",
    proj1Title: "Plataforma de dados corporativa",
    proj1Body: "Consolidação de fontes de dados fragmentadas em uma plataforma governada para relatórios e analytics.",
    proj2Tag: "Modernização",
    proj2Title: "Decomposição de sistema legado",
    proj2Body: "Divisão de um sistema monolítico em módulos sustentáveis, sem interromper a operação diária.",
    proj3Tag: "Automação",
    proj3Title: "Automação de processos",
    proj3Body: "Substituição de fluxos manuais e sujeitos a erro por automação confiável e auditável.",
    proj4Tag: "Arquitetura",
    proj4Title: "Arquitetura de nuvem e segurança",
    proj4Body: "Desenho de infraestrutura que escala com segurança, com governança desde o início.",

    whyTitle: "Por que Cube4Code?",
    whyLine1: "Não começamos pelo código.",
    whyLine2: "Começamos pelo entendimento.",
    whyBody: "Nosso processo reduz complexidade por meio do pensamento modular, permitindo que projetos evoluam com clareza, manutenibilidade e escalabilidade de longo prazo.",
    process1: "Descobrir",
    process2: "Modelar",
    process3: "Construir",
    process4: "Integrar",
    process5: "Entregar",

    aboutTitle: "Engenharia de software com mais de três décadas de experiência.",
    aboutBody1: "A Cube4Code foi fundada por Roberto Ritter após mais de 30 anos atuando em engenharia de software, business intelligence e plataformas de dados corporativas.",
    aboutBody2: "Ao longo dessa trajetória, projetos foram entregues para empresas globais, combinando arquitetura, analytics, automação e desenvolvimento de software escalável.",
    aboutBody3: "Hoje a Cube4Code reúne essa experiência em uma única abordagem de engenharia:",
    aboutPillar1: "Entender.",
    aboutPillar2: "Decompor.",
    aboutPillar3: "Construir.",
    aboutPillar4: "Resolver.",

    techLabel: "Trabalhamos com",

    ctaTitle: "Vamos resolver o próximo problema complexo juntos.",
    ctaBody: "Toda grande solução começa entendendo as peças antes de montar o todo.",
    ctaButton: "Inicie Seu Projeto",

    pageTitle: "Cube4Code — Software complexo não precisa ser complicado.",
    pageDescription: "A Cube4Code decompõe problemas complexos de software em módulos compreensíveis, constrói cada peça com qualidade e monta soluções que escalam."
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

/* Header: transparent -> blurred solid background on scroll */

const header = document.getElementById("site-header");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

/* Mobile nav toggle */

const navToggle = document.getElementById("nav-toggle");

function closeNav() {
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (header.classList.contains("nav-open") && !header.contains(event.target)) {
      closeNav();
    }
  });
}
