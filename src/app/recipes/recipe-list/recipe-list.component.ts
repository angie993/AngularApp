import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // array of recipe objects (model we created)
  recipes: Recipe[] = [
    // calling the constructor
    new Recipe('A test Recipe', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixCeUjheNI6aDMAdYU6qdc8wOB61PLdBp1LamL54dMLGbQX5b'),
    new Recipe('A test Recipe', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixCeUjheNI6aDMAdYU6qdc8wOB61PLdBp1LamL54dMLGbQX5b'),
    new Recipe('A test Recipe', 'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixCeUjheNI6aDMAdYU6qdc8wOB61PLdBp1LamL54dMLGbQX5b')

  ];

  constructor() { }

  ngOnInit() {
  }

}
