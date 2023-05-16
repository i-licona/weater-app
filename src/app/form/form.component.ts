import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { AppState } from '../store/app.reducer';
import { getWeather } from '../store/weather/weather.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public form:FormGroup;
  constructor( 
    private fb:FormBuilder,
    private store:Store<AppState>
  ){
    this.form = this.fb.group({
      search:[ '', Validators.required ]
    });
  }

  getResult(){
    const search = this.form.value.search;
    this.store.dispatch( getWeather({ search: search }) );
  }
}
