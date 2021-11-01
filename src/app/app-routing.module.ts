import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardAdminGuard } from './auth/auth-guard-admin.guard';
import { AuthGuardUserGuard } from './auth/auth-guard-user.guard';

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
    loadChildren: () => import('./views/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin-cars',
    loadChildren: () => import('./views/admin-cars/admin-cars.module').then( m => m.AdminCarsPageModule),
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'car-create',
    loadChildren: () => import('./views/car-create/car-create.module').then( m => m.CarCreatePageModule),
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'car-details/:id',
    loadChildren: () => import('./views/car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'car-edit/:id',
    loadChildren: () => import('./views/car-edit/car-edit.module').then( m => m.CarEditPageModule),
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-users',
    loadChildren: () => import('./views/admin-users/admin-users.module').then( m => m.AdminUsersPageModule),
    canActivate: [AuthGuardAdminGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
