import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [
    {
      icon: 'logo-playstation',
      name: 'Action Sheet', 
      redirectTo: '/action-sheet'
    },
    {
      icon: 'settings-outline', 
      name: 'Alert', 
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar', 
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button', 
      redirectTo: '/button'
    },
    {
      icon: 'paw-outline',
      name: 'Cards', 
      redirectTo: '/card'
    }, 
    {
      icon: 'checkmark-circle-outline',
      name: 'CheckBox', 
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Date', 
      redirectTo: '/datetime'
    },
    {
      icon: 'cube-outline',
      name: 'Ion-Fab', 
      redirectTo: '/ion-fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid', 
      redirectTo: '/grid'
    },
    {
      icon: 'attach-outline',
      name: 'Scroll-Infinite', 
      redirectTo: '/scroll-infi'
    },
    {
      icon: 'fast-food-outline',
      name: 'Input', 
      redirectTo: '/input'
    }    
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
