import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  constructor() { }
  skills = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'Node.js'},
    {id: 3, name: 'Jango'},
    {id: 3, name: 'Html'},
];
  ngOnInit() {
  }

}
