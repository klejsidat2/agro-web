import { Category, Product } from '../models';

// ⚠️ TË DHËNA SHEMBULL — do i zëvendësojmë me produktet e vërteta të Flovis

export const CATEGORIES: Category[] = [
  {
    slug: 'plehra',
    name: { sq: 'Plehra', en: 'Fertilizers' },
    description: {
      sq: 'Plehra kimikë dhe organikë për çdo kulturë.',
      en: 'Chemical and organic fertilizers for every crop.',
    },
  },
  {
    slug: 'fara',
    name: { sq: 'Fara', en: 'Seeds' },
    description: {
      sq: 'Fara perimesh, drithërash dhe foragjeresh.',
      en: 'Vegetable, cereal and forage seeds.',
    },
  },
  {
    slug: 'mbrojtje-bimesh',
    name: { sq: 'Mbrojtje bimësh', en: 'Crop protection' },
    description: {
      sq: 'Insekticide, fungicide dhe herbicide.',
      en: 'Insecticides, fungicides and herbicides.',
    },
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'npk-15-15-15',
    category: 'plehra',
    name: 'NPK 15-15-15',
    shortDescription: {
      sq: 'Pleh kompleks për plehërim bazë.',
      en: 'Compound fertilizer for base dressing.',
    },
    description: {
      sq: 'Pleh granular me azot, fosfor dhe kalium në sasi të barabarta.',
      en: 'Granular fertilizer with equal parts nitrogen, phosphorus and potassium.',
    },
    usage: {
      sq: 'Përdoret para mbjelljes. Për dozën e saktë pyesni agronomin tonë.',
      en: 'Apply before planting. Ask our agronomist for the right dose.',
    },
    packaging: ['25 kg', '50 kg'],
  },
  {
    id: 'ure-46',
    category: 'plehra',
    name: 'Ure 46%',
    shortDescription: {
      sq: 'Pleh azotik për rritje të shpejtë.',
      en: 'Nitrogen fertilizer for fast growth.',
    },
    description: {
      sq: 'Burim i shpejtë azoti, përdoret gjatë sezonit të rritjes.',
      en: 'A fast source of nitrogen, used during the growing season.',
    },
    packaging: ['50 kg'],
  },
  {
    id: 'fare-domateje',
    category: 'fara',
    name: 'Farë domateje',
    shortDescription: {
      sq: 'Domate hibride për serra.',
      en: 'Hybrid tomato for greenhouses.',
    },
    description: {
      sq: 'Variet me rendiment të lartë dhe fruta të forta.',
      en: 'A high-yield variety with firm fruit.',
    },
    packaging: ['500 farë', '1000 farë'],
  },
  {
    id: 'fungicid-bakri',
    category: 'mbrojtje-bimesh',
    name: 'Fungicid me bazë bakri',
    shortDescription: {
      sq: 'Mbrojtje nga vrugu.',
      en: 'Protection against blight.',
    },
    description: {
      sq: 'Fungicid kontakti për parandalimin e vrugut te domatja, patatja dhe vreshti.',
      en: 'Contact fungicide that prevents blight in tomatoes, potatoes and vineyards.',
    },
    usage: {
      sq: 'Lexoni etiketën para përdorimit. Për këshillë, na kontaktoni.',
      en: 'Read the label before use. Contact us for advice.',
    },
    packaging: ['1 kg', '5 kg'],
  },
];