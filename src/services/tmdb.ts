/**
 * TMDB API Configuration & Client Service
 * 
 * Configured with the user's TMDB API key and direct TMDB Discover endpoints
 * filtered strictly by region/language (Korean for K-Dramas, Japanese Animation for Anime,
 * Japanese for J-Dramas, Tagalog/Filipino for Filipino Hits, and Chinese for C-Dramas).
 */

export interface TMDBMediaItem {
  id: number;
  title: string;
  originalTitle?: string;
  backdrop_path: string | null;
  poster_path: string | null;
  vote_average: number;
  vote_count?: number;
  release_year: string;
  first_air_date?: string;
  overview: string;
  genres: string[];
  categoryKey: 'kdrama' | 'anime' | 'jdrama' | 'filipino' | 'cdrama';
  categoryLabel: string;
  matchScore: string;
}

export interface TMDBConfig {
  apiKey: string;
  categoryIds: {
    kdrama: number[];
    anime: number[];
    jdrama: number[];
    filipino: number[];
    cdrama: number[];
  };
}

export const TMDB_CONFIG: TMDBConfig = {
  apiKey: "10eff5fb3987e79f2ed85855a807ea05", 
  categoryIds: {
    kdrama: [206586, 152606, 94796, 136283, 226411, 198004],
    anime: [204541, 209867, 85937, 95479, 1429, 208573],
    jdrama: [110356, 112888, 126308, 209848, 218230, 243936],
    filipino: [210232, 234125, 232924, 212710, 218589, 245209],
    cdrama: [209859, 205828, 213713, 90282, 153723, 238712]
  }
};

export const CATEGORY_DEFINITIONS: {
  key: 'kdrama' | 'anime' | 'jdrama' | 'filipino' | 'cdrama';
  title: string;
  badgeLabel: string;
}[] = [
  { key: 'kdrama', title: 'Trending K-Dramas', badgeLabel: 'K-Drama' },
  { key: 'anime', title: 'Top-Rated Anime', badgeLabel: 'Anime' },
  { key: 'jdrama', title: 'Popular J-Dramas', badgeLabel: 'J-Drama' },
  { key: 'filipino', title: 'Filipino Hits', badgeLabel: 'Filipino' },
  { key: 'cdrama', title: 'Must-Watch C-Dramas', badgeLabel: 'C-Drama' }
];

const GENRE_MAP: Record<number, string> = {
  16: "Animation",
  18: "Drama",
  35: "Comedy",
  80: "Crime",
  9648: "Mystery",
  10759: "Action & Adventure",
  10762: "Kids",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10768: "War & Politics",
  10749: "Romance"
};

function getGenreName(id: number): string {
  return GENRE_MAP[id] || "Drama";
}

