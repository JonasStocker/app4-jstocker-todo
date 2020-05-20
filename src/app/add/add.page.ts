import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  titleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController, private navParams: NavParams) {
    this.titleForm = this.formBuilder.group({
      title: ["", Validators.required],
      note: [""],
      due: ["", Validators.required]
    });
  }

  ngOnInit() {
    let title = this.navParams.get("title");
    this.titleForm.get("title").setValue(title);

    let note = this.navParams.get("note");
    this.titleForm.get("note").setValue(note);

    let due = this.navParams.get("due");
    this.titleForm.get("due").setValue(due);
  }
  
  async save() {
    const result = {
      title: this.titleForm.get("title").value,
      note: this.titleForm.get("note").value,
      due: this.titleForm.get("due").value
    };

    await this.modalCtrl.dismiss(result);
  }
}
