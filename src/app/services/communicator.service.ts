import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CommunicatorService {

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get<Headers>(environment.urlFather + "/assets/data.json");
  }
}
