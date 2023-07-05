import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show:boolean = true;
  value:string = "";
  showMessage():void{
    // troca de estado(toggle)
    this.show = !this.show;
    // if(this.show == false){
    //   this.show = true;
    // }else{
    //   this.show = false;
    // }
  }

  showValue(event:any,name:string):void {
    this.value = event.target.value;
  }
}
