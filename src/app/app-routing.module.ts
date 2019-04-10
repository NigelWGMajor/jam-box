import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MusicComponent } from './music/music.component';
import { StudioComponent } from './studio/studio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LogonComponent } from './logon/logon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'music', component: MusicComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logon', component: LogonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: true, // temporary
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 400] // x, y offset for sticky stuff.
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
