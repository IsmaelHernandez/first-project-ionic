import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollInfiPageRoutingModule } from './scroll-infi-routing.module';

import { ScrollInfiPage } from './scroll-infi.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ScrollInfiPageRoutingModule
  ],
  declarations: [ScrollInfiPage]
})
export class ScrollInfiPageModule {}
