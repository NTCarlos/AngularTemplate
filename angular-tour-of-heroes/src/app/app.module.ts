import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntriesComponent } from './modules/entries/entries.component';
import { HttpClientModule} from '@angular/common/http';
import { EntriesService } from './shared/services/entries.service';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    EntriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
