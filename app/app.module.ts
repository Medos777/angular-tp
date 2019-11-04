import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';
import {FormsModule} from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
import { ProfilsComponent } from './profils/profils.component';
import { OrientationComponent } from './orientation/orientation.component';
import { SaisonComponent } from './saison/saison.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    PersonneComponent,
    CalculComponent,
    ProduitComponent,
    CandidatViewComponent,
    ProfilsComponent,
    OrientationComponent,
    SaisonComponent,
    ColoriageComponent,
    EtudiantsComponent
  ],
  imports: [
    BrowserModule,
 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
