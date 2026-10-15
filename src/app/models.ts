// Tekst në dy gjuhë. Nëse mungon anglishtja, shfaqet shqipja.
export interface Localized {
  sq: string;
  en?: string;
}

export interface Category {
  slug: string; // emri në adresë, p.sh. 'plehra' → /products/plehra
  name: Localized;
  description: Localized;
  image?: string;
}

export interface Product {
  id: string; // emri në adresë
  category: string; // slug-u i kategorisë
  name: string; // emri i produktit zakonisht s'përkthehet (p.sh. NPK 15-15-15)
  shortDescription: Localized;
  description: Localized;
  usage?: Localized;
  packaging?: string[];
  image?: string;
}