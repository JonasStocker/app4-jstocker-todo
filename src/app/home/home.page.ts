import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  title = 'Aufgaben';

  todo = [];

  constructor() {
    this.todo = [
      {title: 'Arbeitsauftrag erledigen', priority: 1, due: '2020-03-25', done: false},
      {title: 'Arbeitsauftrag in APP4', priority: 2, due: '2020-03-18', done: true}
    ];
  }

  setDone(item){
    console.log(this.todo);
  }
}
