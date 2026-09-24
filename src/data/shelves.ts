export interface DramaItem {
  id: string;
  title: string;
  image: string;
  match: string;
  badge: string;
  badgeColor: 'purple' | 'teal';
  year: string;
  genres: string;
  whereToWatch: string[];
  gradientTheme: string;
}

export interface ShelfCategory {
  key: string;
  title: string;
  description: string;
  badge: string;
  items: DramaItem[];
}

export const shelves: Record<string, DramaItem[]> = {
  kdrama: [
    {
      id: "kd-1",
      title: "Queen of Tears",
      image: "https://image.tmdb.org/t/p/w500/8xV47NDrjdZDxa3m6B5F4K5C44X.jpg",
      match: "99%",
      badge: "K-Drama",
      badgeColor: "purple",
      year: "2024",
      genres: "Romance · Family · Comedy",
      whereToWatch: ["Netflix", "TVING"],
      gradientTheme: "from-rose-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "kd-2",
      title: "Moving",
      image: "https://image.tmdb.org/t/p/w500/vfHpYAEhh71Y12q0c5tP0XmYm7g.jpg",
      match: "95%",
      badge: "K-Drama",
      badgeColor: "teal",
      year: "2023",
      genres: "Action · Superpower · Thriller",
      whereToWatch: ["Disney+", "Hulu"],
      gradientTheme: "from-blue-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "kd-3",
      title: "Crash Landing on You",
      image: "https://image.tmdb.org/t/p/w500/bv2jhRzR1mK12nO9ZzI340kG0qg.jpg",
      match: "98%",
      badge: "K-Drama",
      badgeColor: "purple",
      year: "2020",
      genres: "Romance · Military · Comedy",
      whereToWatch: ["Netflix"],
      gradientTheme: "from-emerald-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "kd-4",
      title: "The Glory",
      image: "https://image.tmdb.org/t/p/w500/6jOpyUgvd59P23umSY02n40k7mH.jpg",
      match: "96%",
      badge: "K-Drama",
      badgeColor: "teal",
      year: "2022",
      genres: "Psychological · Revenge · Drama",
      whereToWatch: ["Netflix"],
      gradientTheme: "from-zinc-950/90 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "kd-5",
      title: "Lovely Runner",
      image: "https://image.tmdb.org/t/p/w500/e9N059jT1W88p6sT282n0sK2N5z.jpg",
      match: "97%",
      badge: "K-Drama",
      badgeColor: "purple",
      year: "2024",
      genres: "Time Travel · Romance · Music",
      whereToWatch: ["Viki", "Viu"],
      gradientTheme: "from-yellow-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "kd-6",
      title: "Twinkling Watermelon",
      image: "https://image.tmdb.org/t/p/w500/wzUf5aUj2yV8JbI1gH7M2h1Q8yv.jpg",
      match: "94%",
      badge: "K-Drama",
      badgeColor: "teal",
      year: "2023",
      genres: "Youth · Fantasy · Band",
      whereToWatch: ["Viki"],
      gradientTheme: "from-teal-950/80 via-slate-900/90 to-[#0B0D12]"
    }
  ],
  anime: [
    {
      id: "an-1",
      title: "Solo Leveling",
      image: "https://image.tmdb.org/t/p/w500/geCRueVbVsZ41dRXxYk8wQWd4Yc.jpg",
      match: "98%",
      badge: "Anime",
      badgeColor: "teal",
      year: "2024",
      genres: "Action · Fantasy · Dungeons",
      whereToWatch: ["Crunchyroll", "Netflix"],
      gradientTheme: "from-indigo-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "an-2",
      title: "Frieren: Beyond Journey's End",
      image: "https://image.tmdb.org/t/p/w500/dqzenchTd7lp5zht7BdlqM7RBhD.jpg",
      match: "99%",
      badge: "Anime",
      badgeColor: "purple",
      year: "2023",
      genres: "High Fantasy · Adventure · Slice of Life",
      whereToWatch: ["Crunchyroll", "Muse Asia"],
      gradientTheme: "from-cyan-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "an-3",
      title: "Demon Slayer: Hashira Training Arc",
      image: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
      match: "97%",
      badge: "Anime",
      badgeColor: "teal",
      year: "2024",
      genres: "Shonen · Action · Dark Fantasy",
      whereToWatch: ["Crunchyroll", "Netflix"],
      gradientTheme: "from-orange-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "an-4",
      title: "Jujutsu Kaisen",
      image: "https://image.tmdb.org/t/p/w500/fHpKW29zW5gZ4F5Y9gXj1K8cW2q.jpg",
      match: "96%",
      badge: "Anime",
      badgeColor: "purple",
      year: "2023",
      genres: "Supernatural · Sorcery · Action",
      whereToWatch: ["Crunchyroll", "Netflix"],
      gradientTheme: "from-purple-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "an-5",
      title: "Attack on Titan: The Final Season",
      image: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
      match: "98%",
      badge: "Anime",
      badgeColor: "teal",
      year: "2023",
      genres: "Epic · Mystery · Military Dark Fantasy",
      whereToWatch: ["Crunchyroll", "Hulu"],
      gradientTheme: "from-stone-950/90 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "an-6",
      title: "The Apothecary Diaries",
      image: "https://image.tmdb.org/t/p/w500/gM0c3B9t8hF1Q4e7V5j8b9n0p1q.jpg",
      match: "95%",
      badge: "Anime",
      badgeColor: "purple",
      year: "2023",
      genres: "Historical · Medical Mystery · Imperial Court",
      whereToWatch: ["Crunchyroll", "Netflix"],
      gradientTheme: "from-emerald-950/80 via-slate-900/90 to-[#0B0D12]"
    }
  ],
  jdrama: [
    {
      id: "jd-1",
      title: "Alice in Borderland",
      image: "https://image.tmdb.org/t/p/w500/20mflEZQ4bhrB78AzyptMCM0b6S.jpg",
      match: "97%",
      badge: "J-Drama",
      badgeColor: "purple",
      year: "2022",
      genres: "Survival Game · Sci-Fi · Thriller",
      whereToWatch: ["Netflix"],
      gradientTheme: "from-red-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "jd-2",
      title: "First Love: Hatsukoi",
      image: "https://image.tmdb.org/t/p/w500/4dO4P0QcZ4G15P9L3K8E4J1k6vQ.jpg",
      match: "96%",
      badge: "J-Drama",
      badgeColor: "teal",
      year: "2022",
      genres: "Romance · Melodrama · Nostalgia",
      whereToWatch: ["Netflix"],
      gradientTheme: "from-sky-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "jd-3",
      title: "House of Ninjas",
      image: "https://image.tmdb.org/t/p/w500/3oQ2gW7GjQfBqjC9x6e2nZ1f4yJ.jpg",
      match: "93%",
      badge: "J-Drama",
      badgeColor: "purple",
      year: "2024",
      genres: "Action · Modern Shinobi · Mystery",
      whereToWatch: ["Netflix"],
      gradientTheme: "from-slate-950/90 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "jd-4",
      title: "Shōgun",
      image: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WNzG1AgYT.jpg",
      match: "98%",
      badge: "J-Drama",
      badgeColor: "teal",
      year: "2024",
      genres: "Historical Epic · Feudal Japan · Politics",
      whereToWatch: ["Disney+", "Hulu"],
      gradientTheme: "from-amber-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "jd-5",
      title: "Brush Up Life (Rebooting)",
      image: "https://image.tmdb.org/t/p/w500/9y3h8vF1u5m4t2k9j6l3b8z5x2c.jpg",
      match: "94%",
      badge: "J-Drama",
      badgeColor: "purple",
      year: "2023",
      genres: "Time Loop · Comedy · Slice of Life",
      whereToWatch: ["Viki", "Hulu JP"],
      gradientTheme: "from-violet-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "jd-6",
      title: "Eye Love You",
      image: "https://image.tmdb.org/t/p/w500/5k7m3j9x1z8w2f4v6t8q0b1n3p4.jpg",
      match: "92%",
      badge: "J-Drama",
      badgeColor: "teal",
      year: "2024",
      genres: "Telepathy · Cross-Cultural · Rom-Com",
      whereToWatch: ["Netflix"],
      gradientTheme: "from-pink-950/80 via-slate-900/90 to-[#0B0D12]"
    }
  ],
  filipino: [
    {
      id: "ph-1",
      title: "Maria Clara at Ibarra",
      image: "https://image.tmdb.org/t/p/w500/1X6M6M8o2Q4s8M5xH4aL8y7G3sQ.jpg",
      match: "95%",
      badge: "Filipino",
      badgeColor: "teal",
      year: "2022",
      genres: "Historical Fantasy · Literature · Romance",
      whereToWatch: ["Netflix", "GMA Pinoy TV"],
      gradientTheme: "from-amber-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "ph-2",
      title: "Can't Buy Me Love",
      image: "https://image.tmdb.org/t/p/w500/5L1h9t0j6v3k7m8n2b4c5x9y8z1.jpg",
      match: "93%",
      badge: "Filipino",
      badgeColor: "purple",
      year: "2023",
      genres: "Chinatown Manila · Rom-Com · Mystery",
      whereToWatch: ["Netflix", "iWantTFC"],
      gradientTheme: "from-rose-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "ph-3",
      title: "Senior High",
      image: "https://image.tmdb.org/t/p/w500/9k3m5j7n2b4c8x1y0v6w5t4r3q2.jpg",
      match: "91%",
      badge: "Filipino",
      badgeColor: "teal",
      year: "2023",
      genres: "Youth Noir · Whodunit · High School",
      whereToWatch: ["iWantTFC", "YouTube"],
      gradientTheme: "from-slate-950/90 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "ph-4",
      title: "Linlang (Deceit)",
      image: "https://image.tmdb.org/t/p/w500/8c4v2m1x9z5k7j3h8f0b4t6p9q2.jpg",
      match: "94%",
      badge: "Filipino",
      badgeColor: "purple",
      year: "2023",
      genres: "Psychological Thriller · Infidelity · Drama",
      whereToWatch: ["Prime Video"],
      gradientTheme: "from-purple-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "ph-5",
      title: "Dirty Linen",
      image: "https://image.tmdb.org/t/p/w500/6f5k7J8s9L0m1N2x3y4Z5a6b7c1.jpg",
      match: "96%",
      badge: "Filipino",
      badgeColor: "teal",
      year: "2023",
      genres: "Elite Revenge · Suspense · Neo-Noir",
      whereToWatch: ["Prime Video", "iWantTFC"],
      gradientTheme: "from-zinc-950/90 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "ph-6",
      title: "Incognito",
      image: "https://image.tmdb.org/t/p/w500/3m4n5b6v7c8x9z0a1s2d3f4g5h6.jpg",
      match: "92%",
      badge: "Filipino",
      badgeColor: "purple",
      year: "2024",
      genres: "Espionage · Special Operations · Action",
      whereToWatch: ["Netflix", "iWantTFC"],
      gradientTheme: "from-emerald-950/80 via-slate-900/90 to-[#0B0D12]"
    }
  ],
  cdrama: [
    {
      id: "cd-1",
      title: "Hidden Love",
      image: "https://image.tmdb.org/t/p/w500/h6W7f2X4a8c9b0e1f2g3h4i5j6k.jpg",
      match: "98%",
      badge: "C-Drama",
      badgeColor: "purple",
      year: "2023",
      genres: "Campus Romance · Pure Love · Sweet",
      whereToWatch: ["Netflix", "Youku"],
      gradientTheme: "from-pink-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "cd-2",
      title: "Love Between Fairy and Devil",
      image: "https://image.tmdb.org/t/p/w500/r3c7J7R4z4k5s6M7t8Y9x0W1b2a.jpg",
      match: "97%",
      badge: "C-Drama",
      badgeColor: "teal",
      year: "2022",
      genres: "Xianxia · Moon Supreme · Romance",
      whereToWatch: ["iQIYI", "Netflix"],
      gradientTheme: "from-cyan-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "cd-3",
      title: "Till the End of the Moon",
      image: "https://image.tmdb.org/t/p/w500/4k7j8s9L0m1N2x3y4Z5a6b7c8d9.jpg",
      match: "96%",
      badge: "C-Drama",
      badgeColor: "purple",
      year: "2023",
      genres: "Devil God · Xianxia Fantasy · Reincarnation",
      whereToWatch: ["Youku", "Viki"],
      gradientTheme: "from-violet-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "cd-4",
      title: "The Untamed (Chen Qing Ling)",
      image: "https://image.tmdb.org/t/p/w500/ek1G4rB6Q6rGfX4W4k8yZ1a2b34.jpg",
      match: "99%",
      badge: "C-Drama",
      badgeColor: "teal",
      year: "2019",
      genres: "Cult Classic · Wuxia · Brotherhood & Mystery",
      whereToWatch: ["WeTV", "Netflix", "Viki"],
      gradientTheme: "from-sky-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "cd-5",
      title: "Reset",
      image: "https://image.tmdb.org/t/p/w500/8a7b6c5d4e3f2a1b0c9d8e7f6a5.jpg",
      match: "95%",
      badge: "C-Drama",
      badgeColor: "purple",
      year: "2022",
      genres: "Bus Time Loop · Sci-Fi · Tension Thriller",
      whereToWatch: ["Viki", "YouTube"],
      gradientTheme: "from-red-950/80 via-slate-900/90 to-[#0B0D12]"
    },
    {
      id: "cd-6",
      title: "Story of Kunning Palace",
      image: "https://image.tmdb.org/t/p/w500/7a8b9c0d1e2f3a4b5c6d7e8f9a0.jpg",
      match: "94%",
      badge: "C-Drama",
      badgeColor: "teal",
      year: "2023",
      genres: "Second Life · Imperial Court Intrigue · Romance",
      whereToWatch: ["iQIYI"],
      gradientTheme: "from-amber-950/80 via-slate-900/90 to-[#0B0D12]"
    }
  ]
};

