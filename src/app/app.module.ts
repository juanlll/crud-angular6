import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route  } from '@angular/router/';


import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { ListaComponent } from './lista/lista.component';

const routes: Route[] = [
{path:'',component:RecordsComponent}
];

@NgModule({
  declarations: [//aqui se definene los componentes
    AppComponent, RecordsComponent, ListaComponent
  ],
  imports: [//aqui definimos los modulos
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],//aqui se definen los servicios 
  bootstrap: [AppComponent]
})
export class AppModule { }
