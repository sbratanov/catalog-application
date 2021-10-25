import { NgModule } from "@angular/core";
import { CatalogComponent } from "./catalog.component";
import { TableComponent } from "./particles/table/table.component";
import { PaginatorComponent } from "./particles/paginator/paginator.component";
import { CatalogStateModule } from "./state/catalog.state.module";
import { CommonModule } from "@angular/common";
import { ReactiveComponentModule } from "@ngrx/component";
import { CatalogEffects } from "./state/catalog.effects";

@NgModule({
  declarations: [CatalogComponent, TableComponent, PaginatorComponent],
  imports: [CatalogStateModule, CommonModule, ReactiveComponentModule],
  exports: [CatalogComponent],
  providers: [CatalogEffects],
})
export class CatalogModule {}
