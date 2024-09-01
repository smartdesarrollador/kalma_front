import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { VistaComponent } from './pages/vista/vista.component';
import { InicioComponent } from './pages/vista/inicio/inicio.component';

import { CursosComponent } from './pages/vista/cursos/cursos.component';

import { AdminGuard } from './guards/admin.guard';
import { EmpleadorGuard } from './guards/empleador.guard';
import { TrabajadorGuard } from './guards/trabajador';
import { AuthGuard } from './guards/auth.guard';

/* ---------------------------------------------------------------------- */

import { LayoutUnoComponent } from './layout/layout-uno/layout-uno.component';
import { LayoutDosComponent } from './layout/layout-dos/layout-dos.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutTresComponent } from './layout/layout-tres/layout-tres.component';
import { DetalleCursoComponent } from './pages/vista/detalle-curso/detalle-curso.component';
import { ContactoComponent } from './pages/vista/contacto/contacto.component';
import { EspecialidadesComponent } from './pages/vista/especialidades/especialidades.component';
import { MisionVisionComponent } from './pages/vista/nosotros/mision-vision/mision-vision.component';
import { EquipoComponent } from './pages/vista/nosotros/equipo/equipo.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'que-es-kalma',
        component: MisionVisionComponent,
      },
      {
        path: 'equipo-kalma',
        component: EquipoComponent,
      },
    ],
  },
  /* {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'especialidades',
        component: EspecialidadesComponent,
      },
      {
        path: 'detalle',
        component: DetalleCursoComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
    ],
  }, */
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'layout-uno',
        component: LayoutUnoComponent,
      },
      {
        path: 'layout-dos',
        component: LayoutDosComponent,
      },
      {
        path: 'layout-tres',
        component: LayoutTresComponent,
      },
    ],
  },
  {
    path: '**',
    /* canActivate: [AuthGuard], */ component: PageNotFoundComponent,
  },
];
