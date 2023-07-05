import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService){}
  animalDetails = "";
  animals:Animal[] = [
    {name:"Turca",type:"Dog",age:2},
    {name:"Tom",type:"cat",age:2},
    {name:"Frida",type:"dog",age:2},
    {name:"ziggy",type:"tiger",age:2}
  ];

  showAge(animal:Animal): void{
    this.animalDetails = "O pet " + animal.name + " tem " + animal.age + " anos";
  }

  removeAnimal(animal:Animal){
    this.animals = this.listService.remove(this.animals,animal)
  }
}
