import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';
import { SeoService } from '../../services/seo.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];
  constructor(private db: AngularFirestore,
    private _SeoService: SeoService,
    private title: Title
  ) { }

  ngOnInit(): void {
    let t: string = 'Seo Inicio';
    this.title.setTitle(t);
    this._SeoService.generateTags({
      title: 'Seo Inicio',
      description: 'Graficas',
      slug: 'Graficas'
    })

    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp: any[]) => {
          return resp.map(juego => {
            return {
              name: juego.name,
              value: juego.votos
            }
          })
        }))
      .subscribe(resp => {
        this.juegos = resp
        console.log(resp);
      })
  }

}
