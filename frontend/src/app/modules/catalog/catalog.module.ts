import { NgModule } from "@angular/core";
import { CatalogComponent } from "./catalog.component";
import { TableComponent } from "./components/table/table.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { CatalogStateModule } from "./state/catalog.state.module";
import { CommonModule } from "@angular/common";
import { ReactiveComponentModule } from "@ngrx/component";
import { CatalogEffects } from "./state/catalog.effects";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CatalogComponent, TableComponent, PaginatorComponent],
  imports: [CatalogStateModule, CommonModule, ReactiveComponentModule, RouterModule],
  exports: [CatalogComponent],
  providers: [CatalogEffects],
})
export class CatalogModule {}
