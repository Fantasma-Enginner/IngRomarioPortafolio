import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapAndContacComponent } from './components/map-and-contac/map-and-contac.component';
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';
import { PortafolioSectionComponent } from './components/portafolio-section/portafolio-section.component';
import { InfContainerComponent } from './components/inf-container/inf-container.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, HeaderComponent, FooterComponent, MapAndContacComponent, ResumeSectionComponent, PortafolioSectionComponent, InfContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA_L8FME7bEb35_5Ea6faYBYeez3x2ENjk",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
