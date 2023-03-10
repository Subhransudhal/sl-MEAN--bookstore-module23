import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from 'src/auth/auth.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
