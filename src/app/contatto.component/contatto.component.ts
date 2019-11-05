import { Component } from '@angular/core';
import { Contatto } from './contatto.model.ts';

@Component({
  selector:'app-contatto',
  templateUrl:'./contatto.component.html',
  styleUrls:['./contatto.component.css']
})

export class ContattoComponent{
  contatto: Contatto = new Contatto('Andrei', 'Bucsa', 'nome.cognome@marconirovereto.it', '1234567890', 4);
}