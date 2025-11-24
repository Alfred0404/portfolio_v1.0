import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alfred de Vulpian — Etudiant en Data & IA à l'ECE Paris",
  author: "Alfred de Vulpian",
  description:
    "Etudiant en Master 1 à l'ECE Paris, je me spécialise en Data Science et Intelligence Artificielle.",
  lang: "en",
  siteLogo: "/alfred-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/alfred-de-vulpian" },
    { text: "Github", href: "https://github.com/alfred0404" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alfred de Vulpian",
    specialty: "Etudiant en Data & IA à l'ECE Paris",
    summary:
      "Etudiant en Master 1 à l'ECE Paris, je me spécialise en Data Science et Intelligence Artificielle. Je suis actuellement à la recherche d'un stage technique dans ces domaines à partir d'avril 2026 pour 4 mois.",
    email: "alfred.devulpian@edu.ece.fr",
  },
  experience: [
    {
      company: "CND (commissariat Numérique de Défense)",
      position: "3ème place - Hackathon",
      startDate: "Novembre 2025",
      endDate: "Novembre 2025",
      summary: [
        "Conception d'une solution d'analyse de logs pour SOC\n- Détection de bugs/attaques (100% Précision, 97.5% Recall, 99.7% F1-score).\n- Accès à la phase final, pitch de notre solution devant un jury d'expert civiles et militaires.\n- Stack : Python, FastAPI, Streamlit, LangChain (RAG), ChromaDB, Docker, OVHcloud.",
      ],
    },
    {
      company: "Crédit Agricole Assurances",
      position: "Data Scientist (Stage)",
      startDate: "Janvier 2025",
      endDate: "Fevrier 2025",
      summary: [
        "Participation au développement en Python d'un algorithme de préparation de données pour l'entraînement de modèles (+5% de précision).",
        "Annotation de documents pour l'entraînement de modèles d'extraction de texte.",
      ],
    },
    {
      company: "Havas Data Business Intelligence",
      position: "Data Scientist (Stage)",
      startDate: "Janvier 2024",
      endDate: "Février 2024",
      summary: [
        "Développement en Python d'une pipeline ETL vers une datawarehouse BigQuery.",
        "Extraction grâce à Python (pandas) des données du parcours utilisateur sur le site des clients permettant leur analyse et l'optimisation du taux de transformation",
      ],
    },
  ],
  projects: [
    {
      name: "Rag Pipeline",
      summary:
        "Un chatbot Retrieval-Augmented Generation (RAG) construit avec Langchain, Ollama (mistral:7b) et Chroma pour le stockage vectoriel.",
      linkPreview: "/",
      linkSource: "https://github.com/alfred0404/rag_chatbot",
      image: "/rag_chatbot.png",
    },
    {
      name: "Genetic Algorithm for AI Race Cars",
      summary:
        "Une simulation de voitures de course IA utilisant des algorithmes génétiques pour faire évoluer les comportements des véhicules au fil des générations.",
      linkPreview: "/",
      linkSource: "https://github.com/alfred0404/genetic_ai_racer",
      image: "/genetic_ai_racer.png",
    },
    {
      name: "GAN",
      summary:
        "Implémentation complète de Generative Adversarial Network (GAN) en utilisant PyTorch.",
      linkPreview: "/",
      linkSource: "https://github.com/alfred0404/gan",
      image: "/gan.png",
    },
    {
      name: "BPE Tokenizer",
      summary: "Implémentation d'un tokenizer Byte Pair Encoding (BPE).",
      linkPreview: "/",
      linkSource: "https://github.com/alfred0404/bpe_tokenizer",
      image: "/bpe_tokenizer.jpg",
    },
  ],
  about: {
    description: `
      Bonjour, je suis Alfred de Vulpian, étudiant en 4ᵉ année à l'ECE Paris, spécialisé en data science et intelligence artificielle. Passionné par la technologie et l'innovation, je développe régulièrement des projets personnels mêlant Python, IA et analyse de données.

      J'ai construit une solide maîtrise de Python et de ses principaux écosystèmes — du machine learning à l'automatisation, en passant par le développement d'outils et d'applications intelligentes. J'aime comprendre en profondeur ce que je crée, alliant rigueur technique et curiosité scientifique.

      Mon objectif : concevoir des solutions claires, performantes et utiles, en explorant le potentiel de l'intelligence artificielle pour répondre à des problématiques réelles et concrètes.
    `,
    image: "/alfred-big.png",
  },
};

// #5755ff
