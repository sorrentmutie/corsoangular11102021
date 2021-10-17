import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/ecommerce/components/product-details/product-details.component';
import { CatalogueComponent } from './features/ecommerce/pages/catalogue/catalogue.component';
import { HeroReactiveTemplatePageComponent } from './features/heroes/pages/hero-reactive-template-page/hero-reactive-template-page.component';
import { HeroTemplatePageComponent } from './features/heroes/pages/hero-template-page/hero-template-page.component';
import { RandomUsersPageComponent } from './features/randomusers/pages/random-users-page/random-users-page.component';
import { NotFoundPageComponent } from './features/ui/not-found-page/not-found-page.component';
import { WelcomeComponent } from './features/ui/welcome/welcome.component';
import { MyGuard } from './shared/my.guard';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: CatalogueComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'randomusers', component: RandomUsersPageComponent, canActivate:[ MyGuard]},
  {path: 'heroes-template', component: HeroTemplatePageComponent},
  {path: 'heroes-reactive', component: HeroReactiveTemplatePageComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
