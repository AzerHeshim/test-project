import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {NgStepperModule} from "angular-ng-stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertModule} from "ngx-bootstrap/alert";
import {TypeaheadModule} from "ngx-bootstrap/typeahead";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {TermsComponent} from "./terms/terms.component";
import {PrivacyComponent} from "./privacy/privacy.component";
import {TwoDigitDecimaNumberDirective} from "./directives/two-digit-handling.directive";
import {FourDigitDecimaNumberDirective} from "./directives/four-digit-handling.directive";
import {UsernameMaxLengthDirective} from "./directives/username-max-length.directive";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {RecaptchaModule} from "ng-recaptcha";
import {ModalModule} from "ngx-bootstrap/modal";

@Injectable({providedIn: 'root'})
export class HttpClientTrans extends HttpClient {
  constructor(handler: HttpBackend) {
    super(handler);
  }
}

export function HttpLoaderFactory(httpClient: HttpClientTrans) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TwoDigitDecimaNumberDirective,
    FourDigitDecimaNumberDirective,
    TermsComponent,
    PrivacyComponent,
    UsernameMaxLengthDirective,
    HomeComponent
  ],
  imports: [
    RecaptchaModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgSelectModule,
    FormsModule,
    CdkStepperModule,
    NgStepperModule,
    BrowserAnimationsModule,
    AlertModule,
    TypeaheadModule,
    HttpClientModule,ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClientTrans]
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