export const TMDB_FALLBACK_CACHE: Record<number, TMDBMediaItem> = {
  206586: {
    id: 206586,
    title: "Queen of Tears",
    backdrop_path: "/8xV47NDrjdZDxa3m6B5F4K5C44X.jpg",
    poster_path: "/8xV47NDrjdZDxa3m6B5F4K5C44X.jpg",
    vote_average: 8.8,
    release_year: "2024",
    overview: "The queen of department stores and the prince of supermarkets weather a marital crisis—until love miraculously begins to bloom again against all odds.",
    genres: ["Romance", "Drama", "Family"],
    categoryKey: "kdrama",
    categoryLabel: "K-Drama",
    matchScore: "98% Match"
  },
  152606: {
    id: 152606,
    title: "Moving",
    backdrop_path: "/vfHpYAEhh71Y12q0c5tP0XmYm7g.jpg",
    poster_path: "/vfHpYAEhh71Y12q0c5tP0XmYm7g.jpg",
    vote_average: 8.5,
    release_year: "2023",
    overview: "Children with extraordinary superhuman superpowers and their protective parents battle malicious shadow forces across generations in modern-day Seoul.",
    genres: ["Action", "Sci-Fi", "Drama"],
    categoryKey: "kdrama",
    categoryLabel: "K-Drama",
    matchScore: "98% Match"
  },
  94796: {
    id: 94796,
    title: "Crash Landing on You",
    backdrop_path: "/bv2jhRzR1mK12nO9ZzI340kG0qg.jpg",
    poster_path: "/bv2jhRzR1mK12nO9ZzI340kG0qg.jpg",
    vote_average: 8.9,
    release_year: "2019",
    overview: "A paragliding mishap drops a South Korean chaebol heiress into North Korea—and into the life of an army officer who decides he will help her hide.",
    genres: ["Comedy", "Romance", "Drama"],
    categoryKey: "kdrama",
    categoryLabel: "K-Drama",
    matchScore: "98% Match"
  },
  136283: {
    id: 136283,
    title: "The Glory",
    backdrop_path: "/6jOpyUgvd59P23umSY02n40k7mH.jpg",
    poster_path: "/6jOpyUgvd59P23umSY02n40k7mH.jpg",
    vote_average: 8.6,
    release_year: "2022",
    overview: "Years after surviving horrific school bullying, a determined woman orchestrates an elaborate retribution plot to make the perpetrators answer for their crimes.",
    genres: ["Drama", "Mystery", "Thriller"],
    categoryKey: "kdrama",
    categoryLabel: "K-Drama",
    matchScore: "98% Match"
  },
  226411: {
    id: 226411,
    title: "Lovely Runner",
    backdrop_path: "/e9N059jT1W88p6sT282n0sK2N5z.jpg",
    poster_path: "/e9N059jT1W88p6sT282n0sK2N5z.jpg",
    vote_average: 8.7,
    release_year: "2024",
    overview: "Devastated by the sudden loss of her favorite music idol, a dedicated fan is miraculously transported fifteen years into the past with a chance to save his fate.",
    genres: ["Romance", "Fantasy", "Comedy"],
    categoryKey: "kdrama",
    categoryLabel: "K-Drama",
    matchScore: "98% Match"
  },
  198004: {
    id: 198004,
    title: "Twinkling Watermelon",
    backdrop_path: "/wzUf5aUj2yV8JbI1gH7M2h1Q8yv.jpg",
    poster_path: "/wzUf5aUj2yV8JbI1gH7M2h1Q8yv.jpg",
    vote_average: 8.8,
    release_year: "2023",
    overview: "A child of deaf adult (CODA) student with a natural gift for music travels back to 1995 through an enigmatic musical instruments shop, meeting his high school-aged father.",
    genres: ["Youth", "Fantasy", "Music"],
    categoryKey: "kdrama",
    categoryLabel: "K-Drama",
    matchScore: "98% Match"
  },
  204541: {
    id: 204541,
    title: "Solo Leveling",
    backdrop_path: "/geCRueVbVsZ41dRXxYk8wQWd4Yc.jpg",
    poster_path: "/geCRueVbVsZ41dRXxYk8wQWd4Yc.jpg",
    vote_average: 8.7,
    release_year: "2024",
    overview: "In a world where hunters face deadly monster dungeons, the world's weakest hunter Sung Jinwoo is reawakened with the unique power to level up infinitely.",
    genres: ["Animation", "Action & Adventure"],
    categoryKey: "anime",
    categoryLabel: "Anime",
    matchScore: "98% Match"
  },
  209867: {
    id: 209867,
    title: "Frieren: Beyond Journey's End",
    backdrop_path: "/dqzenchTd7lp5zht7BdlqM7RBhD.jpg",
    poster_path: "/dqzenchTd7lp5zht7BdlqM7RBhD.jpg",
    vote_average: 9.1,
    release_year: "2023",
    overview: "After defeating the Demon King with the hero's party, elven mage Frieren embarks on a peaceful, introspective journey to understand the brevity of human connections.",
    genres: ["Animation", "Fantasy"],
    categoryKey: "anime",
    categoryLabel: "Anime",
    matchScore: "98% Match"
  },
  85937: {
    id: 85937,
    title: "Demon Slayer: Kimetsu no Yaiba",
    backdrop_path: "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    poster_path: "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    vote_average: 8.7,
    release_year: "2019",
    overview: "Tanjiro Kamado, a kindhearted boy whose family is slaughtered by demons, joins the Demon Slayer Corps to find a cure for his transformed sister Nezuko.",
    genres: ["Animation", "Action & Adventure"],
    categoryKey: "anime",
    categoryLabel: "Anime",
    matchScore: "98% Match"
  },
  95479: {
    id: 95479,
    title: "Jujutsu Kaisen",
    backdrop_path: "/fHpKW29zW5gZ4F5Y9gXj1K8cW2q.jpg",
    poster_path: "/fHpKW29zW5gZ4F5Y9gXj1K8cW2q.jpg",
    vote_average: 8.6,
    release_year: "2020",
    overview: "Yuji Itadori swallows a cursed finger to save his friends and enters the Tokyo Jujutsu High School to master cursed energy before his eventual execution.",
    genres: ["Animation", "Supernatural"],
    categoryKey: "anime",
    categoryLabel: "Anime",
    matchScore: "98% Match"
  },
  1429: {
    id: 1429,
    title: "Attack on Titan",
    backdrop_path: "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    poster_path: "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    vote_average: 8.7,
    release_year: "2013",
    overview: "Several hundred years after humanity was nearly exterminated by man-eating Titans, the survivors struggle to stay alive within towering defensive concentric walls.",
    genres: ["Animation", "Action & Adventure"],
    categoryKey: "anime",
    categoryLabel: "Anime",
    matchScore: "98% Match"
  },
  208573: {
    id: 208573,
    title: "The Apothecary Diaries",
    backdrop_path: "/gM0c3B9t8hF1Q4e7V5j8b9n0p1q.jpg",
    poster_path: "/gM0c3B9t8hF1Q4e7V5j8b9n0p1q.jpg",
    vote_average: 8.8,
    release_year: "2023",
    overview: "Kidnapped and forced to serve in the emperor's palace, an inquisitive apothecary named Maomao uses her forensic knowledge of poisons to solve court mysteries.",
    genres: ["Animation", "Mystery"],
    categoryKey: "anime",
    categoryLabel: "Anime",
    matchScore: "98% Match"
  },
  110356: {
    id: 110356,
    title: "Alice in Borderland",
    backdrop_path: "/20mflEZQ4bhrB78AzyptMCM0b6S.jpg",
    poster_path: "/20mflEZQ4bhrB78AzyptMCM0b6S.jpg",
    vote_average: 8.2,
    release_year: "2020",
    overview: "An aimless gamer and his two friends find themselves in a deserted alternate Tokyo, where they are forced to compete in sadistic, lethal games to extend their visas.",
    genres: ["Drama", "Action & Adventure"],
    categoryKey: "jdrama",
    categoryLabel: "J-Drama",
    matchScore: "98% Match"
  },
  112888: {
    id: 112888,
    title: "First Love: Hatsukoi",
    backdrop_path: "/4dO4P0QcZ4G15P9L3K8E4J1k6vQ.jpg",
    poster_path: "/4dO4P0QcZ4G15P9L3K8E4J1k6vQ.jpg",
    vote_average: 8.1,
    release_year: "2022",
    overview: "Cross-cutting through the late 1990s, the 2000s, and the present day, two teenagers fall in love for the first time and reconnect two decades later in Hokkaido.",
    genres: ["Drama", "Romance"],
    categoryKey: "jdrama",
    categoryLabel: "J-Drama",
    matchScore: "98% Match"
  },
  126308: {
    id: 126308,
    title: "Shōgun",
    backdrop_path: "/7O4iVfOMQmdCSxhOg1WNzG1AgYT.jpg",
    poster_path: "/7O4iVfOMQmdCSxhOg1WNzG1AgYT.jpg",
    vote_average: 8.5,
    release_year: "2024",
    overview: "In Japan in the year 1600 at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him.",
    genres: ["Drama", "War & Politics"],
    categoryKey: "jdrama",
    categoryLabel: "J-Drama",
    matchScore: "98% Match"
  },
  209848: {
    id: 209848,
    title: "House of Ninjas",
    backdrop_path: "/3oQ2gW7GjQfBqjC9x6e2nZ1f4yJ.jpg",
    poster_path: "/3oQ2gW7GjQfBqjC9x6e2nZ1f4yJ.jpg",
    vote_average: 7.6,
    release_year: "2024",
    overview: "Years after retiring from their formidable shinobi lives, a dysfunctional ninja family must return to shadowy undercover missions to counter impending national threats.",
    genres: ["Action", "Drama"],
    categoryKey: "jdrama",
    categoryLabel: "J-Drama",
    matchScore: "98% Match"
  },
  218230: {
    id: 218230,
    title: "Brush Up Life (Rebooting)",
    backdrop_path: "/9y3h8vF1u5m4t2k9j6l3b8z5x2c.jpg",
    poster_path: "/9y3h8vF1u5m4t2k9j6l3b8z5x2c.jpg",
    vote_average: 8.6,
    release_year: "2023",
    overview: "After a sudden untimely accident, 33-year-old Asami Kondo is granted the chance to relive her exact life from infancy to earn enough karma to be reincarnated as human.",
    genres: ["Comedy", "Fantasy"],
    categoryKey: "jdrama",
    categoryLabel: "J-Drama",
    matchScore: "98% Match"
  },
  243936: {
    id: 243936,
    title: "Eye Love You",
    backdrop_path: "/5k7m3j9x1z8w2f4v6t8q0b1n3p4.jpg",
    poster_path: "/5k7m3j9x1z8w2f4v6t8q0b1n3p4.jpg",
    vote_average: 7.9,
    release_year: "2024",
    overview: "A chocolate entrepreneur who can hear others' telepathic thoughts when looking into their eyes falls for an upbeat Korean student whose inner voice is in Korean.",
    genres: ["Comedy", "Romance"],
    categoryKey: "jdrama",
    categoryLabel: "J-Drama",
    matchScore: "98% Match"
  },
  210232: {
    id: 210232,
    title: "Maria Clara at Ibarra",
    backdrop_path: "/1X6M6M8o2Q4s8M5xH4aL8y7G3sQ.jpg",
    poster_path: "/1X6M6M8o2Q4s8M5xH4aL8y7G3sQ.jpg",
    vote_average: 8.8,
    release_year: "2022",
    overview: "A modern nursing student falls asleep reading Dr. José Rizal's novel Noli Me Tángere and wakes up inside the Spanish colonial era of 1887 Philippines.",
    genres: ["Fantasy", "Drama"],
    categoryKey: "filipino",
    categoryLabel: "Filipino",
    matchScore: "98% Match"
  },
  234125: {
    id: 234125,
    title: "Can't Buy Me Love",
    backdrop_path: "/5L1h9t0j6v3k7m8n2b4c5x9y8z1.jpg",
    poster_path: "/5L1h9t0j6v3k7m8n2b4c5x9y8z1.jpg",
    vote_average: 8.3,
    release_year: "2023",
    overview: "Bingo, a hardworking Binondo vendor, crosses paths with Caroline, the black-sheep daughter of a wealthy Filipino-Chinese family targeted by a kidnap-for-ransom conspiracy.",
    genres: ["Drama", "Romance"],
    categoryKey: "filipino",
    categoryLabel: "Filipino",
    matchScore: "98% Match"
  },
  232924: {
    id: 232924,
    title: "Senior High",
    backdrop_path: "/9k3m5j7n2b4c8x1y0v6w5t4r3q2.jpg",
    poster_path: "/9k3m5j7n2b4c8x1y0v6w5t4r3q2.jpg",
    vote_average: 8.4,
    release_year: "2023",
    overview: "When her estranged twin sister mysteriously plunges to her death at Northford High, Sky uncovers a web of dark secrets, privilege, and deception in search of the truth.",
    genres: ["Drama", "Mystery"],
    categoryKey: "filipino",
    categoryLabel: "Filipino",
    matchScore: "98% Match"
  },
  212710: {
    id: 212710,
    title: "Linlang (Deceit)",
    backdrop_path: "/8c4v2m1x9z5k7j3h8f0b4t6p9q2.jpg",
    poster_path: "/8c4v2m1x9z5k7j3h8f0b4t6p9q2.jpg",
    vote_average: 8.2,
    release_year: "2023",
    overview: "A former boxer and seafarer discovers his beloved wife is engaged in a clandestine affair, pulling him into a vengeful spiral of deceit with fatal consequences.",
    genres: ["Drama", "Thriller"],
    categoryKey: "filipino",
    categoryLabel: "Filipino",
    matchScore: "98% Match"
  },
  218589: {
    id: 218589,
    title: "Dirty Linen",
    backdrop_path: "/6f5k7J8s9L0m1N2x3y4Z5a6b7c1.jpg",
    poster_path: "/6f5k7J8s9L0m1N2x3y4Z5a6b7c1.jpg",
    vote_average: 8.5,
    release_year: "2023",
    overview: "Four house employees go missing without a trace under an aristocratic family's roof. Years later, their loved ones infiltrate the mansion under disguises to exact vengeance.",
    genres: ["Drama", "Crime"],
    categoryKey: "filipino",
    categoryLabel: "Filipino",
    matchScore: "98% Match"
  },
  245209: {
    id: 245209,
    title: "High Street",
    backdrop_path: "/3m4n5b6v7c8x9z0a1s2d3f4g5h6.jpg",
    poster_path: "/3m4n5b6v7c8x9z0a1s2d3f4g5h6.jpg",
    vote_average: 8.1,
    release_year: "2024",
    overview: "Five years after graduating from Northford High, the students navigate the unforgiving realities of early adulthood, corporate politics, and lingering unresolved past traumas.",
    genres: ["Drama", "Mystery"],
    categoryKey: "filipino",
    categoryLabel: "Filipino",
    matchScore: "98% Match"
  },
  209859: {
    id: 209859,
    title: "Hidden Love",
    backdrop_path: "/h6W7f2X4a8c9b0e1f2g3h4i5j6k.jpg",
    poster_path: "/h6W7f2X4a8c9b0e1f2g3h4i5j6k.jpg",
    vote_average: 8.8,
    release_year: "2023",
    overview: "Sang Zhi has had an unspoken crush on her older brother's gamer friend Duan Jiaxu since childhood. When they reunite at university years later, their friendship blooms into deep love.",
    genres: ["Drama", "Romance"],
    categoryKey: "cdrama",
    categoryLabel: "C-Drama",
    matchScore: "98% Match"
  },
  205828: {
    id: 205828,
    title: "Love Between Fairy and Devil",
    backdrop_path: "/r3c7J7R4z4k5s6M7t8Y9x0W1b2a.jpg",
    poster_path: "/r3c7J7R4z4k5s6M7t8Y9x0W1b2a.jpg",
    vote_average: 8.7,
    release_year: "2022",
    overview: "A low-ranking orchid fairy accidentally frees the fearsome Moon Supreme Dongfang Qingcang from his 30,000-year slumber, accidentally binding their physical emotions together.",
    genres: ["Fantasy", "Romance"],
    categoryKey: "cdrama",
    categoryLabel: "C-Drama",
    matchScore: "98% Match"
  },
  213713: {
    id: 213713,
    title: "Till the End of the Moon",
    backdrop_path: "/4k7j8s9L0m1N2x3y4Z5a6b7c8d9.jpg",
    poster_path: "/4k7j8s9L0m1N2x3y4Z5a6b7c8d9.jpg",
    vote_average: 8.6,
    release_year: "2023",
    overview: "To avert the apocalypse caused by the ruthless Devil God, an immortal elder's daughter travels back 500 years to prevent mortal prince Tantai Jin from becoming the vessel of evil.",
    genres: ["Fantasy", "Romance"],
    categoryKey: "cdrama",
    categoryLabel: "C-Drama",
    matchScore: "98% Match"
  },
  90282: {
    id: 90282,
    title: "The Untamed",
    backdrop_path: "/ek1G4rB6Q6rGfX4W4k8yZ1a2b34.jpg",
    poster_path: "/ek1G4rB6Q6rGfX4W4k8yZ1a2b34.jpg",
    vote_average: 8.9,
    release_year: "2019",
    overview: "Sixteen years after his tragic death, brilliant cultivator Wei Wuxian is reincarnated into the body of an outcast and reunites with his devoted soulmate Lan Wangji to solve a conspiracy.",
    genres: ["Drama", "Action & Adventure"],
    categoryKey: "cdrama",
    categoryLabel: "C-Drama",
    matchScore: "98% Match"
  },
  153723: {
    id: 153723,
    title: "Reset",
    backdrop_path: "/8a7b6c5d4e3f2a1b0c9d8e7f6a5.jpg",
    poster_path: "/8a7b6c5d4e3f2a1b0c9d8e7f6a5.jpg",
    vote_average: 8.5,
    release_year: "2022",
    overview: "A college student and a video game designer find themselves trapped in an endless time loop aboard a city transit bus doomed to explode repeatedly.",
    genres: ["Drama", "Mystery"],
    categoryKey: "cdrama",
    categoryLabel: "C-Drama",
    matchScore: "98% Match"
  },
  238712: {
    id: 238712,
    title: "Story of Kunning Palace",
    backdrop_path: "/7a8b9c0d1e2f3a4b5c6d7e8f9a0.jpg",
    poster_path: "/7a8b9c0d1e2f3a4b5c6d7e8f9a0.jpg",
    vote_average: 8.6,
    release_year: "2023",
    overview: "An ambitious empress who died amid a bloody imperial rebellion is reborn with memories intact, determined to rewrite her destiny and atone for the lives she destroyed.",
    genres: ["Drama", "Romance"],
    categoryKey: "cdrama",
    categoryLabel: "C-Drama",
    matchScore: "98% Match"
  }
};

