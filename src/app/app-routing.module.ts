import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsMainPageComponent } from './components/products-main-page/products-main-page.component';

const routes: Routes = [
  {path:'products',component:ProductsMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
