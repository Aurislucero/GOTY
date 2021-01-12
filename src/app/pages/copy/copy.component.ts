import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements OnInit {
  juegos: Game[] =[];

  constructor(private gameService:GameService ) { }

  ngOnInit(){
    this.gameService.getNominados().subscribe(juegos=>{
      this.juegos=juegos
      // this.games= juegos
    })

  }

  votarjuego(juego:Game){
    this.gameService.votarJuego(juego.id).subscribe((resp:any) =>{
      if(resp.ok){
        Swal.fire('Gracias',resp.mensaje,'success')
      }else{
        Swal.fire('Oops',resp.mensaje,'error')
      }
      console.log(resp);
      
    })
  }


}
