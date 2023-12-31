export interface guardianNewsType {
  id: string;
  sectionName?: string;
  webTitle: string;
  webUrl?: string;
  fields: {
    trailText: string;
    thumbnail: string;
    body?: string;
    bodyText?: string;
    headling?: string;
  }
  webPublicationDate?: string;
  params?: string;
  tags?: {
    firstName: string;
    lastName: string;
  }[];
}


// news api types, used before i swtiched to guardian news, might try out the other or mix them both at a later update
export interface newsType {
  source: {
    id: string;
    name: string;
  };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt?: string | undefined;
  content?: string;
  params?: string;
}

export type NewsItem = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
  }
  

  // not using these, but keeping them for future use, to when i update this project
  export type Pagination = {
    count: number;
    limit: number;
    offset: number;
    total: number;
  }
  
  export type DummyNewsResponse = {
    pagination: Pagination;
    data: NewsItem[];
}
  
export interface NavItemProps {
  title: string;
  path: string;
  id: number;
  img: StaticImageData;
  i: number;
  closeMobileMenu: () => void;
}