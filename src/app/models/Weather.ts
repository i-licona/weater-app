export interface WeatherResults{
  name:string|null;
  country:string|null;
  temp_c:string|null;
  condition:Condition;
  loading:boolean;
  success:boolean;
  error:string|null;
}

export interface Condition{
  text:string|null;
  icon:string|null;
  code:number|null;
}
