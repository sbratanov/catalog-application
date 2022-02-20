import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogItemBase } from 'src/app/models/CatalogItemBase.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getData(id: number): Observable<CatalogItemBase> {
    const params = new HttpParams().set("id", id);

    return this.http.get("/api/data/select", { params }) as Observable<CatalogItemBase>;
  }
}
