import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CatalogList } from "../models/catalog.model";

@Injectable({
  providedIn: "root",
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getData(page: number): Observable<CatalogList> {
    const params = new HttpParams().set("page", page);

    return this.http.get("/api/data", { params }) as Observable<CatalogList>;
  }
}
