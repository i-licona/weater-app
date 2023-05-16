import { createReducer, on } from '@ngrx/store';
import { getWeather, setErrorResult, setWeatherResults } from './weather.actions';
import { WeatherResults, Condition } from 'src/app/models/Weather';

export const weatherState:WeatherResults ={
  name:null,
  country:null,
  temp_c:null,
  condition:{
    code:null,
    icon:null,
    text:null
  },
  loading:false,
  success:false,
  error:null
};

export const counterReducer = createReducer(
  weatherState,
  on(getWeather, (state) => ({ ...state, loading:true, error:null })),
  on(setWeatherResults, (state, {weather}) => ({
    ...state,
    name:weather.name,
    country:weather.country,
    temp_c:weather.temp_c,
    condition:weather.condition,
    loading:false,
    success:true,
    error:null,
  })),
  on(setErrorResult, (state, { error }) => ({
    ...state,
    name:null,
    country:null,
    temp_c:null,
    condition:{
      code:null,
      icon:null,
      text:null
    },
    loading:false,
    success:false,
    error:error
  })),
);