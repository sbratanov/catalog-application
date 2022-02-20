import { createReducer, on } from "@ngrx/store";
import { fetchDetailSucceeded } from "./detail.actions";

export interface DetailState {
  id: number;
  name: string;
  value: string;
}

const initialState: DetailState = { id: 0, name: '', value: ''};

export const detailReducer = createReducer<DetailState>(
  initialState,
  on(fetchDetailSucceeded, (state, action) => ({
    id: action.id,
    name: action.name,
    value: action.value,
  }))
);
