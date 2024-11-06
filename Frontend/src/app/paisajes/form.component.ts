import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaisajesComponent } from './paisajes.component';
import { Paisaje } from './paisaje';
import { PaisajesService } from './paisajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,PaisajesComponent],
  templateUrl: './form.component.html'
})
export class FormComponent {

  public paisaje:Paisaje = new Paisaje()
  titulo:string = "Formulario de Ingreso de Paisaje"

  constructor(private paisajesService: PaisajesService,private router: Router){}

  ngOnInit(){}

  public create():void{

    this.paisajesService.create(this.paisaje).subscribe(response => this.router.navigate(["/paisajes"]))
  }
}
