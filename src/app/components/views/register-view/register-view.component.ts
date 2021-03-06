import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  @Output() submitted: EventEmitter<any>
  registerForm: FormGroup

  constructor() {

    this.submitted = new EventEmitter();
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      access_email: new FormControl(''),
      password: new FormControl(''),
      type: new FormControl('')
    })
    
  }

  ngOnInit(): void {
  }

  onRegister() {
    this.submitted.emit(this.registerForm.value)
  }

}
