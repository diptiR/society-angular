import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getMembers(): Observable<any> {
    return this.httpClient.get("../../api/members.json");
  }
}
