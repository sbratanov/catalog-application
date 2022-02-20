import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { DetailsComponent } from "./modules/details/details.component";
import { RouterModule } from "@angular/router";
import { CatalogComponent } from "./modules/catalog/catalog.component";
import { EffectsModule } from "@ngrx/effects";
import { CatalogModule } from "./modules/catalog/catalog.module";
import { DetailsModule } from "./modules/details/details.module";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: "catalog", component: CatalogComponent },
      { path: "details/:id", component: DetailsComponent },
      { path: "**", redirectTo: "/catalog" },
    ]),

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    CatalogModule,
    DetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
