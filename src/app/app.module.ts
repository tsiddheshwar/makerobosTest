import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarsComponent } from './nav-bars/nav-bars.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';
import { TrainYourBotComponent } from './train-your-bot/train-your-bot.component';
import { IntentsComponent } from './intents/intents.component';
import { CatchAllComponent } from './catch-all/catch-all.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { IntentCardComponent } from './intent-card/intent-card.component';
import { IntentComponent } from './intent/intent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarsComponent,
    CardContainerComponent,
    CardComponent,
    ContentViewerComponent,
    TrainYourBotComponent,
    IntentsComponent,
    CatchAllComponent,
    AnalyticsComponent,
    IntentCardComponent,
    IntentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
