import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgSelectConfig} from "@ng-select/ng-select";
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
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
  activeStepIndex: any = 0;
  addressAdded= true;
  cities = [
    { id: 1, name: 'London' },
    { id: 2, name: 'Brighton' },
    { id: 3, name: 'Edinburgh' },
    { id: 4, name: 'Manchester' },
  ];
  distances = [
    {name: '2 km away'},
    {name: '13 km away'},
    {name: '6 km away'},
    {name: '7 km away'},
    {name: '2 km away'},
    {name: '0.5 km away'},
    {name: '4 km away'},
    {name: '5.1 km away'},
    {name: '2 km away'},
    {name: '6 km away'},
  ];
  leftImages = [
    {src: 'assets/images/female7.jpg'},
    {src: 'assets/images/female55.svg'},
    {src: 'assets/images/female5.jpg'},
    {src: 'assets/images/female1.jpg'},
    {src: 'assets/images/female10.jpg'},
    {src: 'assets/images/female12.jpg'},
    {src: 'assets/images/female14.jpg'},
    {src: 'assets/images/female16.jpg'},
    {src: 'assets/images/female18.jpg'},
    {src: 'assets/images/female20.jpg'},
  ];
  rightImages = [
    {src: 'assets/images/female13.jpg'},
    {src: 'assets/images/female32.svg'},
    {src: 'assets/images/female6.jpg'},
    {src: 'assets/images/female8.jpg'},
    {src: 'assets/images/female11.jpg'},
    {src: 'assets/images/female2.jpg'},
    {src: 'assets/images/female15.jpg'},
    {src: 'assets/images/female17.jpg'},
    {src: 'assets/images/female19.jpg'},
    {src: 'assets/images/female21.jpg'},
  ];
  bubbles = [
    {name: "I'm hungry, let's get pizza"},
    {name: 'Wanna party till dawn?'},
    {name: 'Come over, bring snacks'},
    {name: 'I have some good wine at my place..'},
    {name: 'My TV is broke, can you come help?'},
    {name: "My Parents went to vacation. Let's party!"},
    {name: "I'm so bored.."},
    {name: "I need a favor.."},
    {name: "Come over"},
    {name: "Let's party"},
  ];
  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
  }


next(e: any) {
  this.activeStepIndex = null;
  setTimeout(() => {
    this.activeStepIndex = e.selectedIndex + 1;
    if (this.activeStepIndex === 5 && this.selectedCity === undefined) {
      this.addressAdded = false
    } else {
      this.addressAdded = true;
      e.next();
    }
  }, 10)
}
}
