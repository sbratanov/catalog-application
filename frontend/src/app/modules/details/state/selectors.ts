import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DetailState } from "./detail.reducer";

const selectDetail = createFeatureSelector<DetailState>("DETAIL");

export const selectData = createSelector(
  selectDetail,
  (state) => state
);
