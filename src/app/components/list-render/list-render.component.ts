import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService){
    this.getAnimals();
  }
  animalDetails = "";
  animals:Animal[] = [];

  showAge(animal:Animal): void{
    this.animalDetails = "O pet " + animal.name + " tem " + animal.age + " anos";
  }

  removeAnimal(animal:Animal){
    this.animals = this.animals.filter(value=> value.name != animal.name);
    this.listService.remove(animal.id).subscribe();
  }
  getAnimals():void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
