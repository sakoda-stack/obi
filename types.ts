
export interface Resource {
  id: string;
  title: string;
  category: 'catalog' | 'manual' | 'form' | 'pricing';
  updatedAt: string;
  url: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  badge?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Partner {
  name: string;
  logo: string;
  description: string;
  benefits: string[];
}
