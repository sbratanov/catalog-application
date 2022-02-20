import { createAction, props } from "@ngrx/store";
import { CatalogItemBase } from "src/app/models/CatalogItemBase.model";

export const fetchPage = createAction(
  "[Data] Fetch page",
  props<{ page: number }>()
);
export const fetchPageSucceeded = createAction(
  "[Data] Fetch page succeeded",
  props<{ content: CatalogItemBase[]; page: number; totalPages: number }>()
);
export const fetchPageFailed = createAction(
  "[Data] Fetch page succeeded",
  props<{ error: Error }>()
);
