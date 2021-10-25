import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { catalogReducer } from "./catalog.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CatalogEffects } from "./catalog.effects";

@NgModule({
  imports: [
    StoreModule.forFeature("CATALOG", catalogReducer),
    EffectsModule.forFeature([CatalogEffects]),
  ],
})
export class CatalogStateModule {}
