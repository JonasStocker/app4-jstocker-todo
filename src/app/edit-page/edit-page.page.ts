import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {

  titleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController, private navParams: NavParams) {
    this.titleForm = this.formBuilder.group({
      title: ["", Validators.required],
      note: [""]
    });
  }

  ngOnInit() {
    let title = this.navParams.get("title");
    this.titleForm.get("title").setValue(title);

    let note = this.navParams.get("note");
    this.titleForm.get("note").setValue(note);
  }

  async save() {
    const result = {
      title: this.titleForm.get("title").value,
      note: this.titleForm.get("note").value
    };

    await this.modalCtrl.dismiss(result);
  }

}
