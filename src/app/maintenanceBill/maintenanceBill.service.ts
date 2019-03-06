import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MaintenanceBillService {
  url: string = "../../api/maintenance.json";

  constructor(private http: HttpClient) {}

  getMaintenance(roomNumber: string): Observable<any> {
    return this.http.get(this.url);
  }
}
