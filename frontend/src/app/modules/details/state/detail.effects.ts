import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import { ContentService } from "../services/content.service";
import {
  fetchDetail,
  fetchDetailFailed,
  fetchDetailSucceeded
} from "./detail.actions";

@Injectable()
export class DetailEffects {
  public fetchPage$ = createEffect(() =>
    this.actions.pipe(
      ofType(fetchDetail),
      concatMap(({ id }) => this.provider.getData(id)),
      map((data) => fetchDetailSucceeded(data)),
      catchError((error: Error) => of(fetchDetailFailed({ error })))
    )
  );

  constructor(private actions: Actions, private provider: ContentService) {}
}
