import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogInService } from '../../../services/log-in/log-in.service'

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.css']
})

export class LoginWrapperComponent implements OnInit {

  @Output() navigate: EventEmitter<string>
  
  constructor(private logInService: LogInService) {
    this.navigate = new EventEmitter()
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

  goToPage(page: string) {
    this.navigate.emit(page)
  }

}