export const shelfMetaList: ShelfCategory[] = [
  {
    key: "kdrama",
    title: "Trending K-Dramas",
    description: "Heartfelt romances, intense thrillers, and acclaimed Seoul productions with highest engagement scores.",
    badge: "K-Drama Match Rate 98%",
    items: shelves.kdrama
  },
  {
    key: "anime",
    title: "Top-Rated Anime",
    description: "Record-shattering seasonal releases, dark fantasy epics, and timeless Shonen masterworks.",
    badge: "Anime Community Top 1%",
    items: shelves.anime
  },
  {
    key: "jdrama",
    title: "Popular J-Dramas",
    description: "Atmospheric Japanese mystery thrillers, high-stakes psychological games, and poignant human dramas.",
    badge: "Critically Acclaimed",
    items: shelves.jdrama
  },
  {
    key: "filipino",
    title: "Filipino Hits",
    description: "Captivating teleserye hits, modern Philippine revenges, and prime-time historical fantasies.",
    badge: "Trending in Southeast Asia",
    items: shelves.filipino
  },
  {
    key: "cdrama",
    title: "Must-Watch C-Dramas",
    description: "Majestic Xianxia mythologies, sweeping imperial palace sagas, and modern viral youth romances.",
    badge: "Over 5B Global Views",
    items: shelves.cdrama
  }
];

