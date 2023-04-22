export interface PageData {
  id: number;
  attributes: {
    Content: string;
    Slug: string;
    Description: string;
    Title: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface ProductCategory {
  id?: number;
  attributes: {
    Name: string;
    Description: string;
    imageURL: string;
    Slug: string;
  };
}

export interface ProductCategoryState extends ProductCategory {
  checked: boolean;
}

export interface ProductCategoryWithChildren extends ProductCategory {
  children: ProductCategoryWithChildren[];
  level: number;
}

export interface PricingEntity {
  id: number;
  BasePrice: number;
  DisplayTitle: string;
  Description: string;
  MeasurementUnit: string;
  Details?: DetailsEntity[] | null;
  Bonuses?: BonusesEntity[] | null;
}
export interface DetailsEntity {
  id: number;
  Point: string;
}
export interface BonusesEntity {
  id: number;
  Point?: null;
}

export interface Meta {
  pagination: Pagination;
}
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

///

export interface Products {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    pricing: PricingEntity[];
  };
}

export interface Article {
  createdAt?: Date;
  updatedAt?: Date;
  Title?: string;
  imageURL?: string;
  Description?: string;
  Featured?: boolean;
  Slug?: string;
}
