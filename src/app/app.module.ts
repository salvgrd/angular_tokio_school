import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginWrapperComponent } from './components/wrappers/login-wrapper/login-wrapper.component';
import { LoginViewComponent } from './components/views/login-view/login-view.component';

import { RegisterPageComponent } from './pages/register-page/register-page/register-page.component';
import { RegisterViewComponent } from './components/views/register-view/register-view.component';
import { RegisterWrapperComponent } from './components/wrappers/register-wrapper/register-wrapper/register-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginWrapperComponent,
    LoginViewComponent,
    RegisterPageComponent,
    RegisterWrapperComponent,
    RegisterViewComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
