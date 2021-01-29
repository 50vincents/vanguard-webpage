import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverviewComponent } from '../overview/overview.component';
import { PerformanceComponent } from '../performance/performance.component';
import { AppComponent } from './app.component';
import { BannerComponent } from '../banner/banner.component';
import { BarComponent } from '../bar/bar.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PerformanceComponent,
    HeaderComponent,
    BannerComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
