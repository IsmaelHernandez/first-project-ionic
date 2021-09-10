import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollInfiPage } from './scroll-infi.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollInfiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollInfiPageRoutingModule {}
