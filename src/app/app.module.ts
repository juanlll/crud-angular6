import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route  } from '@angular/router/'


import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';


const routes: Route[]= [//aqui se definen las rutas
{path:'',component:RecordsComponent},
{path:'estadistica',component:EstadisticaComponent}
];


@NgModule({
  declarations: [//aqui se definene los componentes
    AppComponent,
    RecordsComponent,
    EstadisticaComponent
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
