import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./views/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-cars',
    loadChildren: () => import('./views/admin-cars/admin-cars.module').then( m => m.AdminCarsPageModule)
  },
  {
    path: 'car-create',
    loadChildren: () => import('./views/car-create/car-create.module').then( m => m.CarCreatePageModule)
  },
  {
    path: 'car-details/:id',
    loadChildren: () => import('./views/car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'car-edit/:id',
    loadChildren: () => import('./views/car-edit/car-edit.module').then( m => m.CarEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
