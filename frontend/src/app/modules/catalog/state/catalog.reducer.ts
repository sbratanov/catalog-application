import { createReducer, on } from "@ngrx/store";
import { CatalogItemBase } from "src/app/models/CatalogItemBase.model";
import { fetchPageSucceeded } from "./catalog.actions";

export interface CatalogState {
  content: CatalogItemBase[];
  page: number;
  totalPages: number;
}

const initialState: CatalogState = { content: [], page: 0, totalPages: 0 };

export const catalogReducer = createReducer<CatalogState>(
  initialState,
  on(fetchPageSucceeded, (state, action) => ({
    content: action.content,
    page: action.page,
    totalPages: action.totalPages,
  }))
);
