import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MulgoreComponent } from './mulgore/mulgore.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, MulgoreComponent],
  imports: [
    AppRoutingModule
    // BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MulgoreAppModule {}
