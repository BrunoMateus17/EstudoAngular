import { Component,OnInit } from '@angular/core';

@Component({
  	selector: 'app-first-componente',
  	templateUrl: './first-componente.component.html',
  	styleUrls: ['./first-componente.component.css']
})
export class FirstComponenteComponent implements OnInit {
    name:string = 'Bruno';
	age:number = 24;
	hobbies = ["futebol","tennis"];

    constructor(){}
    ngOnInit(): void {
		
    }
}
