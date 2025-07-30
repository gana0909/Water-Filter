import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path: '**', redirectTo: 'home' },
];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled'  // 👈 Important line
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



