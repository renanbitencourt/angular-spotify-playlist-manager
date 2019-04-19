import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserInfoComponent },
  { path: 'playlists/:uid', component: PlaylistsComponent },
  { path: 'tracks/:uid/:pid', component: TracksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
