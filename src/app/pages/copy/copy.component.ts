import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Game } from '../../interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2'
import { SeoService } from '../../services/seo.service'

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss'],
})
export class CopyComponent implements OnInit {
  juegos: Game[] = [];

  constructor(private gameService: GameService,
    private _SeoService: SeoService,
    private title: Title
  ) { }

  ngOnInit() {
    let t: string = 'Seo juegos';
    this.title.setTitle(t);
    this._SeoService.generateTags({
      title: 'Seo juegos',
      description: 'encuesta de juegos',
      slug: 'encuesta-juegos'
    })

    this.getNominados();
  }

  getNominados() {
    this.gameService.getNominados().subscribe(juegos => {
      this.juegos = juegos
      // this.games= juegos
    })
  }


  votarjuego(juego: Game) {
    this.gameService.votarJuego(juego.id).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire('Gracias', resp.mensaje, 'success')
      } else {
        Swal.fire('Oops', resp.mensaje, 'error')
      }
      console.log(resp);

    })
  }


}
