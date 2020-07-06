import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommunicatorService {

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get<Headers>('./assets/data.json');
  }
}
