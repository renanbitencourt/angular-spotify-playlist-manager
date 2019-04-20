import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule,
  MatIconModule, MatListModule, MatDialogModule, MatToolbarModule, MatPaginatorModule,
  MatSelectModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlaylistDialogComponent } from './playlist-dialog/playlist-dialog.component';
import { TrackDialogComponent } from './track-dialog/track-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInfoComponent,
    PlaylistsComponent,
    TracksComponent,
    PlaylistDialogComponent,
    TrackDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PlaylistDialogComponent,
    TrackDialogComponent
  ]
})
export class AppModule { }
