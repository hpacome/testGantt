import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { AppComponent }  from './app.component';
import { EditService } from '@syncfusion/ej2-angular-gantt';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	GanttModule 
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
