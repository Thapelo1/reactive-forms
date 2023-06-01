import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

interface User {
  name: string;
  email: string;
  bio: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() user!: User;

  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: '',
      email: '',
      bio: ''
    })
  }

  ngOnInit() {
    this.userForm.setValue({
      name: this.user.name,
      email: this.user.email,
      bio: this.user.bio
    })
  }

}
