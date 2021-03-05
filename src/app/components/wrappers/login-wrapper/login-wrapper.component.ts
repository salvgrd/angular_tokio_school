import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../../services/log-in/log-in.service'

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.css']
})

export class LoginWrapperComponent implements OnInit {

  constructor(private logInService: LogInService) {
  }

  ngOnInit(): void {
  }

  logInSubmitted(data: object) {
    this.logInService.attemptLogIn(data)
      .subscribe( (response) => this.handleResponse(response) )
  }

  handleResponse(response: any) {
    console.log(response)
  }

}
