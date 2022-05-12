import { Component, OnInit } from '@angular/core';
import {NgSelectConfig} from "@ng-select/ng-select";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedCar: number | undefined;

  cars = [
    { id: 1, name: 'London' },
    { id: 2, name: 'Brighton' },
    { id: 3, name: 'Edinburgh' },
    { id: 4, name: 'Manchester' },
  ];
  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    // set the bindValue to global config when you use the same
    // bindValue in most of the place.
    // You can also override bindValue for the specified template
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
  }

}
