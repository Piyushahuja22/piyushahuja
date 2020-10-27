import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { IntroComponent } from './home/intro/intro.component';
import { AboutMeDetailsComponent } from './shared/about-me-details/about-me-details.component';
import { MyWorksComponent } from './shared/my-works/my-works.component';
import { MyServicesComponent } from './shared/my-services/my-services.component';
import { WorksComponent } from './works/works.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './shared/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    TestimonialComponent,
    IntroComponent,
    AboutMeDetailsComponent,
    MyWorksComponent,
    MyServicesComponent,
    WorksComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
