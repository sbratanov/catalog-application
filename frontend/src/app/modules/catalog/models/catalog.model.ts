import { CatalogItemBase } from "src/app/models/CatalogItemBase.model";

export interface CatalogList {
  content: CatalogItemBase[];
  page: number;
  totalPages: number;
}
