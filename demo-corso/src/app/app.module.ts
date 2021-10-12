import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/ui/header/header.component';
import { FooterComponent } from './features/ui/footer/footer.component';
import { MenuComponent } from './features/ui/menu/menu.component';
import { CatalogueComponent } from './features/ecommerce/pages/catalogue/catalogue.component';
import { ProductsListComponent } from './features/ecommerce/components/products-list/products-list.component';
import { TransformNamePipe } from './features/ecommerce/pipes/transform-name.pipe';
import { TransformSpecialPipe } from './features/ecommerce/pipes/transform-special.pipe';
import { ProductDetailsComponent } from './features/ecommerce/components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FatherComponent } from './features/theory/components/father/father.component';
import { SonComponent } from './features/theory/components/son/son.component';
import { MyAsyncPipeComponent } from './features/theory/components/my-async-pipe/my-async-pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomUsersPageComponent } from './features/randomusers/pages/random-users-page/random-users-page.component';
import { HeroTemplatePageComponent } from './features/heroes/pages/hero-template-page/hero-template-page.component';
import { HeroReactiveTemplatePageComponent } from './features/heroes/pages/hero-reactive-template-page/hero-reactive-template-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CatalogueComponent,
    ProductsListComponent,
    TransformNamePipe,
    TransformSpecialPipe,
    ProductDetailsComponent,
    FatherComponent,
    SonComponent,
    MyAsyncPipeComponent,
    RandomUsersPageComponent,
    HeroTemplatePageComponent,
    HeroReactiveTemplatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
