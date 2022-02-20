import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CatalogItemBase } from "src/app/models/CatalogItemBase.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent{
  @Input() content: CatalogItemBase[] = [];

  constructor() {}
}
