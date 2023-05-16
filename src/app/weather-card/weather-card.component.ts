import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { OnInit } from '@angular/core';
import { WeatherResults } from '../models/Weather';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  public weather:WeatherResults = {
    name:null,
    country:null,
    temp_c:null,
    condition:{
      icon:'',
      text:'',
      code:null
    },
    loading:false,
    success:false,
    error:null
  };
  public errorMessage:string = 'The city was not found';

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('weather').subscribe((data) =>{
      this.weather = data;
    })
  }
}
