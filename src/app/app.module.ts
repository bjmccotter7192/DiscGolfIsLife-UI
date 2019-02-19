import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiscServiceService } from './services/disc-service.service';
import { AppComponent } from './app.component';
import { AddDiscComponent } from './add-disc/add-disc.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyBagComponent } from './my-bag/my-bag.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyDiscComponent } from './my-disc/my-disc.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDiscComponent,
    MainPageComponent,
    MyBagComponent,
    MyDiscComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [DiscServiceService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
