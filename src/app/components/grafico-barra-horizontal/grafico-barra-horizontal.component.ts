import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() results: any[] = []
  // results:any[]=[
  //   {
  //     "name": "juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "juego 2",
  //     "value": 15
  //   },
  //   {
  //     "name": "juego 3",
  //     "value": 18
  //   },
  //   {
  //     "name": "juego 4",
  //     "value": 30
  //   }
  // ];
  // options
  showXAxis :boolean = true;
  showYAxis:boolean  = true;
  gradient:boolean  = false;
  showLegend:boolean  = true;
  showXAxisLabel:boolean = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel:boolean  = true;
  yAxisLabel = 'Votos';

  colorScheme ='nightLights';
  intervalo:any;
  constructor() {
  //  this.intervalo= setInterval(()=>{
  //     const newResults = [...this.results];
  //     for (let i in this.results){
  //       this.results[i].value=Math.round(Math.random()*500);
  //      }
  //      this.results=[...newResults];
  //   },1500);
   }

  ngOnInit(): void {
  }
  
  ngOnDestroy(){
    clearInterval(this.intervalo)
  }
  // onSelect(event:any) {
  //   console.log(event);
  // }

}
