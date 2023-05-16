import { createAction, props } from '@ngrx/store';
import { WeatherResults } from 'src/app/models/Weather';

export const getWeather = createAction(
  '[Weather Component] get weather',
  props<{search:string}>()
);

export const setWeatherResults = createAction(
  '[Weather Component] set weather results',
  props<{weather:WeatherResults }>()
);

export const setErrorResult = createAction(
  '[Weather Component] set error results',
  props<{error:string }>()
);

