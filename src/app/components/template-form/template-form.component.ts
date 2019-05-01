import { Component, OnInit } from '@angular/core';
import { User } from './../../model/user.class';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public user = new User();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue)
  {
      if(formValue.valid){
        console.log("form :", this.user);
      }
  }

  onResetForm(frmUser : NgForm)
  {
       frmUser.reset();
  }

}
