export type CaseCategory = 'SEO/GEO' | 'Research' | 'Visuals' | 'UI' | 'Reporting';

export type CaseItem = {
  id: string;
  title: string;
  category: CaseCategory;
  description: string;
  brief: string;
  problem: string;
  process: string;
  output: string;
  tools: string[];
  coverImage?: string;
  coverFallbackClass?: string;
  coverFit?: 'cover' | 'contain';
  coverPosition?: string;
  visualType: 'research' | 'visual' | 'report' | 'ui' | 'seo';
};
