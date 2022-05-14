import { Component, OnInit } from '@angular/core';
import {NgSelectConfig} from "@ng-select/ng-select";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0, width: "100%", height: "0",  'object-fit': "cover"}),
        animate(500, style({opacity:1, width: "100%", height: "100%"}))
      ]),
      transition(':leave', [
        animate(500, style({opacity:0,  width: "100%", height: "0"}))
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {
  selectedCity: number | undefined;
  activeStepIndex = 0;
  addressAdded= true;
  cities = [
    { id: 1, name: 'London' },
    { id: 2, name: 'Brighton' },
    { id: 3, name: 'Edinburgh' },
    { id: 4, name: 'Manchester' },
  ];
  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
  }


next(e: any) {

  this.activeStepIndex = e.selectedIndex;
  console.log(this.activeStepIndex ,this.selectedCity)
  if (this.activeStepIndex === 4 && this.selectedCity === undefined){
    console.log(this.activeStepIndex ,this.selectedCity)
    this.addressAdded = false
    } else {
    console.log(this.activeStepIndex ,this.selectedCity)
    this.addressAdded = true;
      e.next();
    }
  }
}
