import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paisaje } from './paisaje';
import { PaisajesService } from './paisajes.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-paisajes',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './paisajes.component.html',
  styleUrl: './paisajes.component.css'
})

export class PaisajesComponent  implements OnInit{

  repositorioPaisaje: Paisaje[];

  constructor(private paisajesService: PaisajesService ){

  }
    ngOnInit(): void {
      this.paisajesService.getPaisajes().subscribe(
        paisajes => this.repositorioPaisaje = paisajes
      )
    }
  
  }

