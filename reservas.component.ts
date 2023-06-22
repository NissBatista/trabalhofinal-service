import { Component , OnInit} from '@angular/core';
import { ReservasService } from '../services/reservas.service';




@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit{
  

  constructor(private service : ReservasService){
    
    console.log(this.service.reservasList)
  }

  ngOnInit(): void {
    this.service.requisicao()
    .subscribe((dados) => this.service.reservasList = dados)
  }
}
