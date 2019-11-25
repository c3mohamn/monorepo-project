import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MulgoreComponent } from '../mulgore/mulgore.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MulgoreComponent
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}