import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NasaApi} from "./model/nasa-api";

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly API_KEY = 'EPb28HmsN0sXPyq2mj0nrwQFBj17dgjOXbCTgV8q';
  private readonly API_URL = `https://api.nasa.gov/planetary/apod?api_key=`;

  constructor(private http: HttpClient) { }

  getDataFromNasaAPI = (): Observable<NasaApi> => {
    return this.http.get<NasaApi>(`${this.API_URL}${this.API_KEY}`);
}
}
