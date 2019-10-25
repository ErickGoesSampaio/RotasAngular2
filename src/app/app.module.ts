import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './src/app/components/paginas/inicial/inicial.component';
import { QuemSomosComponent } from './src/app/components/paginas/quem-somos/quem-somos.component';
import { ContatoComponent } from './src/app/components/paginas/contato/contato.component';
import { InicialRouting } from './src/app/components/paginas/inicial/inicial-routing.module.ts/inicial-routing.module.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    QuemSomosComponent,
    ContatoComponent,
    InicialRouting.Module.TsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
