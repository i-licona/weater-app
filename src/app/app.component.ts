import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public error:string|null = null;
  constructor( private store:Store<AppState> ){}
  
  ngOnInit(): void {
    this.store.select('weather').subscribe(({ error }) =>{
      this.error = error;
    });
  }
}
