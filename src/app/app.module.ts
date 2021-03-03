import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginWrapperComponent } from './components/wrappers/login-wrapper/login-wrapper.component';
import { LoginViewComponent } from './components/views/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginWrapperComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
