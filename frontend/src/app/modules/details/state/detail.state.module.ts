import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { detailReducer } from "./detail.reducer";
import { EffectsModule } from "@ngrx/effects";
import { DetailEffects } from "./detail.effects";

@NgModule({
  imports: [
    StoreModule.forFeature("DETAIL", detailReducer),
    EffectsModule.forFeature([DetailEffects]),
  ],
})
export class DetailStateModule {}
