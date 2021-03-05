import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogIn } from '../../../models/interfaces/interfaces'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Output() submitted: EventEmitter<LogIn>
  loginForm: FormGroup

  constructor() { 

    this.submitted = new EventEmitter();

    this.loginForm = new FormGroup({
      access_email: new FormControl(''),
      password: new FormControl(''),
    }, [])

  }

  ngOnInit(): void {
  }

  onLogIn() {
    this.submitted.emit(this.loginForm.value);
  }

}
