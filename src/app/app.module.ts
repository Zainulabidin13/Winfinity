import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { FootorComponent } from './footor/footor.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KategoriComponent } from './kategori/kategori.component';
import { OturumEndComponent } from './oturum-end/oturum-end.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { SepetComponent } from './sepet/sepet.component';
import { TermsOtherComponent } from './terms-other/terms-other.component';
import { TextIcerikComponent } from './text-icerik/text-icerik.component';
import { UrunIcComponent } from './urun-ic/urun-ic.component';
import { UrunIc2Component } from './urun-ic2/urun-ic2.component';
import { WinfinityTermOtherComponent } from './winfinity-term-other/winfinity-term-other.component';
import { YeniSayfaComponent } from './yeni-sayfa/yeni-sayfa.component';
import { YeniSayfa2Component } from './yeni-sayfa2/yeni-sayfa2.component';
import { FilterCloseComponent } from './filter-close/filter-close.component';
import {MatStepperModule, MatStepLabel, MatStep} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FootorComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    KategoriComponent,
    OturumEndComponent,
    LoginFormComponent,
    RegisterComponent,
    Register2Component,
    Register3Component,
    SepetComponent,
    TermsOtherComponent,
    TextIcerikComponent,
    UrunIcComponent,
    UrunIc2Component,
    WinfinityTermOtherComponent,
    YeniSayfaComponent,
    YeniSayfa2Component,
    FilterCloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatStep
    // NoopAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
