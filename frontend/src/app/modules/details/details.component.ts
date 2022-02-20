import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { CatalogItemBase } from "src/app/models/CatalogItemBase.model";
import { fetchDetail } from "./state/detail.actions";
import { selectData } from "./state/selectors";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnDestroy {
  content$ = this.store.select(selectData);
  data!: CatalogItemBase;
  
  detailForm: FormGroup = new FormGroup({
    id: new FormControl(0, Validators.required),
    name: new FormControl(null, Validators.required),
    value: new FormControl(null, Validators.required),
    variant_1: new FormControl(true),
    variant_2: new FormControl(false),
    variant_3: new FormControl(false)
  })

  private subscriptions: Subscription = new Subscription();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchPage({ id: parseInt(this.route.snapshot.paramMap.get('id') || '') });
    const dataSubscription = this.content$.subscribe(value=>{
      this.data = value;
      this.detailForm.patchValue(this.data);
    })
    this.subscriptions.add(dataSubscription);
  }

  fetchPage(event: { id: number }) {
    this.store.dispatch(fetchDetail(event));
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}
