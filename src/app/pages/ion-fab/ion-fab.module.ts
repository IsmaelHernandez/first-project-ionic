import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonFabPageRoutingModule } from './ion-fab-routing.module';

import { IonFabPage } from './ion-fab.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IonFabPageRoutingModule
  ],
  declarations: [IonFabPage]
})
export class IonFabPageModule {}
