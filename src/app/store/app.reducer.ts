import { ActionReducerMap } from '@ngrx/store';
import {  counterReducer  } from './weather/weather.reducer';
import { WeatherResults } from "../models/Weather";

export interface AppState {
  weather:WeatherResults;
}

export const appReducers: ActionReducerMap<AppState> = {
   weather:counterReducer,
}
