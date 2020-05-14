import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { v4 } from 'uuid';
import { ModalController } from '@ionic/angular';
import { EditPagePage } from '../edit-page/edit-page.page';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Topic } from 'src/models/Topic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  todo = [
    new Topic('Arbeitsauftrag erledigen', 'Arbeitsauftrag muss noch erledigt werden', '2020-03-25', 'false'),
    new Topic('Arbeitsauftrag in APP4', 'Arbeitsauftrag in APP4 wurde schon erledigt', '2020-03-18', 'true'),
    new Topic('Todo', 'Arbeitsauftrag in APP4', '2020-05-14'),
  ];

  

  title = 'Aufgaben';

  constructor(private router: Router, private modalCtrl: ModalController) {
    
  }

  showNote(id) {
    const pos = this.todo.findIndex((t) => {
      return t.id == id;
    });

    if (pos > -1) {
      const title = this.todo[pos].title;
      const note = this.todo[pos].note;

      let extras: NavigationExtras = {
        state: {
          id: id,
          title: title,
          note: note,
          content: this.todo[pos].note
        }
      };

      this.router.navigate(['/details'], extras);
    }
  }

  setDone(item){
    console.log(item.done);
  }

  async editNote(id, item) {
    console.log(id);
    const pos = this.todo.findIndex((t) => {
      return t.id == id;
    });

    if (pos > -1) {
      const modal = await this.modalCtrl.create({
        component: EditPagePage,
        componentProps: {
          title: this.todo[pos].title,
          note: this.todo[pos].note
        }
      });

      await modal.present();

      const { data } = await modal.onWillDismiss();

      if(data) {
        this.todo[pos].title = data.title;
        this.todo[pos].note = data.note;
      }
    }

    item.close();
  }
}
