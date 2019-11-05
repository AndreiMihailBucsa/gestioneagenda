import { Component } from '@angular/core';
import { Contatto } from './contatto.model.ts';

@Component({
  selector:'app-contatto',
  templateUrl:'./contatto.component.html',
  styleUrls:['./contatto.component.css']
})

export class ContattoComponent{
  contatto: Contatto = new Contatto('Andrei', 'Bucsa', 'andrei.bucsa@marconirovereto.it', '334 334 3817', 4);
}