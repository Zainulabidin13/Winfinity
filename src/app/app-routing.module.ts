import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KategoriComponent } from './kategori/kategori.component';
import { OturumEndComponent } from './oturum-end/oturum-end.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { registerLocaleData } from '@angular/common';
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


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'page-not-found',component:PageNotFoundComponent
  },
  {
    path:'kategori',component:KategoriComponent
  },
  {
    path:'oturum-end',component:OturumEndComponent
  },
  {
    path:'login',component:LoginFormComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'register2',component:Register2Component
  },
  {
    path:'register3',component:Register3Component
  },
  {
    path:'sepet',component:SepetComponent
  },
  {
    path:'terms-other',component:TermsOtherComponent
  },
  {
    path:'text-icerik',component:TextIcerikComponent
  },
  {
    path:'urun-ic',component:UrunIcComponent
  },
  {
    path:'urun-ic2',component:UrunIc2Component
  },
  {
    path:'yeni-sayfa',component:YeniSayfaComponent
  },
  {
    path:'yeni-sayfa2',component:YeniSayfa2Component
  },
  {
    path:'winfinty-term-other',component:WinfinityTermOtherComponent
  },
  {
    path:'filter-close',component:FilterCloseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
