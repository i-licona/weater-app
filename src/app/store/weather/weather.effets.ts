import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { WeatherService } from 'src/app/services/weather.service';
import { getWeather, setErrorResult } from './weather.actions';
import { setWeatherResults } from './weather.actions';

@Injectable()
export class WeatherEffects{
  /**
   *
   */
  constructor(
    private actions$:Actions,
    private service:WeatherService
  ) { }

  getWeather$ = createEffect(
    () => this.actions$.pipe(
      ofType( getWeather ),
      tap( data => console.log('effect tap', data)),
      mergeMap(
        ({ search }) => this.service.getWeather(search).pipe(
          map( (weather )=> setWeatherResults({ weather:weather })
        ),
        catchError((err:Error) => of( setErrorResult({ error:err.message })))),
    )
    )
  );
}