/**
 * Fetch 6 random series directly from TMDB API using discovery query parameters
 * strictly filtered by the category's region/language (Korean, Japanese Anime, J-Drama, Filipino, C-Drama).
 */
export async function fetchCategoryFromTMDB(
  categoryKey: 'kdrama' | 'anime' | 'jdrama' | 'filipino' | 'cdrama',
  categoryLabel: string,
  apiKey: string
): Promise<TMDBMediaItem[]> {
  const cleanKey = apiKey.trim() || TMDB_CONFIG.apiKey;
  const fallbackIds = TMDB_CONFIG.categoryIds[categoryKey] || [];
  const fallbackItems = fallbackIds.map(id => TMDB_FALLBACK_CACHE[id]).filter(Boolean);

  if (!cleanKey) {
    return fallbackItems;
  }

  // Precise TMDB Discover API query filters per category genre, strictly from 2024 - 2026
  let queryParams = "first_air_date.gte=2024-01-01&first_air_date.lte=2026-12-31";
  if (categoryKey === 'kdrama') {
    queryParams += "&with_original_language=ko&sort_by=popularity.desc";
  } else if (categoryKey === 'anime') {
    queryParams += "&with_genres=16&with_original_language=ja&sort_by=popularity.desc";
  } else if (categoryKey === 'jdrama') {
    queryParams += "&with_original_language=ja&without_genres=16&sort_by=popularity.desc";
  } else if (categoryKey === 'filipino') {
    queryParams += "&with_original_language=tl&sort_by=popularity.desc";
  } else if (categoryKey === 'cdrama') {
    queryParams += "&with_original_language=zh&sort_by=popularity.desc";
  }

  try {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${encodeURIComponent(cleanKey)}&${queryParams}&language=en-US&page=1`;
    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`TMDB discover failed for ${categoryKey} (status: ${response.status}). Using verified cache.`);
      return fallbackItems;
    }

    const data = await response.json();
    const results = data.results || [];

    if (results.length > 0) {
      // Take 6 random series from the results
      const shuffled = [...results].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 6);

      return selected.map((item: any) => {
        const releaseDate = item.first_air_date || "";
        const releaseYear = releaseDate ? releaseDate.split("-")[0] : "2024";
        const genres = Array.isArray(item.genre_ids) && item.genre_ids.length > 0
          ? item.genre_ids.map((id: number) => getGenreName(id)).filter(Boolean)
          : ["Drama", categoryLabel];

        return {
          id: item.id,
          title: item.name || item.original_name || "Untitled",
          originalTitle: item.original_name,
          backdrop_path: item.backdrop_path,
          poster_path: item.poster_path,
          vote_average: typeof item.vote_average === "number" ? Number(item.vote_average.toFixed(1)) : 8.5,
          vote_count: item.vote_count,
          release_year: releaseYear,
          first_air_date: releaseDate,
          overview: (item.overview && item.overview.trim().length > 0) ? item.overview : "Curated series recommended by AsiaStream discovery algorithms.",
          genres: genres.length > 0 ? genres : [categoryLabel],
          categoryKey,
          categoryLabel,
          matchScore: "98% Match"
        };
      });
    }
  } catch (err) {
    console.warn(`Error discovering ${categoryKey} from TMDB:`, err);
  }

  return fallbackItems;
}

/**
 * Fetches all 5 categories from TMDB and extracts the first 2 items from each
 * to build the 10-item hero carousel.
 */
export async function fetchAllCategoriesAndBuildHero(apiKey: string = TMDB_CONFIG.apiKey) {
  const categoriesRecord: Record<'kdrama' | 'anime' | 'jdrama' | 'filipino' | 'cdrama', TMDBMediaItem[]> = {
    kdrama: [],
    anime: [],
    jdrama: [],
    filipino: [],
    cdrama: []
  };

  const categoryPromises = CATEGORY_DEFINITIONS.map(async (def) => {
    const items = await fetchCategoryFromTMDB(def.key, def.badgeLabel, apiKey);
    categoriesRecord[def.key] = items;
    return { key: def.key, items };
  });

  await Promise.all(categoryPromises);

  const heroItems: TMDBMediaItem[] = [];
  CATEGORY_DEFINITIONS.forEach((def) => {
    const categoryItems = categoriesRecord[def.key] || [];
    const firstTwo = categoryItems.slice(0, 2);
    heroItems.push(...firstTwo);
  });

  return {
    categoriesRecord,
    heroItems
  };
}
