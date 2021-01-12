import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
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
        this.juegos=resp
        console.log(resp);
      })
  }

}
