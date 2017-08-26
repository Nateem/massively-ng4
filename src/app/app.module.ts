import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {routing} from './app.routes';
import {TestdataService} from './testdata.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenericComponent } from './generic/generic.component';
import { ElementsComponent } from './elements/elements.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenericComponent,
    ElementsComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    IntroComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    TestdataService
  ],
  entryComponents:[
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
