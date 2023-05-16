import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { appReducers } from './store/app.reducer';
import { AppEffects } from './store/app.effets';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(AppEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
