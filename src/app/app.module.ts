import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './modules/header/header.component';
import { HeaderPromoComponent } from './modules/header-promo/header-promo.component';
import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
import { NewsletterComponent } from './modules/newsletter/newsletter.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPromoComponent,
    HeaderMobileComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
