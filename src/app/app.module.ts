import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { StoryComponent } from './components/story/story.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ErrorComponent,
    StoryComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