export const heroCarouselData = [
  {
    id: "hero-1",
    title: "Queen of Tears",
    match: "99% Taste Match",
    tagline: "Trending Global #1 Romance",
    country: "South Korea",
    category: "Trending K-Drama",
    backdropColor: "from-[#1a0f2b] via-[#0E1119] to-[#0B0D12]",
    accentGlow: "rgba(139, 92, 246, 0.25)",
    whereToFind: "Available on Netflix & TVING",
    tasteVector: "For fans of Crash Landing on You, It's Okay to Not Be Okay"
  },
  {
    id: "hero-2",
    title: "Solo Leveling",
    match: "98% Taste Match",
    tagline: "Top-Rated Dark Fantasy Awakening",
    country: "Japan",
    category: "Top-Rated Anime",
    backdropColor: "from-[#081a2e] via-[#0D1420] to-[#0B0D12]",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    whereToFind: "Available on Crunchyroll & Netflix",
    tasteVector: "For fans of Jujutsu Kaisen, Hunter x Hunter"
  },
  {
    id: "hero-3",
    title: "Alice in Borderland",
    match: "97% Taste Match",
    tagline: "High-Stakes Tokyo Survival Phenomenon",
    country: "Japan",
    category: "Popular J-Drama",
    backdropColor: "from-[#280c14] via-[#120F18] to-[#0B0D12]",
    accentGlow: "rgba(239, 68, 68, 0.2)",
    whereToFind: "Available on Netflix Worldwide",
    tasteVector: "For fans of Squid Game, Liar Game"
  },
  {
    id: "hero-4",
    title: "Hidden Love & Xianxia Hits",
    match: "98% Taste Match",
    tagline: "The Modern C-Drama Romantic Standard",
    country: "China",
    category: "Must-Watch C-Drama",
    backdropColor: "from-[#24122e] via-[#111322] to-[#0B0D12]",
    accentGlow: "rgba(168, 85, 247, 0.25)",
    whereToFind: "Available on Netflix, Youku & Viki",
    tasteVector: "For fans of When I Fly Towards You, Meteor Garden"
  }
];
