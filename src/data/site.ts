// Centralna konfiguracja brandu — implantologia.opole.pl
// DRUGI FILAR LOKALNY: implantologia stomatologiczna Opole

export const site = {
  url: 'https://implantologia.opole.pl',
  title: 'Implantologia Opole — implanty zębów premium, dr Marcin Nowosielski',
  shortTitle: 'Implantologia Opole',
  description:
    'Implantologia stomatologiczna w Opolu — implanty zębów, all-on-4, all-on-6, sinus lift, augmentacja kości. Sygnowane przez lek. dent. Marcina Nowosielskiego, M.Sc. RWTH Aachen, autora książki „Własny gabinet" (Czelej 2024). Przyjmowanie w klinice Mikrostomart Opole.',
  ogImage: '/og-default.png',
  locale: 'pl-PL',
  // Autor wszystkich treści — Marcin Nowosielski (kanoniczny ID na nowosielski.pl)
  // Ta sama tożsamość co FILAR 1, 2 i implant.opole.pl
  // Google łączy E-E-A-T pomiędzy stronami przez wspólny @id Physician.
  author: {
    name: 'Marcin Nowosielski',
    honorificPrefix: 'lek. dent.',
    honorificSuffix: 'M.Sc.',
    canonicalUrl: 'https://nowosielski.pl',
    canonicalId: 'https://nowosielski.pl/#person',
    jobTitle: 'Lekarz dentysta, implantolog, M.Sc. RWTH Aachen',
    image: '/dr-marcin.webp',
    email: 'kontakt@nowosielski.pl',
  },
  // Klinika konwersji — wszystkie CTA prowadzą tutaj
  // NAP musi być IDENTYCZNE we wszystkich miejscach online
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Klinika Stomatologii Premium',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    implantPageUrl: 'https://mikrostomart.pl/oferta/implantologia',
    implantLandingUrl: 'https://mikrostomart.pl/implanty-opole',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    phone: '+48 570 270 470',
    phoneAlt: '+48 570 810 800',
    phoneHref: 'tel:+48570270470',
    email: 'gabinet@mikrostomart.pl',
    address: {
      street: 'ul. Centralna 33a',
      city: 'Opole',
      region: 'opolskie',
      postalCode: '45-940',
      country: 'PL',
    },
    geo: {
      latitude: 50.6751,
      longitude: 17.9213,
    },
    openingHours: [
      { day: 'Monday', opens: '09:00', closes: '20:00' },
      { day: 'Tuesday', opens: '09:00', closes: '20:00' },
      { day: 'Wednesday', opens: '09:00', closes: '20:00' },
      { day: 'Thursday', opens: '09:00', closes: '20:00' },
      { day: 'Friday', opens: '09:00', closes: '16:00' },
    ],
    // GBP — Google Business Profile (verified)
    gbpUrl: 'https://share.google/uqFxAL4vtBaH3ATbg',
    sameAs: [
      'https://share.google/uqFxAL4vtBaH3ATbg',
      'https://www.znanylekarz.pl/placowki/gabinet-mikrostomart-2',
      'https://www.facebook.com/mikrostomart',
      'https://www.instagram.com/mikrostomart_opole/',
    ],
  },
  // SEO — najważniejsze frazy lokalne
  keywords: [
    'implantologia Opole',
    'implanty Opole',
    'implanty zębów Opole',
    'implant zęba Opole',
    'all-on-4 Opole',
    'all-on-6 Opole',
    'implantolog Opole',
    'sinus lift Opole',
  ],
};

export const nav = [
  { label: 'Implanty', href: '/implanty-zebowe-opole' },
  { label: 'All-on-4', href: '/all-on-4-opole' },
  { label: 'All-on-6', href: '/all-on-6-opole' },
  { label: 'Sinus lift', href: '/sinus-lift-opole' },
  { label: 'Cennik', href: '/cennik-implantologii-opole' },
  { label: 'Klinika', href: '/klinika-implantologii-opole' },
  { label: 'Blog', href: '/blog' },
  { label: 'O autorze', href: '/o-autorze' },
];
