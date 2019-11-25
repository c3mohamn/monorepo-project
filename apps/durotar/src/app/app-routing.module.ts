import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DurotarComponent } from './durotar/durotar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DurotarComponent
  },
  {
    path: 'mulgore',
    pathMatch: 'full',
    loadChildren: () => import('../../../mulgore/src/app/app.module').then(m => m.MulgoreAppModule),
    data: { title: 'Mulgore' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}