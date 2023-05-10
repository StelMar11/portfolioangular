import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalesComponent } from './componentes/modales/modales.component';
import { EditRedesComponent } from './componentes/modalesSi/edit-redes/edit-redes.component';
import { EditBannerComponent } from './componentes/modalesSi/edit-banner/edit-banner.component';
import { ImgPerfilComponent } from './componentes/modalesSi/img-perfil/img-perfil.component';
import { EditAboutComponent } from './componentes/modalesSi/edit-about/edit-about.component';
import { EditExperienciaComponent } from './componentes/modalesSi/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/modalesSi/edit-educacion/edit-educacion.component';
import { EditHabilidadesComponent } from './componentes/modalesSi/edit-habilidades/edit-habilidades.component';
import { EditProyectoComponent } from './componentes/modalesSi/edit-proyecto/edit-proyecto.component';
import { ModalLoginComponent } from './componentes/modalesSi/modal-login/modal-login.component';
import { ModalLogoutComponent } from './componentes/modalesSi/modal-logout/modal-logout.component';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    ModalesComponent,
    EditRedesComponent,
    EditBannerComponent,
    ImgPerfilComponent,
    EditAboutComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    EditHabilidadesComponent,
    EditProyectoComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    IndexComponent,
    Pagina404Component,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
