import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarsComponent } from './nav-bars/nav-bars.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarsComponent,
    CardContainerComponent,
    CardComponent,
    ContentViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
