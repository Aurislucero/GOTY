import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CopyComponent } from './pages/copy/copy.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SeoService } from './services/seo.service';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CopyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),

  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
