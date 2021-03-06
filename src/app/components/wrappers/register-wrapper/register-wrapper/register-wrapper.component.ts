import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../../services/register/register.service'

@Component({
  selector: 'app-register-wrapper',
  templateUrl: './register-wrapper.component.html',
  styleUrls: ['./register-wrapper.component.css']
})
export class RegisterWrapperComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmittedRegister(data: object) {
    this.registerService.attemptRegister(data)
      .subscribe( (response) => {
        console.log(response)
      })
  }

}
