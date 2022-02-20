import { createAction, props } from "@ngrx/store";

export const fetchDetail = createAction(
  "[Detail] Fetch detail",
  props<{ id: number }>()
);
export const fetchDetailSucceeded = createAction(
  "[Detail] Fetch detail succeeded",
  props<{ id: number; name: string; value: string }>()
);
export const fetchDetailFailed = createAction(
  "[Detail] Fetch detail succeeded",
  props<{ error: Error }>()
);
