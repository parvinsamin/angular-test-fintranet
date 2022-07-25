import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./modules/views/home/home.module').then((m) => m.HomeModule),
    // resolve: {
    //   country: GetCountryResolver
    // },
  },
  
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }) 
  ],
  
  exports: [RouterModule],
  // providers: [GetCountryResolver],
})
export class AppRoutingModule { }
