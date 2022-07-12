import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSpinnerComponent } from './components/app-spinner/app-spinner.component';
import { SwapiFilmsService } from './services/swapi-films-service.service';

@NgModule({
  declarations: [AppComponent, AppSpinnerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpClientModule, SwapiFilmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
