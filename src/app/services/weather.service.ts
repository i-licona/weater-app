import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GenericResponse } from '../models/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient ) { }

  getWeather(search:string):Observable<any>{
    return this.http.get<GenericResponse>(`https://api.weatherapi.com/v1/current.json?key=d9d790498ea94da3b83140535231605&q=${ search }&aqi=no`).pipe(
      map( (resp) => {
        const { location:{ name, country }, current:{ condition, temp_c }  } = resp;
        return {
          name,
          country,
          condition,
          temp_c
        }
      })
    );
  }
}
