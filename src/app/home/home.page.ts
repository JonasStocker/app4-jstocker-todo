import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { v4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  todo = [
    {id: v4(), title: 'Arbeitsauftrag erledigen', note: 'Arbeitsauftrag muss noch erledigt werden', priority: 1, due: '2020-03-25', done: false},
    {id: v4(), title: 'Arbeitsauftrag in APP4', note: 'Arbeitsauftrag in APP4 wurde schon erledigt', priority: 2, due: '2020-03-18', done: true}
  ];

  title = 'Aufgaben';

  constructor(private router: Router) {
  }

  ionViewWillEnter() {
    let id = v4();
    console.log(this.todo);
  }

  showNote(id) {
    const pos = this.todo.findIndex((t) => {
      return t.id == id;
    });

    console.log(pos);

    if (pos > -1) {
      const title = this.todo[pos].title;
      
      console.log("Titel: " + title);

      let extras: NavigationExtras = {
        state: {
          id: id,
          title: title,
          content: this.todo[pos].note
        }
      };

      this.router.navigate(['/details'], extras);
    }
  }

  setDone(item){
    console.log(item.done);
  }
}
