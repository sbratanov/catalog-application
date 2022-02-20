import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DetailsComponent } from "./details.component";
import { DetailEffects } from "./state/detail.effects";
import { DetailStateModule } from "./state/detail.state.module";

@NgModule({
  declarations: [DetailsComponent],
  imports: [DetailStateModule, ReactiveFormsModule, FormsModule],
  exports: [DetailsComponent],
  providers: [DetailEffects]
})
export class DetailsModule {}
