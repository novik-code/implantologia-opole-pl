export type Category =
  | 'implanty-podstawy'
  | 'all-on-x'
  | 'augmentacja-kosci'
  | 'cena-i-koszt'
  | 'po-zabiegu'
  | 'trudne-przypadki'
  | 'lokalne-opole';

export const categoryMeta: Record<Category, {
  label: string;
  shortDescription: string;
  description: string;
}> = {
  'implanty-podstawy': {
    label: 'Implanty — podstawy',
    shortDescription: 'Czym są implanty zębów',
    description: 'Artykuły wprowadzające o implantologii — wskazania, materiały (Straumann, Nobel), tytan vs cyrkon, etapy leczenia.',
  },
  'all-on-x': {
    label: 'All-on-4 / All-on-6',
    shortDescription: 'Stała proteza na implantach',
    description: 'Implantologia pełnego łuku — all-on-4, all-on-6, zygomatic. Dla pacjentów z bezzębiem.',
  },
  'augmentacja-kosci': {
    label: 'Augmentacja kości',
    shortDescription: 'Odbudowa kości przed implantem',
    description: 'Sinus lift (otwarty, zamknięty), augmentacja blokowa, regeneracja sterowana (GBR), Bio-Oss, auto-graft.',
  },
  'cena-i-koszt': {
    label: 'Cena i koszt',
    shortDescription: 'Ile kosztują implanty 2026',
    description: 'Cennik implantologii Opole — implanty Straumann, all-on-4, sinus lift, raty, refundacja.',
  },
  'po-zabiegu': {
    label: 'Po zabiegu',
    shortDescription: 'Opieka i powikłania',
    description: 'Co po implantacji — gojenie, opieka, dieta, periimplantitis, długoterminowa pielęgnacja.',
  },
  'trudne-przypadki': {
    label: 'Trudne przypadki',
    shortDescription: 'Brak kości, periimplantitis, niepowodzenia',
    description: 'Implantologia w trudnych przypadkach — drastyczny zanik kości, implanty zygomatyczne, pacjenci po onkologii.',
  },
  'lokalne-opole': {
    label: 'Lokalne · Opole',
    shortDescription: 'Implantologia w Opolu',
    description: 'Artykuły z perspektywy lokalnej — jak wybrać implantologa w Opolu, ceny w regionie, dental tourism z DACH.',
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
}
